import { X, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { useModal } from "../context/ModalContext";

const AboutModal = () => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
      <div className="bg-[#181818] w-full max-w-2xl rounded-xl p-8 shadow-2xl relative border border-white/10" onClick={(e) => e.stopPropagation()}>
        
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-8">
            {/* Left: Photo */}
            <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="aspect-square bg-[#282828] rounded-lg flex items-center justify-center text-gray-500 font-bold text-xl">
                    [PHOTO]
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm justify-center">
                    <MapPin size={16} /> Montreal, QC
                </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-2/3 flex flex-col gap-4">
                <h2 className="text-4xl font-black text-white tracking-tighter">Akeyla Shareef</h2>
                <span className="text-green-500 font-bold uppercase tracking-widest text-xs">Full Stack Developer</span>
                
                <p className="text-gray-300 leading-relaxed">
                    Computer Science student with a strong background in cloud engineering and full-stack developing. Quick to adapt, creative, and driven to bring ideas to life. Excited to collaborate and build impactful solutions.
                </p>

                <div className="mt-4 flex flex-col gap-3">
                    <a href="mailto:amashkashareef@gmail.com" className="bg-white text-black font-bold py-3 px-6 rounded-full hover:scale-105 transition flex items-center justify-center gap-2">
                        <Mail size={18} /> amashkashareef@gmail.com
                    </a>
                    
                    <div className="flex gap-3">
                        <a href="https://www.linkedin.com/in/akeyla-shareef/" target="_blank" className="flex-1 border border-gray-600 text-white font-bold py-3 rounded-full hover:border-white transition flex items-center justify-center gap-2">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a href="https://github.com/Viiridiz" target="_blank" className="flex-1 border border-gray-600 text-white font-bold py-3 rounded-full hover:border-white transition flex items-center justify-center gap-2">
                            <Github size={18} /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;