import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { ExitPointContextProvider } from './context/ExitPointContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ExitPointContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </ExitPointContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
