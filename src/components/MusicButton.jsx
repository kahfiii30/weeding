import React from 'react';
import { Music, Pause } from 'lucide-react';

const MusicButton = ({ isPlaying, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`fixed right-4 bottom-24 md:bottom-8 w-12 h-12 bg-wedding-gold text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.5)] z-50 transition-transform ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}
    >
      {isPlaying ? <Pause size={20} /> : <Music size={20} />}
    </button>
  );
};

export default MusicButton;
