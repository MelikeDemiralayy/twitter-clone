import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import './assets/css/tailwind.css';
// Tek bir componentten render oluyor. Single page application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Güvenlik kontrolü için 2 kez render eder.
  <React.StrictMode> 
    <RouterProvider router={routes}/>
   
  </React.StrictMode>,
)
