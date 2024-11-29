import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const ComponentOne = () => {
  const { language } = useContext(LanguageContext);

  const text = language === 'en' ? 'this is first component' : 'ეს არის პირველი კომპონენტი';

  return <div>{text}</div>;
};

export default ComponentOne;
