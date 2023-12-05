import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';
import Contact from "./components/Contact"
import Header from './Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
