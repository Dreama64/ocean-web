import GlassPanel from "./GlassPanel";

const destacados = [
  {
    emoji: "🐬",
    titulo: "Delfines",
    texto: "Conoce las especies más inteligentes del océano.",
  },
  {
    emoji: "🐋",
    titulo: "Ballenas",
    texto: "Descubre a los gigantes del mar.",
  },
  {
    emoji: "🪸",
    titulo: "Arrecifes",
    texto: "Explora ecosistemas llenos de color y vida.",
  },
];

export default function Cards() {
  return (
    <div className="mt-8 grid grid-cols-[280px_1fr] gap-6">
      {/* Menú */}

      <GlassPanel className="p-6">
        <h3 className="mb-5 text-2xl font-bold text-white">
          Menú rápido
        </h3>

        <div className="space-y-4">
          <button className="w-full rounded-xl bg-cyan-500/20 p-3 text-left text-white transition hover:bg-cyan-500/40">
            🐠 Especies
          </button>

          <button className="w-full rounded-xl bg-cyan-500/20 p-3 text-left text-white transition hover:bg-cyan-500/40">
            🌊 Galería
          </button>

          <button className="w-full rounded-xl bg-cyan-500/20 p-3 text-left text-white transition hover:bg-cyan-500/40">
            📍 Ubicación
          </button>

          <button className="w-full rounded-xl bg-cyan-500/20 p-3 text-left text-white transition hover:bg-cyan-500/40">
            📞 Contacto
          </button>
        </div>
      </GlassPanel>

      {/* Destacados */}

      <GlassPanel className="p-6">
        <h3 className="mb-6 text-2xl font-bold text-white">
          Destacados
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {destacados.map((item) => (
            <div
              key={item.titulo}
              className="rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="text-center text-6xl">
                {item.emoji}
              </div>

              <h4 className="mt-4 text-center text-lg font-bold text-white">
                {item.titulo}
              </h4>

              <p className="mt-2 text-center text-sm leading-6 text-cyan-100/70">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}