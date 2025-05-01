
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.css'

// Ensure the DOM is fully loaded before mounting React
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('Failed to find the root element')
    return
  }
  
  // Create the root using the stable createRoot API
  const root = ReactDOM.createRoot(rootElement)
  
  // Render the app
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
})
