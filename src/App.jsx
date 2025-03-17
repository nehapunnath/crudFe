import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dash' element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App
