import React, { createContext, useState, useEffect, useContext } from 'react';
import * as XLSX from 'xlsx';
import { invitationData as fallbackData } from '../data/invitationData';

export const DataContext = createContext(fallbackData);

export const DataProvider = ({ slug, children }) => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExcelData = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(`/${slug}/data.xlsx`);
        if (!response.ok) throw new Error("Excel file not found");
        
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        
        const excelData = JSON.parse(JSON.stringify(fallbackData)); // Deep clone fallback

        const prefixUrl = (url) => url.startsWith('/') ? `/${slug}${url}` : url;

        // Parse Mempelai
        if (workbook.Sheets['Mempelai']) {
          const mempelai = XLSX.utils.sheet_to_json(workbook.Sheets['Mempelai']);
          mempelai.forEach(row => {
            if (row.Peran === 'Pria') {
              excelData.couple.groom = {
                name: row.Nama || '',
                nickname: row.Panggilan || '',
                parents: row.OrangTua || '',
                photo: row.Foto ? prefixUrl(row.Foto) : ''
              };
            } else if (row.Peran === 'Wanita') {
              excelData.couple.bride = {
                name: row.Nama || '',
                nickname: row.Panggilan || '',
                parents: row.OrangTua || '',
                photo: row.Foto ? prefixUrl(row.Foto) : ''
              };
            }
          });
        }

        // Parse Acara
        if (workbook.Sheets['Acara']) {
          const acara = XLSX.utils.sheet_to_json(workbook.Sheets['Acara']);
          excelData.events = acara.map(row => ({
            title: row.Acara || '',
            date: row.Tanggal || '',
            time: row.Waktu || '',
            location: row.Lokasi || '',
            mapLink: row.MapLink || ''
          }));
        }

        // Parse CeritaCinta
        if (workbook.Sheets['CeritaCinta']) {
          const cerita = XLSX.utils.sheet_to_json(workbook.Sheets['CeritaCinta']);
          excelData.loveStory = cerita.map(row => ({
            year: row.Tahun || '',
            title: row.Judul || '',
            story: row.Cerita || ''
          }));
        }

        // Parse Galeri
        if (workbook.Sheets['Galeri']) {
          const galeri = XLSX.utils.sheet_to_json(workbook.Sheets['Galeri']);
          excelData.gallery = galeri.map((row, index) => ({
            id: index + 1,
            src: row.Foto ? prefixUrl(row.Foto) : ''
          }));
        }

        // Parse Pengaturan
        if (workbook.Sheets['Pengaturan']) {
          const pengaturan = XLSX.utils.sheet_to_json(workbook.Sheets['Pengaturan']);
          pengaturan.forEach(row => {
            if (row.Kunci === 'TanggalUtama') excelData.date.full = row.Nilai || '';
            if (row.Kunci === 'TanggalCountdown') excelData.date.countdownTarget = row.Nilai || '';
            if (row.Kunci === 'Bank') excelData.gift.bank = row.Nilai || '';
            if (row.Kunci === 'NoRekening') excelData.gift.accountNumber = row.Nilai || '';
            if (row.Kunci === 'AtasNama') excelData.gift.accountName = row.Nilai || '';
            if (row.Kunci === 'PesanShare') excelData.shareMessage = row.Nilai || '';
          });
        }

        setData(excelData);
      } catch (err) {
        console.warn('Failed to load Excel data, using fallback data', err);
      } finally {
        setLoading(false);
      }
    };

    loadExcelData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-wedding-cream flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-wedding-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
