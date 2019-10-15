import React from 'react'
import './App.css'
import Menu from './menu/NavigationMenu'
import { Provider } from 'react-redux'
import store from './store/Index.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu />
      </div>
    </Provider>
  )
}

export default App
