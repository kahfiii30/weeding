import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-wedding-cream flex flex-col items-center justify-center font-body text-wedding-dark p-4 text-center">
      <h1 className="text-4xl font-heading mb-4 text-wedding-gold">NikahLink</h1>
      <p className="mb-8 font-medium tracking-wider uppercase text-sm">Platform Undangan Digital Premium</p>
      <p className="text-sm text-gray-500 max-w-md">
        Selamat datang di pusat layanan undangan digital NikahLink. Setiap pasangan memiliki tautan eksklusifnya sendiri.
        <br/><br/>
        Coba lihat undangan demo kami:<br/>
        <Link to="/adrian-natasha" className="text-wedding-gold font-bold hover:underline mt-2 inline-block text-lg">
          Undangan Adrian & Natasha &rarr;
        </Link>
      </p>
    </div>
  );
}

export default LandingPage;
