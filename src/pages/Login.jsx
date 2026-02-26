import { Music, ArrowRight } from "lucide-react";

const Login = ({ onLogin, isExiting }) => {
  return (
    <div className={`h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden transition-all duration-1000 ${isExiting ? 'animate-fade-out pointer-events-none' : ''}`}>
      
      {/* Background Decor */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(62,82,63,0.3)_0%,rgba(0,0,0,0)_50%)] animate-pulse"></div>

      <div className="z-10 flex flex-col items-center gap-8 text-center">
        {/* Logo Icon */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-slide-up">
           <img src="./images/spotify-logo.png" alt="Spotify" className="w-45 h-15 mb-0 object-contain" />
        </div>

        {/* Text */}
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl font-black tracking-tighter text-white mb-2">Spotify Portfolio</h1>
            <p className="text-gray-400 font-medium">Millions of lines of code. Free on Spotify.</p>
        </div>

        {/* The Button */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button 
                onClick={onLogin}
                className="group relative px-8 py-4 bg-[#1ed760] rounded-full font-bold text-black text-lg hover:scale-105 hover:bg-[#1fdf64] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-green-500/50"
            >
                <span>Connect with Akeyla</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>

      <div className="absolute bottom-8 text-xs text-gray-600 uppercase tracking-widest font-bold animate-fade-in">
        v2.0 • Montreal, QC
      </div>
    </div>
  );
};

export default Login;