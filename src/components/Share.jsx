import React from 'react';
import { Share2 } from 'lucide-react';
import { useData } from '../context/DataContext';

const Share = () => {
  const invitationData = useData();
  
  const handleShare = () => {
    const currentUrl = window.location.href;
    const text = encodeURIComponent(`${invitationData.shareMessage}${currentUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-wedding-cream text-center border-b border-wedding-gold/20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-wedding-dark mb-4">Bagikan Undangan</h2>
        <p className="text-wedding-dark/80 font-body mb-8">
          Bantu kami membagikan kabar bahagia ini kepada keluarga dan kerabat.
        </p>
        
        <button 
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
        >
          <Share2 size={20} />
          Share ke WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Share;
