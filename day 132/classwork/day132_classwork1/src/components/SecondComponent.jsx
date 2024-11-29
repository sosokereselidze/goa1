import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const ComponentTwo = () => {
  const { language } = useContext(LanguageContext);

  const text = language === 'en' ? 'this is second component.' : 'ეს არის მეორე კომპონენტი.';

  return <div>{text}</div>;
};

export default ComponentTwo;
