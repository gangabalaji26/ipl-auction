import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 w-full max-w-6xl mx-auto px-6 border-t border-white/5 pt-16 pb-12 z-10 relative">
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-72 h-72 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="pb-12">
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-black tracking-[0.2em] uppercase text-white bg-clip-text">
              IPL Auction Hub
            </span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            The ultimate multiplayer IPL auction simulator for creating rooms, bidding live, and building your dream squad with friends.
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-white/5 mb-8" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest text-center sm:text-left leading-relaxed">
          &copy; {currentYear} IPL Auction Hub. All rights reserved. 🏏
        </p>
        <div className="flex items-center gap-2.5">
          <ShieldCheck size={12} className="text-[#ff5500]/70" />
          <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] leading-none">
            Secure Realtime Sync Enabled
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
