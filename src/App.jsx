import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, X, Trash2, Star, CheckCircle, ShieldCheck, CreditCard, Truck } from 'lucide-react';

const productos = [
  { id: 1, nombre: 'Amsterdam', precio: 1215, categoria: 'Sofás', imagen: '/muebles/amsterdam.png', desc: 'Confort Premium' },
  { id: 2, nombre: 'Antalya', precio: 1200, categoria: 'Sofás', imagen: '/muebles/antalya.jpeg', desc: 'Diseño Exclusivo' },
  { id: 3, nombre: 'Atenas', precio: 960, categoria: 'Sofás', imagen: '/muebles/atenas.png', desc: 'Equilibrio y Confort' },
  { id: 4, nombre: 'Aurora', precio: 450, categoria: 'Camas', imagen: '/muebles/aurora.png', desc: 'Base Lisa Individual' },
  { id: 5, nombre: 'Austria', precio: 1200, categoria: 'Sofás', imagen: '/muebles/austria.png', desc: 'Diseño Exclusivo' },
  { id: 6, nombre: 'Bali', precio: 450, categoria: 'Camas', imagen: '/muebles/bali.png', desc: 'Base Lisa Individual' },
  { id: 7, nombre: 'Bangkok', precio: 1200, categoria: 'Sofás', imagen: '/muebles/bangkok.png', desc: 'Diseño Exclusivo' },
  { id: 8, nombre: 'Barcelona', precio: 1200, categoria: 'Sofás', imagen: '/muebles/barcelona.png', desc: 'Diseño Exclusivo' },
  { id: 9, nombre: 'Beirut', precio: 1200, categoria: 'Sofás', imagen: '/muebles/beirut.png', desc: 'Diseño Exclusivo' },
  { id: 10, nombre: 'Berlin', precio: 1200, categoria: 'Sofás', imagen: '/muebles/berlin.png', desc: 'Diseño Exclusivo' },
  { id: 11, nombre: 'Berna', precio: 1200, categoria: 'Sofás', imagen: '/muebles/berna.png', desc: 'Diseño Exclusivo' },
  { id: 12, nombre: 'Bruselas', precio: 1200, categoria: 'Sofás', imagen: '/muebles/bruselas.png', desc: 'Diseño Exclusivo' },
  { id: 13, nombre: 'Charlotte', precio: 450, categoria: 'Camas', imagen: '/muebles/charlotte.png', desc: 'Base Lisa Individual' },
  { id: 14, nombre: 'Chicago Era', precio: 1200, categoria: 'Sofás', imagen: '/muebles/chicago-era.png', desc: 'Diseño Exclusivo' },
  { id: 15, nombre: 'Puff COD-2000', precio: 480, categoria: 'Puffs', imagen: '/muebles/cod-2000.png', desc: 'Capitoneado Cuadrado' },
  { id: 16, nombre: 'Puff COD-2001', precio: 370, categoria: 'Puffs', imagen: '/muebles/cod-2001.png', desc: 'Circular' },
  { id: 17, nombre: 'Puff COD-2002', precio: 280, categoria: 'Puffs', imagen: '/muebles/cod-2002.png', desc: 'Versátil' },
  { id: 18, nombre: 'Puff COD-2003', precio: 280, categoria: 'Puffs', imagen: '/muebles/cod-2003.png', desc: 'Minimalista' },
  { id: 19, nombre: 'Puff COD-2004', precio: 480, categoria: 'Puffs', imagen: '/muebles/cod-2004.png', desc: 'Gran Formato' },
  { id: 20, nombre: 'Puff COD-2005', precio: 480, categoria: 'Puffs', imagen: '/muebles/cod-2005.jpeg', desc: 'Premium' },
  { id: 21, nombre: 'Doha', precio: 1885, categoria: 'Sofás', imagen: '/muebles/doha.png', desc: 'Medida 2.70M' },
  { id: 22, nombre: 'Dubai', precio: 1450, categoria: 'Sofás', imagen: '/muebles/dubai.png', desc: 'Medida 2.70M' },
  { id: 23, nombre: 'Edimburgo', precio: 1020, categoria: 'Sofás', imagen: '/muebles/edimburgo.png', desc: 'Clásico Renovado' },
  { id: 24, nombre: 'Eslovaquia', precio: 985, categoria: 'Sofás', imagen: '/muebles/eslovaquia.png', desc: 'Diseño Único' },
  { id: 25, nombre: 'Estambul', precio: 1170, categoria: 'Sofás', imagen: '/muebles/estambul.png', desc: 'Elegancia Clásica' },
  { id: 26, nombre: 'Estella', precio: 450, categoria: 'Camas', imagen: '/muebles/estella.png', desc: 'Base Lisa Individual' },
  { id: 27, nombre: 'Florida', precio: 1200, categoria: 'Sofás', imagen: '/muebles/florida.png', desc: 'Diseño Exclusivo' },
  { id: 28, nombre: 'Cama Georgia', precio: 480, categoria: 'Camas', imagen: '/muebles/georgia.png', desc: 'Base Lisa Individual' },
  { id: 29, nombre: 'Grace', precio: 450, categoria: 'Camas', imagen: '/muebles/grace.png', desc: 'Base Lisa Individual' },
  { id: 30, nombre: 'Hamburgo', precio: 1200, categoria: 'Sofás', imagen: '/muebles/hamburgo.png', desc: 'Diseño Exclusivo' },
  { id: 31, nombre: 'Honolulu', precio: 1200, categoria: 'Sofás', imagen: '/muebles/honolulu.png', desc: 'Diseño Exclusivo' },
  { id: 32, nombre: 'Cama Houston', precio: 480, categoria: 'Camas', imagen: '/muebles/houston.png', desc: 'Base Lisa Individual' },
  { id: 33, nombre: 'Israel', precio: 1200, categoria: 'Sofás', imagen: '/muebles/israel.png', desc: 'Diseño Arquitectónico' },
  { id: 34, nombre: 'Cama Italia', precio: 480, categoria: 'Camas', imagen: '/muebles/italia.png', desc: 'Base Lisa Individual' },
  { id: 35, nombre: 'Jana', precio: 450, categoria: 'Camas', imagen: '/muebles/jana.png', desc: 'Base Lisa Individual' },
  { id: 36, nombre: 'London', precio: 985, categoria: 'Sofás', imagen: '/muebles/london.png', desc: 'Diseño Urbano' },
  { id: 37, nombre: 'Londres', precio: 985, categoria: 'Sofás', imagen: '/muebles/londres.png', desc: 'Diseño Urbano' },
  { id: 38, nombre: 'Cama Manila', precio: 405, categoria: 'Camas', imagen: '/muebles/manila.png', desc: 'Base Lisa Individual' },
  { id: 39, nombre: 'Maxima', precio: 450, categoria: 'Camas', imagen: '/muebles/maxima.png', desc: 'Base Lisa Individual' },
  { id: 40, nombre: 'Cama Milan', precio: 445, categoria: 'Camas', imagen: '/muebles/milan.png', desc: 'Base Lisa Individual' },
  { id: 41, nombre: 'Missisipi', precio: 1200, categoria: 'Sofás', imagen: '/muebles/missisipi.png', desc: 'Diseño Exclusivo' },
  { id: 42, nombre: 'Monaco', precio: 1200, categoria: 'Sofás', imagen: '/muebles/monaco.png', desc: 'Diseño Exclusivo' },
  { id: 43, nombre: 'Montana', precio: 1200, categoria: 'Sofás', imagen: '/muebles/montana.png', desc: 'Diseño Exclusivo' },
  { id: 44, nombre: 'Mykonos', precio: 1200, categoria: 'Sofás', imagen: '/muebles/mykonos.png', desc: 'Diseño Exclusivo' },
  { id: 45, nombre: 'Naia', precio: 450, categoria: 'Camas', imagen: '/muebles/naia.png', desc: 'Base Lisa Individual' },
  { id: 46, nombre: 'Noa', precio: 450, categoria: 'Camas', imagen: '/muebles/noa.png', desc: 'Base Lisa Individual' },
  { id: 47, nombre: 'Paris', precio: 1200, categoria: 'Sofás', imagen: '/muebles/paris.png', desc: 'Diseño Exclusivo' },
  { id: 48, nombre: 'Praga', precio: 985, categoria: 'Sofás', imagen: '/muebles/praga.png', desc: 'Líneas Finas' },
  { id: 49, nombre: 'Qatar', precio: 1655, categoria: 'Sofás', imagen: '/muebles/qatar.png', desc: '2.35M + Puff y Cojines' },
  { id: 50, nombre: 'Santorini', precio: 1200, categoria: 'Sofás', imagen: '/muebles/santorini.png', desc: 'Diseño Exclusivo' },
  { id: 51, nombre: 'Seattle', precio: 985, categoria: 'Sofás', imagen: '/muebles/seattle.png', desc: 'Moderno' },
  { id: 52, nombre: 'Seul', precio: 1095, categoria: 'Sofás', imagen: '/muebles/seul.png', desc: 'Minimalismo Puro' },
  { id: 53, nombre: 'Singapure', precio: 1200, categoria: 'Sofás', imagen: '/muebles/singapure.png', desc: 'Diseño Exclusivo' },
  { id: 54, nombre: 'Sydney', precio: 1200, categoria: 'Sofás', imagen: '/muebles/sydney.png', desc: 'Diseño Exclusivo' },
  { id: 55, nombre: 'Tailandia', precio: 1200, categoria: 'Sofás', imagen: '/muebles/tailandia.png', desc: 'Diseño Exclusivo' },
  { id: 56, nombre: 'Texas', precio: 1255, categoria: 'Sofás', imagen: '/muebles/texas.png', desc: 'Robusto y Elegante' },
  { id: 57, nombre: 'Cama Tokyo', precio: 405, categoria: 'Camas', imagen: '/muebles/tokyo.png', desc: 'Base Lisa Individual' },
  { id: 58, nombre: 'Cama Toronto', precio: 405, categoria: 'Camas', imagen: '/muebles/toronto.png', desc: 'Base Lisa Individual' },
  { id: 59, nombre: 'Vancouver', precio: 1290, categoria: 'Sofás', imagen: '/muebles/vancouver.png', desc: 'Estilo Vanguardista' },
  { id: 60, nombre: 'Cama Venecia', precio: 480, categoria: 'Camas', imagen: '/muebles/venecia.png', desc: 'Base Lisa Individual' },
  { id: 61, nombre: 'Vienna', precio: 1200, categoria: 'Sofás', imagen: '/muebles/vienna.png', desc: 'Diseño Exclusivo' }
];

export default function App() {
  const [categoria, setCategoria] = useState('Todos');
  const [carrito, setCarrito] = useState([]);
  const [abierto, setAbierto] = useState(false);

  const filtrados = categoria === 'Todos' ? productos : productos.filter(p => p.categoria === categoria);

  const add = (p) => {
    const existe = carrito.find(x => x.id === p.id);
    if (existe) {
      setCarrito(carrito.map(x => x.id === p.id ? { ...x, cant: x.cant + 1 } : x));
    } else {
      setCarrito([...carrito, { ...p, cant: 1 }]);
    }
  };

  const total = carrito.reduce((s, p) => s + (p.precio * p.cant), 0);

  const sendWA = () => {
    const items = carrito.map(p => `• ${p.cant}x ${p.nombre}`).join('%0A');
    const mensaje = `¡Hola Dekog Home! 👋%0A%0AQuiero solicitar información sobre estos productos:%0A%0A${items}%0A%0A*Total estimado: $${total}*%0A%0A¿Podrían confirmarme disponibilidad? Gracias.`;
    window.open(`https://wa.me/584124118314?text=${mensaje}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* BOTÓN FLOTANTE */}
      <a href="https://wa.me/584124118314?text=Hola,%20tengo%20una%20consulta%20sobre%20sus%20muebles." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform">
        <MessageCircle size={28} />
      </a>

   {/* NAVBAR */}
<nav className="p-4 border-b flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-40 px-6">
  <div className="flex items-center gap-2">
    {/* Usamos ?v=3 para forzar la actualización del logo en HD */}
    <img 
      src="/logo.png?v=3" 
      className="w-10 h-10 rounded-full object-cover shadow-sm" 
      alt="Logo" 
    />
    <div className="flex flex-col">
      <span className="font-black text-xl tracking-tighter uppercase text-black">Dekog Home</span>
      <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">Diseño y Confort</span>
    </div>
  </div>
  <button 
    onClick={() => setAbierto(true)} 
    className="relative p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
  >
    <ShoppingCart size={24} />
    {carrito.length > 0 && (
      <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
        {carrito.length}
      </span>
    )}
  </button>
</nav>
      {/* BIENVENIDA */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 italic">Colección 2026</h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">Explora nuestra selección exclusiva de muebles diseñados para transformar tu hogar con el máximo confort.</p>
      </div>

      {/* BARRA DE CONFIANZA (NUEVA) */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
             {[ {icon: ShieldCheck, title: "100% Seguro"}, {icon: CreditCard, title: "Pagos Fáciles"}, {icon: Truck, title: "Envío Nacional"}, {icon: Star, title: "Calidad Top"} ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-gray-400">
                    <item.icon size={24} />
                    <span className="text-[9px] font-bold uppercase tracking-widest">{item.title}</span>
                </div>
            ))}
        </div>
      </section>

      {/* FILTROS */}
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="flex justify-center gap-2 overflow-x-auto px-4 w-full">
          {['Todos', 'Sofás', 'Camas', 'Puffs'].map(c => (
            <button key={c} onClick={() => setCategoria(c)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${categoria === c ? 'bg-black text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Mostrando {filtrados.length} piezas exclusivas</div>
      </div>

      {/* CATÁLOGO */}
      <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20">
        {filtrados.map(p => (
          <div key={p.id} className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
              <img src={p.imagen} alt={p.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-0" onLoad={(e) => e.target.classList.add('opacity-100')} />
              <button onClick={() => add(p)} className="absolute bottom-4 left-4 right-4 bg-black/90 text-white py-4 rounded-2xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all font-bold text-xs uppercase tracking-widest backdrop-blur-sm">
                <ShoppingCart size={18} /> Añadir al Carrito
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg uppercase tracking-tight mb-1">{p.nombre}</h3>
              <p className="text-xs text-gray-400 mb-4">{p.desc}</p>
              <span className="text-xl font-black text-black">${p.precio}</span>
            </div>
          </div>
        ))}
      </main>

      {/* TESTIMONIOS */}
      <section className="py-20 px-6 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12">Lo que dicen nuestros clientes</h4>
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-8 rounded-3xl border">
                    <p className="text-sm text-gray-600 mb-4 italic">"El sofá llegó perfecto. La calidad es increíble."</p>
                    <span className="text-[10px] font-bold uppercase">— María R.</span>
                </div>
                <div className="bg-white p-8 rounded-3xl border">
                    <p className="text-sm text-gray-600 mb-4 italic">"Gran asesoría por WhatsApp. Muy recomendado."</p>
                    <span className="text-[10px] font-bold uppercase">— Carlos M.</span>
                </div>
            </div>
        </div>
      </section>

      {/* CARRITO */}
      {abierto && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setAbierto(false)} />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-8">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black uppercase italic">Carrito.</h2>
              <button onClick={() => setAbierto(false)}><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {carrito.map(p => (
                <div key={p.id} className="flex gap-4 mb-4 bg-gray-50 p-4 rounded-xl">
                    <img src={p.imagen} className="w-16 h-16 object-cover rounded-lg" alt="" />
                    <div className="flex-1">
                        <h4 className="font-bold text-sm">{p.nombre}</h4>
                        <p className="text-sm font-black">${p.precio}</p>
                    </div>
                    <button onClick={() => setCarrito(carrito.filter(x => x.id !== p.id))}><Trash2 size={18} /></button>
                </div>
              ))}
            </div>
            <button onClick={sendWA} className="w-full bg-black text-white py-6 rounded-2xl font-bold uppercase text-xs">Finalizar Pedido por WhatsApp</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-6 text-center">
        <h3 className="text-xl font-black italic uppercase mb-4">Dekog Home</h3>
        <p className="text-[10px] text-gray-500 mb-8">© 2026, Dekog Home. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}