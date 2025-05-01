
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.css'

// Find the root element
const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Failed to find root element with id "root"')
} else {
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
}
