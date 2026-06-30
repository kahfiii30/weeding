import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../components/Hero';
import Couple from '../components/Couple';
import EventDetails from '../components/EventDetails';
import Countdown from '../components/Countdown';
import LoveStory from '../components/LoveStory';
import Gallery from '../components/Gallery';
import RSVP from '../components/RSVP';
import Wishes from '../components/Wishes';
import Gift from '../components/Gift';
import Share from '../components/Share';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import MusicButton from '../components/MusicButton';

const InvitationPage = () => {
  const { slug } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    if (isOpen) {
      document.body.style.overflow = 'auto';
      setTimeout(() => {
        const coupleSection = document.getElementById('couple');
        if (coupleSection) {
          coupleSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="font-body text-wedding-dark bg-wedding-cream min-h-screen">
      <audio id="bg-music" src={`/${slug}/music.mp3`} loop preload="auto"></audio>
      <Hero onOpen={() => {
        const audio = document.getElementById('bg-music');
        if (audio) {
          audio.play().catch(e => console.log("Autoplay blocked:", e));
        }
        setIsOpen(true);
        setIsMusicPlaying(true);
      }} />

      <div className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <Couple />
        <EventDetails />
        <Countdown />
        <LoveStory />
        <Gallery />
        <RSVP />
        <Wishes />
        <Gift />
        <Share />
        <Footer />
        <BottomNav />
      </div>

      {isOpen && <MusicButton isPlaying={isMusicPlaying} toggle={() => {
        const audio = document.getElementById('bg-music');
        if (audio) {
          if (isMusicPlaying) audio.pause();
          else audio.play().catch(e => console.log(e));
        }
        setIsMusicPlaying(!isMusicPlaying);
      }} />}
    </div>
  );
}

export default InvitationPage;
