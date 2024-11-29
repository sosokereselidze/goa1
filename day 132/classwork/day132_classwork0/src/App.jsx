import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AccountProvider } from "./context/AccountContext.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
// import Home from "/components/Home.jsx";
// import Profile from "./components/Profile.jsx";
// import About from "/components/About.jsx";

function App() {
  return (
    <AccountProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AccountProvider>
  );
}

export default App;