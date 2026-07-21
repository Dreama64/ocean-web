import GlassPanel from "./GlassPanel";

const menu = [
  "Inicio",
  "Nosotros",
  "Galería",
  "Servicios",
  "Contacto",
];

export default function Header() {
  return (
    <header className="flex flex-col items-center">

      {/* Logo */}
      <div className="mb-3 text-center">

        <h1
          className="
            text-[72px]
            font-black
            leading-none
            tracking-[8px]
            text-white
            drop-shadow-[0_0_20px_rgba(255,255,255,.45)]
          "
        >
          DINORAH
        </h1>

        <div
          className="
            mt-2
            text-[13px]
            uppercase
            tracking-[8px]
            text-cyan-200
          "
        >
          Mundo Marino
        </div>

      </div>

      {/* Línea superior como la original */}
      <div className="mb-4 flex items-center gap-4">

        <div className="h-px w-36 bg-cyan-300/30" />

        <span className="text-xs tracking-[3px] uppercase text-cyan-100/70">
          Bienvenidos al Oceano
        </span>

        <div className="h-px w-36 bg-cyan-300/30" />

      </div>

      {/* Barra */}
      <GlassPanel className="w-full px-6 py-4">

        <div className="flex items-center">

          {/* Menú */}
          <nav className="flex gap-9">

            {menu.map((item) => (
              <button
                key={item}
                className="
                  text-[17px]
                  text-white
                  transition-all
                  hover:text-cyan-200
                  hover:drop-shadow-[0_0_12px_#7fe8ff]
                "
              >
                {item}
              </button>
            ))}

          </nav>

          {/* Buscador */}
          <div className="ml-auto">

            <input
              type="text"
              placeholder="Buscar..."
              className="
                h-11
                w-60
                rounded-full
                border
                border-white/15
                bg-white/10
                px-6
                text-white
                placeholder:text-cyan-100/50
                outline-none
                transition-all
                focus:border-cyan-300/60
              "
            />

          </div>

        </div>

      </GlassPanel>

    </header>
  );
}