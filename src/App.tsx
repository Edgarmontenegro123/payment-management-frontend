import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './components/auth/Login.tsx'
import Register from './components/auth/Register.tsx'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path = '/' element = {<Login/>}/>
            <Route path = '/registro' element = {<Register/>}/>
        </Routes>
    </Router>
  )
}

export default App
