import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  src: string;
  alt: string;
  fixed: boolean;
}

const getInitialItems = (): PortfolioItem[] => {
  const saved = localStorage.getItem('portfolioItems');
  if (saved) return JSON.parse(saved);
  return [
    { src: '/feed1.png', alt: 'Avaliação minuciosa de um relógio de pulso, mostrando o cuidado artesanal em cada detalhe.', fixed: true },
    { src: '/feed2.png', alt: 'Relógios organizados para manutenção, destacando a variedade de modelos atendidos.', fixed: true },
    { src: '/feed3.png', alt: 'Inspeção de um relógio esportivo, evidenciando precisão e tecnologia.', fixed: true },
    { src: '/feed4.png', alt: 'Dois relógios lado a lado, prontos para serem restaurados com excelência.', fixed: true },
    { src: '/feed5.png', alt: 'Ferramentas especializadas e relógio em foco, representando a técnica e o profissionalismo do serviço.', fixed: true },
    { src: '/feed6.png', alt: 'Relógios clássicos e modernos aguardando manutenção, simbolizando tradição e inovação.', fixed: true },
  ];
};

// Substitua pelo seu cloud_name do Cloudinary após criar a conta
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/brunoluz/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'brunoluz';

const PortfolioAdmin = () => {
  const [items, setItems] = useState<PortfolioItem[]>(getInitialItems());
  const [newImage, setNewImage] = useState('');
  const [newAlt, setNewAlt] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editAlt, setEditAlt] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  useEffect(() => {
    localStorage.setItem('portfolioItems', JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (newImage && newAlt) {
      setItems([...items, { src: newImage, alt: newAlt, fixed: false }]);
      setNewImage('');
      setNewAlt('');
    }
  };

  const handleRemove = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditAlt(items[index].alt);
  };

  const handleUpdate = (index: number) => {
    const updated = [...items];
    updated[index].alt = editAlt;
    setItems(updated);
    setEditIndex(null);
    setEditAlt('');
  };

  const handleToggleFixed = (index: number) => {
    const fixedCount = items.filter(item => item.fixed).length;
    const updated = [...items];
    if (!updated[index].fixed && fixedCount >= 6) return; // Limita a 6 fixas
    updated[index].fixed = !updated[index].fixed;
    setItems(updated);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadError('');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    try {
      const res = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        setNewImage(data.secure_url);
      } else {
        setUploadError('Falha ao enviar imagem.');
      }
    } catch (err) {
      setUploadError('Erro ao enviar imagem.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-beige-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-500 mb-4 drop-shadow-lg">
            Administração do Portifólio
          </h2>
          <p className="text-lg md:text-xl text-charcoal-500 max-w-2xl mx-auto leading-relaxed mb-4">
            Gerencie as imagens do seu portfólio, edite legendas, remova, adicione e escolha as 6 imagens em destaque para a galeria inicial.
          </p>
          <a href="/portifolio" className="inline-block mt-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all duration-300 text-base">
            Ver Portifólio Público
          </a>
        </div>
        {items.length === 0 ? (
          <div className="text-center text-gray-400 text-xl py-24 animate-fade-in">
            Nenhuma imagem cadastrada no portfólio ainda.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl shadow-xl bg-beige-100 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Legenda sobreposta */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-4 py-3">
                  {editIndex === idx ? (
                    <div className="flex flex-col gap-2">
                      <input value={editAlt} onChange={e => setEditAlt(e.target.value)} className="border p-2 rounded" />
                      <button onClick={() => handleUpdate(idx)} className="bg-green-600 text-white rounded px-4 py-1">Salvar</button>
                    </div>
                  ) : (
                    <p className="text-white text-base font-medium drop-shadow-md line-clamp-2">{item.alt}</p>
                  )}
                </div>
                {/* Controles admin */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button onClick={() => handleEdit(idx)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-md" title="Editar legenda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.828l-4 1a1 1 0 01-1.263-1.263l1-4a4 4 0 01.828-1.414z" /></svg>
                  </button>
                  <button onClick={() => handleRemove(idx)} className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-md" title="Remover imagem">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <label className="flex items-center gap-1 bg-white/80 rounded-full px-2 py-1 text-xs font-semibold shadow border border-gold-500">
                    <input type="checkbox" checked={item.fixed} onChange={() => handleToggleFixed(idx)} disabled={!item.fixed && items.filter(i => i.fixed).length >= 6} />
                    Fixa
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="bg-beige-50 p-6 rounded-2xl shadow-xl flex flex-col gap-4 max-w-md mx-auto mt-12 animate-fade-in">
          <h3 className="font-semibold text-lg mb-2">Adicionar nova imagem</h3>
          <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded" />
          {uploading && <p className="text-gold-500">Enviando imagem...</p>}
          {uploadError && <p className="text-red-500">{uploadError}</p>}
          {newImage && (
            <div className="flex flex-col items-center mb-2">
              <img src={newImage} alt="Prévia" className="w-full max-w-xs h-64 object-contain rounded-2xl border-4 border-gold-500 shadow-lg mb-4 bg-white" />
              <div className="w-full flex flex-col items-center">
                <label className="font-playfair text-base text-gold-600 mb-1 flex items-center gap-2">
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gold-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h4a2 2 0 002-2v-6' /></svg>
                  Legenda da Imagem
                </label>
                <input type="text" placeholder="Ex: Relógio restaurado com carinho" value={newAlt} onChange={e => setNewAlt(e.target.value)} className="border p-2 rounded w-full text-center font-semibold text-charcoal-500 shadow-sm focus:ring-2 focus:ring-gold-500" />
                <span className="text-xs text-gray-400 mt-1 italic">Dê um toque especial à descrição!</span>
              </div>
            </div>
          )}
          {!newImage && (
            <input type="text" placeholder="Legenda" value={newAlt} onChange={e => setNewAlt(e.target.value)} className="border p-2 rounded" />
          )}
          <button onClick={handleAdd} className="bg-gold-500 hover:bg-gold-600 text-white rounded px-4 py-2 font-semibold" disabled={!newImage || !newAlt || uploading}>Adicionar</button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioAdmin; 