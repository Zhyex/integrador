import './App.css'
import { Route, Routes,Navigate } from 'react-router-dom'
import { useState } from 'react'
import AboutPage from './pages/AboutPage'
import BooksDetailsPage from './pages/BooksDetailsPage'
import BooksPage from './pages/BooksPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './admin/pages/DashboardPage'
import { isAuthenticated, getUserType } from './utils/auth';
import CreateProduct from './admin/components/CreateProduct'
import ProductList from './admin/components/ProductList'

function App() {
  let [isAuthState,setAuth] = useState(localStorage.getItem('auth'=='true'))
  let [tipoUsuario, setTipoUsuario ] = useState(localStorage.getItem('tipousuario') || '')
  

  let handleAuth = ()=>{
    setAuth(true);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Create" element={<CreateProduct/>}/>
        <Route path="/List" element={<ProductList/>}/>
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Books" element={<BooksPage/>} />
        <Route path="/Books/:codlibro" element={<BooksDetailsPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
        <Route path='/Login' element={isAuthenticated() ? getUserType() === 'admin' ? <Navigate to="/Dashboard" /> : <Navigate to="/" /> : <LoginPage onLogin={handleAuth}/> } />
        <Route path='/Register' element={isAuthenticated() ? getUserType() === 'admin' ? <Navigate to="/Dashboard" /> : <Navigate to="/" /> : <RegisterPage onLogin={handleAuth} /> } />
        <Route path='/Dashboard' element={isAuthenticated() && getUserType() === 'admin' ? <DashboardPage /> : <Navigate to="/Login" />}/>
      </Routes>
      {/* <Routes>
        <Route path='/Dashboard' element={isAuthenticated() && getUserType() === 'admin' ? <DashboardPage /> : <Navigate to="/Login" />}/>
      </Routes> */}
    </>
  )
}

export default App
