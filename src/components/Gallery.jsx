import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';
import { useData } from '../context/DataContext';

const Gallery = () => {
  const invitationData = useData();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeri" className="py-20 px-4 bg-wedding-cream text-center">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-heading text-wedding-dark mb-12">Galeri Kami</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {invitationData.gallery.map((image) => (
            <div 
              key={image.id} 
              className="aspect-square bg-gradient-to-br from-wedding-gold/20 to-wedding-brown/20 rounded-xl overflow-hidden cursor-pointer group relative flex items-center justify-center hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              {image.src ? (
                <img src={image.src} alt={`Gallery ${image.id}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <Heart className="w-12 h-12 text-wedding-gold opacity-50 group-hover:scale-110 transition-transform duration-500" />
              )}
              
              <div className="absolute inset-0 bg-wedding-dark/0 group-hover:bg-wedding-dark/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-wedding-gold transition-colors" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          
          <div className="relative max-w-4xl max-h-[90vh] w-full aspect-square md:aspect-auto md:h-[80vh] bg-gradient-to-br from-wedding-cream to-wedding-gold-soft/50 rounded-2xl overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
             {selectedImage.src ? (
                <img src={selectedImage.src} alt={`Gallery Preview`} className="w-full h-full object-contain" />
              ) : (
                <div className="flex flex-col items-center gap-4 text-wedding-brown">
                  <Heart className="w-24 h-24 text-wedding-gold" />
                  <p className="font-heading text-2xl">Preview Foto {selectedImage.id}</p>
                </div>
              )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
