import { Home, Search, Library, Plus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data"; // Import projects

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[72px] md:w-[220px] bg-black p-2 flex flex-col gap-2 h-full flex-shrink-0">
        <img src="./images/spotify-logo.png" alt="Spotify" className="w-8 h-8 object-contain" />
      
      {/* Top Nav */}
      <div className="bg-[#121212] rounded-lg p-4 flex flex-col gap-4">
        <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-4 text-white cursor-pointer transition opacity-100 hover:opacity-100"
        >
          <Home size={22} />
          <span className="hidden md:block font-bold text-sm">Home</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400 hover:text-white transition cursor-pointer">
          <Search size={22} />
          <span className="hidden md:block font-bold text-sm">Search</span>
        </div>
      </div>

      {/* Library Area */}
      <div className="flex-1 bg-[#121212] rounded-lg flex flex-col overflow-hidden">
        
        {/* Library Header */}
        <div className="p-4 pb-2 shadow-md z-10">
            <div className="flex items-center justify-between text-gray-400 mb-3 hover:text-white transition cursor-pointer">
                <div className="flex items-center gap-2">
                    <Library size={22} />
                    <span className="hidden md:block font-bold text-sm">Your Library</span>
                </div>
                <Plus size={18} className="hover:bg-[#282828] rounded-full p-0.5" />
            </div>
            
            {/* Filter Pills */}
            <div className="hidden md:flex gap-2 overflow-x-auto no-scrollbar pb-1">
                <span className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white text-[11px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap cursor-pointer transition">
                    Projects
                </span>
                <span className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white text-[11px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap cursor-pointer transition">
                    C#
                </span>
                <span className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white text-[11px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap cursor-pointer transition">
                    React
                </span>
            </div>
        </div>

        {/* Project List (Scrollable) */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-2">
            <div className="flex flex-col gap-1">
                {projects.map((proj) => (
                    <div 
                        key={proj.id}
                        onClick={() => navigate(`/project/${proj.id}`)}
                        className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1a1a1a] cursor-pointer group"
                    >
                        {/* Tiny Thumbnail */}
                        <div className={`w-10 h-10 ${proj.img} rounded flex-shrink-0 flex items-center justify-center`}>
                            <span className="text-[8px] text-gray-400 group-hover:hidden">IMG</span>
                        </div>
                        
                        {/* Text Details */}
                        <div className="hidden md:flex flex-col overflow-hidden">
                            <span className="text-white text-sm font-medium truncate group-hover:text-green-500 transition">{proj.title}</span>
                            <span className="text-gray-400 text-xs truncate">Project • Akeyla</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;