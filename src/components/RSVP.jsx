import React, { useState, useEffect } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'Hadir',
    message: ''
  });
  const [rsvpList, setRsvpList] = useState([]);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('wedding_demo_rsvp');
    if (saved) {
      setRsvpList(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) return;

    const newEntry = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString('id-ID')
    };

    const updatedList = [newEntry, ...rsvpList].slice(0, 5); // Keep only 5 latest
    setRsvpList(updatedList);
    localStorage.setItem('wedding_demo_rsvp', JSON.stringify(updatedList));

    setSubmitMessage('Terima kasih, konfirmasi Anda sudah tercatat.');
    setFormData({ name: '', guests: '1', attendance: 'Hadir', message: '' });

    setTimeout(() => {
      setSubmitMessage('');
    }, 3000);
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-white text-center">
      <div className="max-w-2xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-heading text-wedding-dark mb-4">Konfirmasi Kehadiran</h2>
        <p className="text-wedding-dark/70 font-body mb-10">Mohon isi form di bawah ini untuk konfirmasi kehadiran Anda.</p>

        <form onSubmit={handleSubmit} className="bg-wedding-cream/30 p-6 md:p-10 rounded-2xl shadow-lg border border-wedding-gold/20 text-left mb-12">
          <div className="mb-6">
            <label className="block text-wedding-dark font-medium mb-2">Nama Lengkap</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-wedding-gold/30 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 bg-white"
              placeholder="Masukkan nama Anda"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-wedding-dark font-medium mb-2">Jumlah Tamu</label>
              <select 
                name="guests" 
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-wedding-gold/30 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 bg-white"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
              </select>
            </div>
            
            <div>
              <label className="block text-wedding-dark font-medium mb-2">Kehadiran</label>
              <select 
                name="attendance" 
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-wedding-gold/30 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 bg-white"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
                <option value="Masih Ragu">Masih Ragu</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-wedding-dark font-medium mb-2">Pesan Singkat</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 rounded-lg border border-wedding-gold/30 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 bg-white resize-none"
              placeholder="Tulis pesan untuk mempelai..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-wedding-dark text-wedding-cream py-3 rounded-full font-medium tracking-wide hover:bg-wedding-brown transition-colors"
          >
            Kirim Konfirmasi
          </button>

          {submitMessage && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium animate-fade-in">
              {submitMessage}
            </div>
          )}
        </form>

        {/* Display RSVP List (Max 5) */}
        {rsvpList.length > 0 && (
          <div className="text-left">
            <h3 className="text-xl font-heading text-wedding-dark mb-4">Konfirmasi Terbaru</h3>
            <div className="space-y-4">
              {rsvpList.map((rsvp) => (
                <div key={rsvp.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-wedding-dark">{rsvp.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      rsvp.attendance === 'Hadir' ? 'bg-green-100 text-green-700' : 
                      rsvp.attendance === 'Tidak Hadir' ? 'bg-red-100 text-red-700' : 
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {rsvp.attendance} ({rsvp.guests})
                    </span>
                  </div>
                  {rsvp.message && <p className="text-sm text-gray-600">"{rsvp.message}"</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;
