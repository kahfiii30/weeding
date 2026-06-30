import React, { useState } from 'react';
import { Gift as GiftIcon, Copy, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';

const Gift = () => {
  const invitationData = useData();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationData.gift.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="gift" className="py-20 px-4 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-wedding-dark mb-6">Wedding Gift</h2>
        <p className="text-wedding-dark/80 font-body mb-12 leading-relaxed">
          Doa restu Bapak/Ibu/Saudara/i merupakan hadiah terbaik bagi kami. Namun apabila ingin memberikan tanda kasih, dapat melalui rekening berikut:
        </p>

        <div className="bg-wedding-cream/40 p-8 rounded-3xl border border-wedding-gold-soft/50 shadow-sm max-w-sm mx-auto relative overflow-hidden">
          {/* Card Decoration */}
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-wedding-gold/10 rounded-full"></div>
          
          <div className="relative z-10 text-left">
            <h3 className="text-xl font-bold text-wedding-dark mb-2 tracking-wide">{invitationData.gift.bank}</h3>
            <p className="text-2xl font-heading text-wedding-brown mb-1 tracking-widest">{invitationData.gift.accountNumber}</p>
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">A.N. {invitationData.gift.accountName}</p>
            
            <button 
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 bg-wedding-dark text-wedding-cream py-3 rounded-xl font-medium tracking-wide hover:bg-wedding-brown transition-colors"
            >
              {copied ? <CheckCircle size={18} className="text-green-400" /> : <Copy size={18} />}
              {copied ? 'Tersalin' : 'Salin Nomor Rekening'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl z-50 animate-slide-up">
          Nomor rekening berhasil disalin
        </div>
      )}
    </section>
  );
};

export default Gift;
