import { useRef } from "react"; 
import { BadgeCheck, Play, Mail, Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext";
import { profile, skills, projects } from "../data";

const Home = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  
  // need separate refs so they don't scroll each other
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const smoothScroll = (element, change, duration) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); 

      element.scrollLeft = start + (change * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // updated to take the specific ref and distance
  const handleScroll = (ref, direction, distance) => {
    if (ref.current) {
        const amount = direction === "left" ? -distance : distance;
        smoothScroll(ref.current, amount, 600); 
    }
  };

  return (
    <div className="h-full flex flex-col">
        
        {/* HERO */}
        <div className="relative w-full h-[280px] flex items-end p-6 flex-shrink-0 group overflow-hidden">
            <div className={`absolute inset-0 ${profile.coverImage} transition-transform duration-500 group-hover:scale-105`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/20 to-transparent"></div>

            <div className="relative z-10 flex flex-col gap-2 w-full max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-bold text-green-400">
                    <BadgeCheck fill="currentColor" className="text-black" size={16} />
                    <span>Verified Student</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                    {profile.name}
                </h1>
                
                <div className="flex flex-col gap-3">
                    <span className="text-gray-300 font-medium text-sm">{profile.role} • {profile.location}</span>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                        {profile.bio}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                        <button onClick={openModal} className="border border-gray-500 hover:border-white hover:text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition flex items-center gap-2">
                            <Mail size={12} /> Connect
                        </button>
                        <a href="https://www.linkedin.com/in/akeyla-shareef/" target="_blank" className="p-1 border border-gray-500 rounded-full hover:border-white hover:text-white transition"><Linkedin size={14} /></a>
                        <a href="https://github.com/Viiridiz" target="_blank" className="p-1 border border-gray-500 rounded-full hover:border-white hover:text-white transition"><Github size={14} /></a>
                    </div>
                </div>
            </div>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-4 flex-1 overflow-y-auto no-scrollbar">
          
          {/* SKILLS CAROUSEL */}
          <div className="relative group/skills mb-8">
              
              <button 
                onClick={() => handleScroll(skillsRef, "left", 500)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-[#1ed760] hover:text-black text-white p-2.5 rounded-full opacity-0 group-hover/skills:opacity-100 transition duration-300 shadow-xl -ml-2 border border-white/10"
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                onClick={() => handleScroll(skillsRef, "right", 500)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-[#1ed760] hover:text-black text-white p-2.5 rounded-full opacity-0 group-hover/skills:opacity-100 transition duration-300 shadow-xl -mr-2 border border-white/10"
              >
                <ChevronRight size={20} />
              </button>

              <div ref={skillsRef} className="flex gap-3 overflow-x-auto no-scrollbar pb-2 pt-1">
                  {skills.map((skill) => (
                      <div key={skill.id} className="min-w-[150px] md:min-w-[180px] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] hover:from-[#3a3a3a] hover:to-[#2a2a2a] border border-white/5 hover:border-white/20 transition p-3 rounded-lg flex items-center gap-3 cursor-pointer group shadow-md flex-shrink-0">
                          <div className="w-10 h-10 bg-black/40 rounded-md flex items-center justify-center p-2 shadow-inner">
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition" />
                          </div>
                          <span className="font-bold text-sm text-white group-hover:text-green-400 transition">{skill.name}</span>
                      </div>
                  ))}
              </div>
          </div>

          {/* PROJECTS CAROUSEL */}
          <div className="flex justify-between items-end mb-3">
             <h2 className="text-lg font-bold text-white hover:underline cursor-pointer">Projects</h2>
          </div>
          
          <div className="relative group/carousel">
              
              <button 
                onClick={() => handleScroll(projectsRef, "left", 720)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-[#1ed760] hover:text-black text-white p-3 rounded-full opacity-0 group-hover/carousel:opacity-100 transition duration-300 shadow-xl -ml-4 border border-white/10"
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={() => handleScroll(projectsRef, "right", 720)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-[#1ed760] hover:text-black text-white p-3 rounded-full opacity-0 group-hover/carousel:opacity-100 transition duration-300 shadow-xl -mr-4 border border-white/10"
              >
                <ChevronRight size={24} />
              </button>

              <div ref={projectsRef} className="flex gap-5 overflow-x-auto pb-8 no-scrollbar">
                  {projects.map((project, index) => (
                      <div 
                        key={`${project.id}-${index}`} 
                        onClick={() => navigate(`/project/${project.id}`)}
                        className="min-w-[180px] md:min-w-[220px] bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition duration-200 cursor-pointer group flex-shrink-0"
                      >
                          <div className={`w-full aspect-square ${project.img} rounded-md mb-4 shadow-lg flex items-center justify-center text-gray-400 font-bold opacity-90 group-hover:opacity-100 transition relative overflow-hidden`}>
                              <div className="absolute bottom-2 right-2 w-10 h-10 bg-[#1ed760] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 shadow-xl z-10">
                                  <Play fill="black" size={18} className="ml-1 text-black" />
                              </div>
                          </div>
                          
                          <h3 className="font-bold text-white text-base truncate">{project.title}</h3>
                          <p className="text-xs text-gray-400 mt-1 truncate font-medium">{project.type}</p>
                      </div>
                  ))}
              </div>
          </div>
        </div>
    </div>
  );
};

export default Home;