import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { useData } from '../context/DataContext';

const EventDetails = () => {
  const invitationData = useData();
  return (
    <section id="acara" className="py-20 px-4 bg-wedding-cream text-center relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-wedding-gold-soft opacity-20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-wedding-gold-soft opacity-20 rounded-tr-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-heading text-wedding-dark mb-12">Detail Acara</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {invitationData.events.map((event, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-wedding-gold" data-aos="fade-up" data-aos-delay={index * 200}>
              <h3 className="text-2xl font-heading text-wedding-gold mb-6">{event.title}</h3>
              
              <div className="flex flex-col gap-4 text-wedding-dark/80 font-body mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Calendar size={20} className="text-wedding-brown" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Clock size={20} className="text-wedding-brown" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin size={20} className="text-wedding-brown" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-wedding-dark text-wedding-cream px-6 py-2 rounded-full font-medium tracking-wide hover:bg-wedding-brown transition-colors w-full"
                >
                  <MapPin size={18} />
                  Lihat Lokasi
                </a>
                
                <a 
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Adrian+%26+Natasha+-+${encodeURIComponent(event.title)}&dates=20260914T000000Z/20260914T070000Z&details=Jangan+lupa+hadir+ya!&location=${encodeURIComponent(event.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-wedding-gold text-wedding-gold px-6 py-2 rounded-full font-medium tracking-wide hover:bg-wedding-gold hover:text-white transition-colors w-full"
                >
                  <Calendar size={18} />
                  Simpan ke Kalender
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
