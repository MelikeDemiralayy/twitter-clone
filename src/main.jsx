import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import './assets/css/tailwind.css';
import { Provider } from "react-redux";
import store from "./store";
// Tek bir componentten render oluyor. Single page application
ReactDOM.createRoot(document.getElementById("root")).render(
  // Güvenlik kontrolü için 2 kez render eder.
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
