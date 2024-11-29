import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import ColorChange from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorChange />
  </StrictMode>,
)

