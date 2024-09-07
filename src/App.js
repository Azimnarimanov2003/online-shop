
import './App.css';
import Body from './Componentis/Body';
import Enter from './Componentis/Enter';
import Footer from './Componentis/Footer';
import Gallery from './Componentis/Gallery';
import Header from './Componentis/Header';
import Section from './Componentis/Section';
import Sidebar from './Componentis/Sidebar';

import Wrap from './Componentis/Wrap';

function App() {
  return (
    <div className="App">

      <Header />
      <Section />
      <Wrap />
      <Gallery />
      <Body />
      <Enter />
     <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
