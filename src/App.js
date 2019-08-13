import React from 'react'
import './App.css'
import Menu from './menu/NavigationMenu'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu/>   
      </div>
    </Provider>
  )
}

export default App
