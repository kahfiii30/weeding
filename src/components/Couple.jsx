import React from 'react';
import { useData } from '../context/DataContext';

const Couple = () => {
  const invitationData = useData();
  return (
    <section id="couple" className="py-20 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h2 className="text-2xl md:text-3xl font-heading text-wedding-gold mb-6">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </h2>
        <p className="text-wedding-dark/80 font-body max-w-2xl mx-auto mb-16 leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {/* Groom */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-56 md:w-56 md:h-72 rounded-t-full bg-wedding-cream mb-6 overflow-hidden border-4 border-wedding-gold-soft flex items-center justify-center">
              {invitationData.couple.groom.photo ? (
                <img src={invitationData.couple.groom.photo} alt={invitationData.couple.groom.name} className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-wedding-brown/20 to-wedding-gold/20"></div>
              )}
            </div>
            <h3 className="text-3xl font-heading text-wedding-dark mb-2">{invitationData.couple.groom.name}</h3>
            <p className="text-sm text-wedding-brown/80 font-body">{invitationData.couple.groom.parents}</p>
          </div>

          {/* Divider */}
          <div className="text-6xl font-heading text-wedding-gold-soft opacity-50">&</div>

          {/* Bride */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-56 md:w-56 md:h-72 rounded-t-full bg-wedding-cream mb-6 overflow-hidden border-4 border-wedding-gold-soft flex items-center justify-center">
              {invitationData.couple.bride.photo ? (
                <img src={invitationData.couple.bride.photo} alt={invitationData.couple.bride.name} className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-wedding-gold/20 to-wedding-brown/20"></div>
              )}
            </div>
            <h3 className="text-3xl font-heading text-wedding-dark mb-2">{invitationData.couple.bride.name}</h3>
            <p className="text-sm text-wedding-brown/80 font-body">{invitationData.couple.bride.parents}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
