import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:id" element={<Blog />}/>
      <Route Path="/admin" element={<Layout/>}/>
        <Route index element={<Dashboard/>}/>
        <Route path='addBlog' element={<AddBlog/>} />
        <Route path='listBlog' element={<ListBlog/>} />
        <Route path='Comments' element={<Comments/>} />
    </Routes>
    </div>
  )
}

export default App