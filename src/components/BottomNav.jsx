import React from 'react';
import { Home, Calendar, Image, Mail, Gift } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Calendar, label: 'Acara', href: '#acara' },
    { icon: Image, label: 'Galeri', href: '#galeri' },
    { icon: Mail, label: 'RSVP', href: '#rsvp' },
    { icon: Gift, label: 'Gift', href: '#gift' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-wedding-gold/20 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-40 md:hidden pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a 
              key={index} 
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full text-wedding-brown/70 hover:text-wedding-gold transition-colors"
            >
              <Icon size={20} className="mb-1" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
