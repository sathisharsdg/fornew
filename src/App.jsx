import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Updateuser from './Pages/Updateuser'
function App() {
  return (
    <div>
       <BrowserRouter>
           
         <Routes>
             <Route path='/' exact element={<Home/> }></Route>
             <Route path='/users' element={<Users/>}></Route>
             <Route path='/update' element={<Updateuser/>}></Route>
         </Routes>
       
       </BrowserRouter>
    </div>
  )
}

export default App
