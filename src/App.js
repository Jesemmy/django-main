import React from 'react'

// import logo from "./asset/logo.svg"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './components/Login'
import NotFound from './NotFound'
import Updateuser from './pages/Updateuser'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
   <BrowserRouter>
   
    <Navbar/>

    <Routes>
      < Route path="/" element={<Home/>}/>
      < Route path="/signup" element={<Signup/>}/>
      < Route path="/login" element={<Login/>}/>
      <Route path="/update" element={<Updateuser/>}></Route>
      < Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
    </div>
    
  )
}

export default App