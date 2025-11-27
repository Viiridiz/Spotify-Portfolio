import { Play, SkipBack, SkipForward, Repeat, Shuffle, Mic2, LayoutList, Volume2, Maximize2 } from "lucide-react";

const Player = () => {
  return (
    <div className="h-[80px] bg-black border-t border-[#282828] flex items-center px-4 justify-between z-50 text-white flex-shrink-0">
      
      {/* Left: Info */}
      <div className="flex items-center gap-4 w-[30%]">
        <div className="w-12 h-12 bg-green-900 rounded flex items-center justify-center font-bold text-xs border border-white/10">
            AS
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-sm font-bold hover:underline cursor-pointer">Currently Working</div>
          <div className="text-xs text-gray-400 hover:underline cursor-pointer">Akeyla Shareef</div>
        </div>
      </div>
      
      {/* Center: Controls */}
      <div className="flex flex-col items-center w-[40%] gap-1">
         <div className="flex gap-5 items-center text-gray-400">
             <Shuffle size={16} className="hover:text-white cursor-pointer" />
             <SkipBack size={18} className="hover:text-white cursor-pointer" />
             <div className="bg-white text-black rounded-full p-1.5 hover:scale-105 transition cursor-pointer">
                <Play size={18} fill="black" className="ml-0.5" />
             </div>
             <SkipForward size={18} className="hover:text-white cursor-pointer" />
             <Repeat size={16} className="hover:text-white cursor-pointer" />
         </div>
         
         {/* Progress Bar */}
         <div className="w-full max-w-lg flex items-center gap-2 text-[10px] text-gray-400 font-medium font-mono">
            <span>1:42</span>
            <div className="h-1 flex-1 bg-gray-600 rounded-full overflow-hidden group cursor-pointer">
                <div className="w-[45%] h-full bg-white group-hover:bg-green-500"></div>
            </div>
            <span>3:15</span>
         </div>
      </div>

      {/* Right: Extra Controls (Visual only) */}
      <div className="flex items-center justify-end gap-3 w-[30%] text-gray-400">
         <Mic2 size={16} className="hover:text-white cursor-pointer" />
         <LayoutList size={16} className="hover:text-white cursor-pointer" />
         <Volume2 size={16} className="hover:text-white cursor-pointer" />
         <div className="w-20 h-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer">
             <div className="w-[80%] h-full bg-white hover:bg-green-500"></div>
         </div>
         <Maximize2 size={14} className="hover:text-white cursor-pointer ml-2" />
      </div>
    </div>
  );
};

export default Player;