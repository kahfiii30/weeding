import React, { useState } from 'react';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';

const AdminDashboard = () => {
  const [inputText, setInputText] = useState('');
  const [generatedLinks, setGeneratedLinks] = useState([]);

  const handleProcess = () => {
    // Parse lines: "Name, Number"
    const lines = inputText.split('\n').filter(line => line.trim() !== '');
    
    const results = lines.map((line, index) => {
      const parts = line.split(',');
      const name = parts[0] ? parts[0].trim() : `Tamu ${index + 1}`;
      let number = parts[1] ? parts[1].trim() : '';
      
      // Clean up number (remove non-digits, ensure starts with 62)
      number = number.replace(/\D/g, '');
      if (number.startsWith('0')) {
        number = '62' + number.substring(1);
      } else if (!number.startsWith('62') && number.length > 8) {
        number = '62' + number;
      }

      const encodedName = encodeURIComponent(name);
      const uniqueLink = `${window.location.origin}/?to=${encodedName}`;
      const waLink = number ? `https://wa.me/${number}?text=Halo ${encodedName}, Kami mengundang Anda untuk hadir di pernikahan kami. Berikut link undangannya: ${uniqueLink}` : '';

      return {
        No: index + 1,
        'Nama Tamu': name,
        'Nomor WhatsApp': number,
        'Link Undangan Unik': uniqueLink,
        'Link Kirim WA': waLink
      };
    });

    setGeneratedLinks(results);
  };

  const handleExportCSV = () => {
    if (generatedLinks.length === 0) return;
    const csv = Papa.unparse(generatedLinks);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'Daftar_Tamu_Undangan.csv');
  };

  const handleImportContacts = async () => {
    if (!('contacts' in navigator && 'ContactsManager' in window)) {
      alert('Maaf, fitur ini memerlukan dukungan browser khusus (seperti Google Chrome di HP Android).');
      return;
    }
    
    try {
      const contacts = await navigator.contacts.select(['name', 'tel'], { multiple: true });
      if (contacts && contacts.length > 0) {
        const newText = contacts.map(c => {
          const name = c.name && c.name[0] ? c.name[0] : 'Tanpa Nama';
          const tel = c.tel && c.tel[0] ? c.tel[0] : '';
          return `${name}, ${tel}`;
        }).join('\n');
        
        setInputText(prev => (prev ? prev + '\n' + newText : newText));
      }
    } catch (err) {
      console.error(err);
      alert('Akses kontak dibatalkan atau gagal.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 font-body">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-heading text-wedding-dark mb-2">Vendor Dashboard</h1>
        <p className="text-gray-500 mb-8">Fitur eksklusif untuk vendor: Generate otomatis ribuan link unik tamu undangan & ekspor ke CSV/Excel.</p>

        <div className="mb-6">
          <div className="flex justify-between items-end mb-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Input Daftar Tamu (Format: Nama, Nomor WA)
              </label>
              <p className="text-xs text-gray-400 mt-1">Tiap tamu pisahkan dengan baris baru (Enter).</p>
            </div>
            <button 
              onClick={handleImportContacts}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-sm"
              title="Khusus Chrome Android"
            >
              📱 Import Kontak HP
            </button>
          </div>
          <textarea 
            className="w-full h-48 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold-soft resize-none"
            placeholder="Budi Santoso, 081234567890&#10;Andi & Partner, 08111222333"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>

        <div className="flex gap-4 mb-10">
          <button 
            onClick={handleProcess}
            className="bg-wedding-dark text-white px-6 py-2 rounded-lg hover:bg-wedding-brown transition-colors"
          >
            Proses Data
          </button>
          
          {generatedLinks.length > 0 && (
            <button 
              onClick={handleExportCSV}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              Export ke CSV / Excel
            </button>
          )}
        </div>

        {generatedLinks.length > 0 && (
          <div>
            <h2 className="text-xl font-heading text-wedding-dark mb-4">Hasil Generate ({generatedLinks.length} Tamu)</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-medium">No</th>
                    <th className="px-4 py-3 font-medium">Nama Tamu</th>
                    <th className="px-4 py-3 font-medium">Nomor WA</th>
                    <th className="px-4 py-3 font-medium">Link Kirim Pesan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {generatedLinks.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-500">{row.No}</td>
                      <td className="px-4 py-3 font-medium">{row['Nama Tamu']}</td>
                      <td className="px-4 py-3 text-gray-500">{row['Nomor WhatsApp'] || '-'}</td>
                      <td className="px-4 py-3">
                        {row['Link Kirim WA'] ? (
                          <a href={row['Link Kirim WA']} target="_blank" rel="noreferrer" className="text-wedding-gold hover:underline">
                            Kirim WA
                          </a>
                        ) : (
                          <span className="text-gray-400 text-xs">Isi nomor WA</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
