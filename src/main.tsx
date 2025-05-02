
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.css'

// Use an IIFE to avoid any potential issues with global scope
(function() {
  try {
    // Find the root element
    const rootElement = document.getElementById('root')

    if (!rootElement) {
      console.error('Failed to find root element with id "root"')
      return
    }

    // Create root and render
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
    console.error('Error initializing React application:', error)
  }
})()
