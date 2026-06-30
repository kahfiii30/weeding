import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Heart, Clock, Send, ShieldCheck, Star } from 'lucide-react';

const LandingPage = () => {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WA admin sesungguhnya
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20Admin%20NikahLink,%20saya%20tertarik%20untuk%20memesan%20undangan%20digital.`;

  return (
    <div className="font-body text-wedding-dark bg-wedding-cream min-h-screen selection:bg-wedding-gold selection:text-white">
      
      {/* Navbar Simple */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-3xl font-heading text-wedding-gold">NikahLink</h1>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="hidden md:inline-block px-6 py-2 border-2 border-wedding-gold text-wedding-gold rounded-full font-medium hover:bg-wedding-gold hover:text-white transition-colors">
          Hubungi Kami
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 bg-wedding-gold/10 text-wedding-gold rounded-full text-sm font-medium tracking-wide uppercase mb-6 animate-fade-in-up">
          Platform Undangan Digital Premium
        </div>
        <h2 className="text-4xl md:text-6xl font-heading mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Sebarkan Kabar Bahagia Anda dengan <span className="text-wedding-gold">Elegan & Modern</span>
        </h2>
        <p className="text-gray-600 mb-10 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Buat undangan pernikahan digital impian Anda dalam hitungan jam. Praktis, mewah, dan langsung siap disebarkan ke ribuan tamu tanpa batas.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full md:w-auto px-8 py-4 bg-wedding-gold text-white rounded-full font-medium text-lg hover:bg-wedding-gold-soft hover:text-wedding-dark transition-colors shadow-lg shadow-wedding-gold/30 flex items-center justify-center gap-2">
            <Send size={20} /> Pesan Sekarang
          </a>
          <Link to="/adrian-natasha" className="w-full md:w-auto px-8 py-4 bg-white text-wedding-dark border border-gray-200 rounded-full font-medium text-lg hover:border-wedding-gold hover:text-wedding-gold transition-colors flex items-center justify-center gap-2">
            <Smartphone size={20} /> Lihat Demo Undangan
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-heading mb-4">Mengapa Memilih NikahLink?</h3>
            <p className="text-gray-500">Fitur eksklusif untuk momen sekali seumur hidup Anda</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Heart size={32} />}
              title="Desain Mewah & Premium"
              desc="Tampilan elegan yang memukau tamu Anda sejak detik pertama undangan dibuka."
            />
            <FeatureCard 
              icon={<Clock size={32} />}
              title="Pengerjaan Kilat"
              desc="Data masuk, undangan langsung jadi dan siap disebar di hari yang sama."
            />
            <FeatureCard 
              icon={<ShieldCheck size={32} />}
              title="Admin Dashboard Cerdas"
              desc="Kelola ribuan nama tamu dan generate link unik secara otomatis tanpa repot mengetik manual."
            />
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 px-6 bg-wedding-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wedding-gold to-transparent"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <Star className="text-wedding-gold mx-auto mb-6" size={48} />
          <h3 className="text-3xl md:text-4xl font-heading mb-6">Siap Membuat Undangan Anda?</h3>
          <p className="text-gray-400 mb-10 text-lg">Konsultasikan kebutuhan undangan pernikahan Anda bersama tim admin kami sekarang juga. Dapatkan penawaran harga terbaik hari ini.</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-block px-10 py-4 bg-wedding-gold text-white rounded-full font-medium text-lg hover:bg-white hover:text-wedding-dark transition-colors">
            Hubungi WhatsApp Admin
          </a>
        </div>
      </section>
      
      <footer className="bg-wedding-dark text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} NikahLink. All rights reserved.</p>
      </footer>
    </div>
  );
}

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-2xl bg-wedding-cream/30 border border-wedding-gold/10 hover:border-wedding-gold/50 transition-colors text-center group">
    <div className="inline-block p-4 rounded-full bg-white text-wedding-gold shadow-sm mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3 text-wedding-dark">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;
