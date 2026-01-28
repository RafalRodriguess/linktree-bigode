
import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import { SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-start overflow-x-hidden pb-12">
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#ff2a2a33_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_#00bfff33_0%,_transparent_50%)]" />
      </div>

      <main className="relative z-10 w-full max-w-lg px-4 flex flex-col items-center">
        <ProfileHeader />

        {/* Links List */}
        <div className="w-full mt-2 flex flex-col">
          {SOCIAL_LINKS.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
            @bigodepolemico &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
