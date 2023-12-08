import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/about" element={<AboutUsPage/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
