
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.css'

// Create root element only once when the module loads
const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Failed to find root element with id "root"')
} else {
  try {
    const root = createRoot(rootElement)
    
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
    console.error('Failed to render React application:', error)
  }
}
