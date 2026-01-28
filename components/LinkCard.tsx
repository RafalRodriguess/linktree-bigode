
import React from 'react';
import { LinkItem } from '../types';

interface LinkCardProps {
  link: LinkItem;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  // Helpers to get specific icons/logos
  const renderIcon = () => {
    switch (link.type) {
      case 'whatsapp':
        return <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-12 h-12 drop-shadow-lg" alt="WA" />;
      case 'tiktok':
        return (
          <div className="relative">
            <span className="absolute -top-5 -left-2 text-xl">👑</span>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-logo-PNG.png" className="w-12 h-12 object-contain drop-shadow-lg invert" alt="TT" />
          </div>
        );
      case 'youtube':
        return (
          <div className="relative">
            <span className="absolute -top-5 -left-2 text-xl">👑</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" className="w-12 h-12 drop-shadow-lg" alt="YT" />
          </div>
        );
      case 'instagram':
        return <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className="w-12 h-12 drop-shadow-lg" alt="IG" />;
      default:
        return null;
    }
  };

  const isAcao = link.type === 'acao';

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative w-full ${isAcao ? 'h-36' : 'h-32'} mb-4 flex items-center rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-2`}
      style={{ 
        borderColor: link.borderColor,
        boxShadow: `0 0 15px ${link.borderColor}44`
      }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${link.bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center px-5">
        
        {/* Left Side: Logo */}
        <div className="w-1/4 flex justify-center items-center">
          {isAcao ? null : renderIcon()}
        </div>

        {/* Right Side: Text Box */}
        <div className={`flex-grow flex flex-col ${isAcao ? 'items-center w-full' : 'items-end'}`}>
          <div className={`${isAcao ? 'text-center' : 'w-full max-w-[210px] p-2.5 border border-white/20 rounded-xl bg-black/60 backdrop-blur-md shadow-2xl'}`}>
            <h3 className={`font-black tracking-tighter italic uppercase leading-none ${isAcao ? 'text-2xl text-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-2' : 'text-sm text-white mb-1'}`}>
              {link.title}
            </h3>
            
            {isAcao ? (
               <div className="bg-red-600 px-5 py-1.5 rounded-full inline-block animate-bounce shadow-xl border border-white/20">
                  <span className="text-white font-black text-lg italic tracking-widest">{link.description}</span>
               </div>
            ) : (
              <p className="text-[9px] text-white/80 font-bold leading-tight uppercase tracking-tight">
                {link.description}
              </p>
            )}
            
            {!isAcao && (
               <div className="mt-1.5 flex justify-end">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/30 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
               </div>
            )}
          </div>
        </div>
      </div>

      {/* Money falling animation for Ação if needed */}
      {isAcao && (
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent pointer-events-none animate-pulse" />
      )}
    </a>
  );
};

export default LinkCard;
