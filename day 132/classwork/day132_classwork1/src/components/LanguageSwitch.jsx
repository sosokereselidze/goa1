import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          onChange={toggleLanguage} 
          checked={language === 'en'} 
        />
        {language === 'en' ? 'Switch to Georgian' : 'Switch to English'}
      </label>
    </div>
  );
};

export default LanguageSwitch;
