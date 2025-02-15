
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import History from './pages/History'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  

  return (
    <>
    <ToastContainer  position="top-right" autoClose={2000}  theme="colored"  />
    
    <Header/>

    <Routes>
      <Route element={ <Landing/>} path='/'/>
      <Route element={ <Home/>} path='/home'/>
      <Route element={ <History/>} path='/history'/>
   

    </Routes>

    <Footer/>
     
    </>
  )
}

export default App
