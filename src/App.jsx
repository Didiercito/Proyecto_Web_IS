import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/pages/header/header'
import { Login } from './Pages/Login/Login';
import { Register } from "./Pages/Register/Register";

import './App.css'

function App() {

  return (
    <>

   <BrowserRouter>
         
         <Routes>
           
           <Route path="/" element={<Login />} />
           <Route path="/register" element={<Register/>} />
           <Route path="/header" element={<Header/>}/>
           

         </Routes>
    
     </BrowserRouter>
    </>
  )
}
export default App

