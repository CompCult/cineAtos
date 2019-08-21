import React from 'react'

function App() {

  var parametrosDaUrl = window.location.pathname.split("trackId=")[1];
  console.log(parametrosDaUrl)

  return (
    <div>
        Teste {parametrosDaUrl} fg
        
    </div>
  )
}

export default App
