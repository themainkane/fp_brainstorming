import { useState } from 'react'

import './App.css'
import { Map } from './components/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>3D Map</h1>
    <Map/>
    </>
  )
}

export default App
