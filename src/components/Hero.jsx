import React, { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData';

const Hero = ({ onOpen }) => {
  const [guestName, setGuestName] = useState('Tamu Undangan');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-wedding-cream via-white to-wedding-gold-soft/30">
      {/* Decorative Ornaments */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-wedding-gold-soft rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-wedding-brown rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="z-10 animate-fade-in flex flex-col items-center">
        <h4 className="text-sm md:text-base tracking-widest uppercase mb-4 text-wedding-brown/80 font-body">The Wedding Of</h4>
        <h1 className="flex flex-col items-center text-5xl md:text-7xl font-heading text-wedding-dark mb-4 drop-shadow-sm">
          <span>{invitationData.couple.groom.nickname}</span>
          <span className="text-4xl md:text-6xl text-wedding-gold-soft my-2">&</span>
          <span>{invitationData.couple.bride.nickname}</span>
        </h1>
        <p className="text-lg md:text-xl font-body text-wedding-dark/80 mb-12 italic">
          {invitationData.date.full}
        </p>

        <div className="mb-8 flex flex-col items-center">
          <p className="text-sm text-wedding-brown mb-1">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="font-semibold text-lg border-b border-wedding-gold pb-1 px-4 text-wedding-dark">{guestName}</p>
        </div>

        <button
          onClick={onOpen}
          className="bg-wedding-dark text-wedding-cream px-8 py-3 rounded-full font-medium tracking-wide hover:bg-wedding-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Buka Undangan
        </button>
      </div>
    </section>
  );
};

export default Hero;
