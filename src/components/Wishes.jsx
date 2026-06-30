import React, { useState, useEffect } from 'react';

const Wishes = () => {
  const [wishesList, setWishesList] = useState([]);
  const [formData, setFormData] = useState({ name: '', wish: '' });

  useEffect(() => {
    const saved = localStorage.getItem('wedding_demo_wishes');
    if (saved) {
      setWishesList(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.wish.trim()) return;

    const newWish = {
      id: Date.now(),
      name: formData.name,
      wish: formData.wish,
      date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    const updatedList = [newWish, ...wishesList].slice(0, 10);
    setWishesList(updatedList);
    localStorage.setItem('wedding_demo_wishes', JSON.stringify(updatedList));
    
    setFormData({ name: '', wish: '' });
  };

  const clearData = () => {
    if (window.confirm('Yakin ingin menghapus semua data demo ucapan?')) {
      setWishesList([]);
      localStorage.removeItem('wedding_demo_wishes');
      localStorage.removeItem('wedding_demo_rsvp'); // Also clear RSVP for convenience
      alert('Data demo berhasil dihapus.');
      window.location.reload();
    }
  };

  return (
    <section className="py-20 px-4 bg-wedding-cream text-center">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-heading text-wedding-dark mb-10">Ucapan & Doa</h2>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-wedding-gold/20 text-left mb-10">
          <input 
            type="text" 
            placeholder="Nama Anda" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 mb-4 rounded-lg border border-wedding-gold/30 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 bg-wedding-cream/20"
            required
          />
          <textarea 
            placeholder="Tulis ucapan dan doa..." 
            value={formData.wish}
            onChange={(e) => setFormData({...formData, wish: e.target.value})}
            rows="3"
            className="w-full px-4 py-3 mb-4 rounded-lg border border-wedding-gold/30 focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 bg-wedding-cream/20 resize-none"
            required
          ></textarea>
          <button 
            type="submit"
            className="w-full bg-wedding-gold text-white py-3 rounded-xl font-medium tracking-wide hover:bg-wedding-gold-soft hover:text-wedding-dark transition-colors"
          >
            Kirim Ucapan
          </button>
        </form>

        <div className="space-y-4 max-h-96 overflow-y-auto no-scrollbar pb-4 text-left">
          {wishesList.map((wish) => (
            <div key={wish.id} className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-wedding-gold">
              <h4 className="font-semibold text-wedding-dark">{wish.name}</h4>
              <span className="text-xs text-gray-400 mb-2 block">{wish.date}</span>
              <p className="text-sm text-wedding-dark/80 font-body">"{wish.wish}"</p>
            </div>
          ))}
          
          {wishesList.length === 0 && (
            <div className="text-center text-gray-500 text-sm py-4">Belum ada ucapan. Jadilah yang pertama!</div>
          )}
        </div>

        <button 
          onClick={clearData}
          className="mt-12 text-xs text-red-400 hover:text-red-600 underline"
        >
          Hapus Semua Data Demo
        </button>
      </div>
    </section>
  );
};

export default Wishes;
