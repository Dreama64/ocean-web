import GlassPanel from "./GlassPanel";

export default function Info() {
  return (
    <div className="mt-8 grid grid-cols-[260px_1fr] gap-6">

      <GlassPanel className="p-6">

        <h3 className="mb-4 text-2xl font-bold text-white">
          Menú
        </h3>

        <ul className="space-y-4 text-cyan-100">

          <li>🏠 Inicio</li>
          <li>🐠 Galería</li>
          <li>🪸 Servicios</li>
          <li>📞 Contacto</li>

        </ul>

      </GlassPanel>

      <GlassPanel className="p-6">

        <h3 className="mb-4 text-2xl font-bold text-white">
          Novedades
        </h3>

        <div className="space-y-5">

          <div>
            <h4 className="text-cyan-200 font-semibold">
              🐬 Delfines
            </h4>

            <p className="text-cyan-100/80">
              Descubre cómo viven y se comunican estos increíbles mamíferos marinos.
            </p>
          </div>

          <div>
            <h4 className="text-cyan-200 font-semibold">
              🪸 Arrecifes
            </h4>

            <p className="text-cyan-100/80">
              Los arrecifes de coral albergan miles de especies y son esenciales para el océano.
            </p>
          </div>

          <div>
            <h4 className="text-cyan-200 font-semibold">
              🌊 Conservación
            </h4>

            <p className="text-cyan-100/80">
              Conoce las iniciativas para proteger la biodiversidad marina.
            </p>
          </div>

        </div>

      </GlassPanel>

    </div>
  );
}