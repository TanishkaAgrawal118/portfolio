import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import ProjectCards from './Components/Project';
import Hire from './Components/Hire';
import { ContactUs } from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Home/>
      <About/>
      <Skills/>
      <ProjectCards/>
      {/* <Hire/> */}
      <ContactUs/>
      <Footer/>
      </BrowserRouter>
    
    </>
  );
}

export default App;
