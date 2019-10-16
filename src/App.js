import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/Index.js'
import Routes from './services/Routes'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
