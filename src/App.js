import './App.css';
import Body from './Componentis/Body';
import Enter from './Componentis/Enter';
import Footer from './Componentis/Footer';
import Gallery from './Componentis/Gallery';
import Header from './Componentis/Header';
import Section from './Componentis/Section';
import Sidebar from './Componentis/Sidebar';
import Wrap from './Componentis/Wrap';
import ProductDetails from './Componentis/ProductDetails'; // Mahsulot sahifasini import qilish
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router komponentlarini import qilish
import Korzinka from './Componentis/Korzinka';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Section />
            <Wrap />
            <Gallery />
            <Body />
            <Enter />
            <Sidebar />
           
          </>} />
          <Route path="/productdetails/:id" element={<ProductDetails/>} />
          <Route path="/korzinka" element={<Korzinka/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
