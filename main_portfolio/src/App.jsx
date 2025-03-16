import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';

// import Header from "./components/header/Header";
// import About from "./components/about/About";
// const scrollToSection = (id) => {
//   const section = document.getElementById(id);
//   if (section) {
//       window.scrollTo({
//           top: section.offsetTop - 60,
//           behavior: "smooth",
//       });
//   }
// };

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App