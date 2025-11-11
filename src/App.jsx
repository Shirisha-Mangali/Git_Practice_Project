import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <h1>Daily Status</h1>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App;
