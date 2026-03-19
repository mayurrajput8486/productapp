import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
    </div>
  )
}

export default App