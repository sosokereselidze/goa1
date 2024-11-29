import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children, initialTheme }) => {
  return (
    <ThemeContext.Provider value={initialTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  const style = {
    backgroundColor: theme.backgroundColor,
    color: theme.color,
    padding: '20px',
    textAlign: 'center',
    margin: '10px',
  };

  return (
    <div style={style}>
      The current theme has a background color of {theme.backgroundColor}
    </div>
  );
};

const App = () => {
  const lightTheme = {
    backgroundColor: 'white',
    color: '#000',
  };

  const darkTheme = {
    backgroundColor: 'black',
    color: '#fff',
  };

  return (
    <div>
      {}
      <ThemeProvider initialTheme={lightTheme}>
        <ThemedComponent />
      </ThemeProvider>

      {}
      <ThemeProvider initialTheme={darkTheme}>
        <ThemedComponent />
      </ThemeProvider>
    </div>
  );
};

export default App;