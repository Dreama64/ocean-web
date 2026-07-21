import GlassPanel from "./GlassPanel";

export default function Hero() {
  return (
    <GlassPanel className="relative overflow-visible p-12">

      <div className="grid grid-cols-[1fr_430px] items-center gap-10">

        {/* Texto */}

        <div>

          <span className="inline-block rounded-full bg-cyan-400/20 px-5 py-2 text-cyan-200">
            🌊 Bienvenidos
          </span>

          <h2 className="mt-6 text-6xl font-black leading-tight text-white">
            Explora el
            <br />
            Mundo Marino
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-cyan-100/80">
            Sumérgete en una experiencia inspirada en el océano.
            Descubre especies, paisajes submarinos y contenidos
            diseñados para aprender y disfrutar del mundo marino.
          </p>

          <button
            className="
              mt-10
              rounded-full
              border
              border-cyan-200/30
              bg-gradient-to-b
              from-cyan-300/40
              to-cyan-600/20
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-cyan-400/40
            "
          >
            Conocer más
          </button>

        </div>

        {/* Imagen */}

        <div className="relative">

          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              scale-110
              rounded-full
              bg-cyan-400/20
              blur-[90px]
            "
          />

          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900"
            alt="Océano"
            className="
              relative
              z-10
              -rotate-2
              rounded-[30px]
              border
              border-white/20
              shadow-2xl
              transition-all
              duration-500
              hover:scale-105
              hover:rotate-0
            "
          />

        </div>

      </div>

    </GlassPanel>
  );
}