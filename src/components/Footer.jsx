import React from 'react';
import { invitationData } from '../data/invitationData';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-wedding-dark text-wedding-cream text-center pb-32 md:pb-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-wedding-gold mb-6">
          {invitationData.couple.groom.nickname} & {invitationData.couple.bride.nickname}
        </h2>
        <p className="font-body text-white/80 mb-12 italic">Terima kasih atas doa dan restunya</p>
        
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-sm text-white/60 mb-2 font-medium tracking-wide uppercase">Digital Invitation by NikahLink</p>
          <p className="text-xs text-white/40">Cocok dipaketkan dengan undangan fisik + QR Code</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
