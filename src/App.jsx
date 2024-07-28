import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from '../Routes/PrivateRoute'
import AdminHome from './pages/Admin/AdminHome'
import Blog from './pages/Admin/AdminDashSubPages/Blog'
import CreatePost from './pages/Admin/AdminDashSubPages/CreatePost'
const App = () => {
  return (
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/login' element = {<Login/>}/>
    <Route path = '/admin' element = {<PrivateRoute/>}>
        <Route path = 'home' element = {<AdminHome/>}/>
        <Route path = 'blog' element = {<Blog/>}/>
        <Route path = 'create-post' element = {<CreatePost/>}/>
    </Route>
  </Routes>
  )
}

export default App
