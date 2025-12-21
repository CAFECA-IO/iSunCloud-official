"use client";

import { useEffect, useState } from 'react';


export const JoinNetworkButton = () => {
  const [buttonState, setButtonState] = useState({ url: '#', label: 'Download' });

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    let url = '#';
    let osLabel = 'Download';
    console.log(userAgent);
    if (userAgent.indexOf("Win") !== -1) {
      url = 'download/latest/isuncloud-gui-windows.zip';
      osLabel = 'Download for Windows';
    } else if (userAgent.indexOf("Mac") !== -1) {
      url = 'download/latest/isuncloud-gui-macos.dmg';
      osLabel = 'Download for macOS';
    } else if (userAgent.indexOf("Linux") !== -1) {
      url = 'download/latest/isuncloud-gui-linux.appimage';
      osLabel = 'Download for Linux';
    } else {
      url = 'download/latest/isuncloud-gui-linux.appimage';
      osLabel = 'Download App';
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setButtonState({ url, label: osLabel });
  }, []);

  return (
    <a
      href={buttonState.url}
      className="px-8 py-3 bg-cyan-600/20 border border-cyan-500/50 hover:bg-cyan-500/30 text-cyan-300 rounded-sm uppercase tracking-widest text-sm font-semibold transition-all backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] text-center flex items-center justify-center cursor-pointer"
    >
      {buttonState.label}
    </a>
  );
};
