import { useModal } from "../context/ModalContext";
import { ChevronRight, MapPin, Code, Activity } from "lucide-react";

const RightPanel = () => {
  const { openModal } = useModal();

  return (
    <div className="hidden lg:flex w-[280px] bg-black p-2 flex-col gap-3 h-full flex-shrink-0 border-l border-[#282828]">
      
      {/* 1. CURRENT FOCUS (App Icon Style) */}
      <div className="bg-[#121212] rounded-xl p-4 flex flex-col items-center gap-3 hover:bg-[#1a1a1a] transition group cursor-pointer">
        <div className="w-full flex justify-between items-center">
            <span className="font-bold text-xs text-gray-400 uppercase tracking-wider">Current Focus</span>
        </div>
        
        <div className="w-24 h-24 bg-gradient-to-br from-[#3e523f] to-black rounded-2xl shadow-xl flex items-center justify-center border border-white/10 group-hover:scale-105 transition duration-300">
             <span className="text-3xl">💻</span>
        </div>
        
        <div className="text-center">
            <h3 className="font-bold text-white text-sm">Spotify Portfolio</h3>
            <p className="text-xs text-gray-500 mt-1">React • Tailwind</p>
        </div>
      </div>

      {/* 2. ABOUT ME (Added Stats to fill space) */}
      <div className="bg-[#121212] rounded-xl p-5 flex-1 flex flex-col gap-4 relative overflow-hidden">
        
        <div className="flex items-center gap-4">
             <div className="w-14 h-14 bg-[#282828] rounded-full flex items-center justify-center text-gray-500 font-bold overflow-hidden shadow-lg border border-white/10">
                <img 
                    src="./images/profile.jpg" 
                    alt="Profile" 
                    className="w-14 h-14 rounded-full object-cover border border-white/10 shadow-lg" 
                    />
             </div>
             <div>
                 <h2 className="font-bold text-base text-white">About Akeyla</h2>
                 <span className="text-[10px] bg-green-900 text-green-400 px-2 py-0.5 rounded-full font-bold uppercase">Online</span>
             </div>
        </div>
        
        <p className="text-gray-400 text-xs leading-relaxed">
            Computer Science student with a strong background in cloud engineering and full-stack developing. Quick to adapt, creative, and driven to bring ideas to life.
        </p>

        {/* NEW: Stats Grid to fill space */}
        <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-[#1a1a1a] p-2 rounded flex flex-col gap-1">
                <MapPin size={12} className="text-gray-500" />
                <span className="text-xs font-bold text-white">Montreal</span>
            </div>
            <div className="bg-[#1a1a1a] p-2 rounded flex flex-col gap-1">
                <Code size={12} className="text-gray-500" />
                <span className="text-xs font-bold text-white">Full Stack</span>
            </div>
            <div className="bg-[#1a1a1a] p-2 rounded flex flex-col gap-1 col-span-2">
                <Activity size={12} className="text-gray-500" />
                <span className="text-xs font-bold text-white">Open to Work</span>
            </div>
        </div>

        <button 
            onClick={openModal}
            className="mt-auto w-full py-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 group"
        >
            Open Bio <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
        </button>
      </div>

    </div>
  );
};

export default RightPanel;