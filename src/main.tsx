
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.css'

// Using a different approach to initialize React
window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('Failed to find root element with id "root"')
    return
  }
  
  try {
    // Create root with explicit typing
    const root = ReactDOM.createRoot(rootElement)
    
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Error rendering React application:', error)
  }
})
