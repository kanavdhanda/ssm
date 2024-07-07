
import { useEffect } from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Pnf from './pages/404';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
  

    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Pnf />} />


      </Routes>
      <Footer />

    </Router>
  );
}

export default App;