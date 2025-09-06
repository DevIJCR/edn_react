import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Inicio from './assets/pages/Inicio.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/edn_dev'>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
    </Routes>
  </BrowserRouter>
)
