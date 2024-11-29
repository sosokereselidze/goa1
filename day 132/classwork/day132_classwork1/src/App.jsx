import React from 'react';
import { LanguageProvider } from './LanguageContext';
import ComponentOne from './components/FirstComponent';
import ComponentTwo from './components/SecondComponent';
import LanguageSwitch from './components/LanguageSwitch';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <h1>Language Toggle App</h1>
        <LanguageSwitch />
        <ComponentOne />
        <ComponentTwo />
      </div>
    </LanguageProvider>
  );
}

export default App;