import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext"; // Import Provider
import Layout from "./layout/Layout";
import AboutModal from "./components/AboutModal"; // Import Modal
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);

  const handleConnect = () => {
    setExiting(true);
    setTimeout(() => {
      setEntered(true);
    }, 1000);
  };

  if (!entered) {
    return <Login onLogin={handleConnect} isExiting={exiting} />;
  }

  return (
    <ModalProvider>
      <Router>
        <div className="animate-fade-in">
          {/* Modal sits here, accessible globally */}
          <AboutModal /> 
          
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectView />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ModalProvider>
  );
}