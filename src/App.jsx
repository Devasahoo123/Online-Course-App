import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'

import Nav from './Components/NavBar/Nav'
import LoginPage from './Components/NavBar/LoginPage'
import Home from './Components/home/Home'
import Teacher from './Components/Teacher/Teacher'
import Course from './Components/Courses/Course'
import Contact from './Components/ContactUs/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Nav/>
      <Routes>
        <Route  path='/' Component={Home}/>
        <Route  path='/teacher' Component={Teacher}/>
        <Route  path='/courses' Component={Course}/>
        <Route  path='/contact' Component={Contact}/>
        
        <Route  path='/login' Component={LoginPage}/>
        
      
      </Routes>
      
    </>
  )
}

export default App
