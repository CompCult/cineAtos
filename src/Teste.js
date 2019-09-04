import React from 'react'

function App(props) {
  const id = props.match.params.id

  return (
    <div>
        Teste {id} fg
        
    </div>
  )
}

export default App