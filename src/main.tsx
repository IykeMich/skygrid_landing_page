import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AosWrapper from './components/customComponents/AOSWrapper.tsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <AosWrapper />
        <App />
      </BrowserRouter>  
    </HelmetProvider>
  </React.StrictMode>,
)
