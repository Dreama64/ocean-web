interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: GlassPanelProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-[34px]
        border border-cyan-200/20
        bg-white/10
        backdrop-blur-xl

        before:absolute
        before:inset-[1px]
        before:rounded-[32px]
        before:border
        before:border-white/10
        before:content-['']

        shadow-[0_15px_45px_rgba(0,0,0,.45),0_0_35px_rgba(0,180,255,.25)]

        ${className}
      `}
    >
      {/* Reflejo superior */}
      <div className="absolute left-6 right-6 top-3 h-8 rounded-full bg-white/20 blur-xl" />

      {/* Halo azul */}
      <div className="absolute -left-32 top-0 h-full w-52 bg-cyan-300/10 blur-3xl" />

      {/* Halo derecho */}
      <div className="absolute -right-32 bottom-0 h-full w-52 bg-blue-400/10 blur-3xl" />

      {/* Luz diagonal */}
      <div className="absolute -right-40 -top-24 h-80 w-80 rotate-45 bg-white/5 blur-3xl" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}