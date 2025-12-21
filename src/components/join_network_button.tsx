"use client";

export const JoinNetworkButton = () => {
  const url = "downloads";
  const osLabel = "Download iSunCloud";

  return (
    <a
      href={url}
      className="px-8 py-3 bg-cyan-600/20 border border-cyan-500/50 hover:bg-cyan-500/30 text-cyan-300 rounded-sm uppercase tracking-widest text-sm font-semibold transition-all backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] text-center flex items-center justify-center cursor-pointer"
    >
      {osLabel}
    </a>
  );
};
