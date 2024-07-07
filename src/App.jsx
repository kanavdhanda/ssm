
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/testfinal2';
import Navbar from './components/Navbar';
import Pnf from './pages/404';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Pnf />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}

      </Routes>
      <Footer />

    </Router>
  );
}

export default App;