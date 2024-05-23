import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import './App.css'
import Signup from './components/SignUp'
import Admin from './components/Admin'
import  { AuthProvider } from './components/Auth'
import Login from './components/Login'
import { About } from './components/About'


function App() {
  return (
    <div>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/admin" element={<Admin/>}/>

        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>


      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
