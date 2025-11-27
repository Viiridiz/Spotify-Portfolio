import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, Layers, Code } from "lucide-react";
import { projects, techIcons } from "../data";

const ProjectView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  // loose check for string vs number ID
  const project = projects.find(p => p.id == id);

  if (!project) return <div className="p-10 text-white">Project not found.</div>;

  return (
    <div className="p-6 pt-4 animate-fade-in h-full overflow-y-auto no-scrollbar pb-24">
      
      {/* Back Nav */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition font-bold text-xs uppercase tracking-wider"
      >
        <ArrowLeft size={16} /> Back to Library
      </button>

      {/* Header Info (Smaller) */}
      <div className="flex flex-col gap-2 mb-8">
          <span className="text-green-500 font-bold tracking-widest text-[10px] uppercase">
            {project.type} • {project.year}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            {project.title}
          </h1>
          <h2 className="text-lg text-gray-400 font-medium">
            {project.tagline}
          </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Details */}
        <div className="lg:col-span-1 flex flex-col gap-6 order-2 lg:order-1">
            
            <button className="w-full bg-[#1ed760] text-black font-bold py-2.5 rounded-full hover:scale-105 transition shadow-lg flex items-center justify-center gap-2 text-sm">
                <Github size={18} /> Source Code
            </button>

            {/* Description Card */}
            <div className="bg-[#181818] p-5 rounded-xl border border-white/5">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2 text-sm">
                    <Layers size={16} className="text-gray-400"/> The Breakdown
                </h3>
                <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                    {project.description}
                </p>
            </div>

            {/* Tech Stack with Icons */}
            <div className="bg-[#181818] p-5 rounded-xl border border-white/5">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2 text-sm">
                    <Code size={16} className="text-gray-400"/> The Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => {
                        const iconUrl = techIcons[t];
                        return (
                            <div key={i} className="px-3 py-1.5 bg-[#282828] text-white text-xs font-bold rounded-full border border-white/10 flex items-center gap-2">
                                {iconUrl && <img src={iconUrl} alt={t} className="w-3 h-3 opacity-90" />}
                                <span>{t}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        {/* Right Side: Gallery */}
        <div className="lg:col-span-2 flex flex-col gap-4 order-1 lg:order-2">
            
            {/* Main Stage */}
            <div className={`w-full aspect-video ${project.gallery ? project.gallery[activeImage] : project.img} rounded-xl shadow-2xl flex items-center justify-center text-gray-500 font-bold text-xl border border-white/10 transition-all duration-500`}>
                {/* Only show text if image fails to load or is a color placeholder */}
                <span className="opacity-0 hover:opacity-100 transition">[Screenshot {activeImage + 1}]</span>
            </div>

            {/* Centered Thumbnails */}
            <div className="flex justify-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                {/* Check if gallery exists, otherwise fallback to empty array */}
                {(project.gallery || []).map((shot, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        // Use the specific screenshot for the thumbnail too
                        className={`w-24 aspect-video ${shot} rounded cursor-pointer transition-all duration-300 border-2 ${activeImage === idx ? 'border-green-500 opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                    ></div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectView;