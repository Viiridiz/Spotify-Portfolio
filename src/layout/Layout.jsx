import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";
import Player from "../components/Player";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Center Content (The Page) */}
        <div className="flex-1 bg-gradient-to-b from-[#1e1e1e] to-[#121212] rounded-lg overflow-y-auto m-2 no-scrollbar relative">
        {children}
        </div>

        {/* Right Sidebar */}
        <RightPanel />
      </div>

      {/* Footer */}
      <Player />
    </div>
  );
};

export default Layout;