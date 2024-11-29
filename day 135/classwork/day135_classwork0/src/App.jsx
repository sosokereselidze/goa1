import React, { createContext, useContext } from "react";
import './App.css';

const ThemeContext = createContext();

const Profile = ({ firstName, lastName, email, password }) => {
  const theme = useContext(ThemeContext);

  const profileStyle = {
    backgroundColor: theme.background,
    color: theme.color,
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  return (
    <div style={profileStyle}>
      <h2>Profile</h2>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
    </div>
  );
};


function App() {
  
  const lightTheme = {
    background: '#f9f9f9',
    color: '#333',
  };

  const darkTheme = {
    background: '#333',
    color: '#f9f9f9',
  };

  return (
    <div className="App">
      {}
      <ThemeContext.Provider value={lightTheme}>
        <Profile 
          firstName="soso"
          lastName="kereselidze"
          email="soso.kereselidze1@gmail.com"
          password="sosokereselidze123"
        />
      </ThemeContext.Provider>

      {}
      <ThemeContext.Provider value={darkTheme}>
        <Profile 
          firstName="goal"
          lastName="orientadze"
          email="goal.orientadze@gmail.com"
          password="goagoa123"
        />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;