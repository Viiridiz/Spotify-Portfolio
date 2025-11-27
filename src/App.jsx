import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import Layout from "./layout/Layout";
import AboutModal from "./components/AboutModal";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";

// Helper component to handle the animation logic
const AnimatedRoutes = () => {
  const location = useLocation(); 

  return (
    <div key={location.pathname} className="h-full animate-slide-up">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectView />} />
      </Routes>
    </div>
  );
};

export default function App() {
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleConnect = () => {
    setExiting(true);
    setTimeout(() => {
      setEntered(true);
    }, 400); // Matches the faster exit animation
  };

  if (!entered) {
    return <Login onLogin={handleConnect} isExiting={exiting} />;
  }

  return (
    <ModalProvider>
      <Router>
        <div className="animate-fade-in h-screen bg-black text-white overflow-hidden font-sans selection:bg-green-500 selection:text-black">
          
          <AboutModal /> 
          
          <Layout>
            {/* We use the helper here */}
            <AnimatedRoutes />
          </Layout>
          
        </div>
      </Router>
    </ModalProvider>
  );
}