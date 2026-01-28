
import React from 'react';
import { PROFILE_NAME } from '../constants';

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-8 mb-6">
      <div className="relative group">
        {/* Animated outer ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
          <img 
            src="https://i.imgur.com/kKT70gy.png" 
            alt="Bigode Polêmico"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-4 flex flex-col items-center">
        <h1 className="text-xl font-black text-white italic tracking-tighter flex items-center gap-1">
          BIGODE POLÊMICO
          <span className="text-blue-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </span>
        </h1>
        <div className="mt-1 px-3 py-0.5 bg-white/10 rounded-full">
           <p className="text-white/60 font-bold text-[10px] tracking-widest uppercase">{PROFILE_NAME}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
