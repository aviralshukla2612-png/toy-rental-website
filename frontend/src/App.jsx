import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import Home from './pages/Home'
import { About } from './pages/About'
import { Games } from './pages/Games'
import { Plans } from './pages/Plans'
import { Franchise } from  './pages/Franchise'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import ProductDetail from './pages/Productdetail'
import Cart from './pages/Cart'
import ThankYou from './pages/Thankyou'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import Inquire from "./pages/Inquire";
import { Table } from './pages/Table'
import { Chart } from './pages/Chart'
import { Dashboard } from './pages/Dashboard'

 const App = () => {

  return (
    <>
  
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/game' element={<Games/>}/>
      <Route path='/plan' element={<Plans/>}/>
      <Route path='/fran' element={<Franchise/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/thankyou" element={<ThankYou/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/inquire" element={<Inquire/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='/chart' element={<Chart/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      </Route>
    </Routes>

    </>
  )
}

export default App