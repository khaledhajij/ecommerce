import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './Components/Navbar'
import { sayHello } from './features/products/productsSlice'

function App() {
  const dispatch = useDispatch()
  dispatch(sayHello())
  return (
    <div className="App">
      <Navbar/>
    </div>
  )
}

export default App
