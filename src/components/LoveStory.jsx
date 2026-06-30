import React from 'react';
import { invitationData } from '../data/invitationData';

const LoveStory = () => {
  return (
    <section className="py-20 px-4 bg-white text-center" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading text-wedding-dark mb-16">Our Love Story</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-wedding-gold/30"></div>

          <div className="flex flex-col gap-12 relative z-10">
            {invitationData.loveStory.map((story, index) => (
              <div key={index} className={`flex items-center justify-between w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12 hidden md:block"></div>
                
                {/* Center Dot */}
                <div className="w-10 h-10 rounded-full bg-wedding-cream border-4 border-wedding-gold flex items-center justify-center shrink-0 shadow-lg z-10 mx-auto md:mx-0">
                  <div className="w-3 h-3 bg-wedding-brown rounded-full"></div>
                </div>

                <div className={`w-full md:w-5/12 p-6 bg-wedding-cream/50 rounded-2xl shadow-sm border border-wedding-gold/10 text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mt-4 md:mt-0`}>
                  <div className="inline-block px-3 py-1 bg-wedding-gold-soft/20 text-wedding-brown rounded-full text-sm font-semibold mb-3">
                    {story.year}
                  </div>
                  <h3 className="text-xl font-heading text-wedding-dark mb-2">{story.title}</h3>
                  <p className="text-wedding-dark/70 font-body text-sm leading-relaxed">
                    {story.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
