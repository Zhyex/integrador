import './App.css'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import BooksDetailsPage from './pages/BooksDetailsPage'
import BooksPage from './pages/BooksPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Books" element={<BooksPage/>} />
        <Route path="/Books/:id" element={<BooksDetailsPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/Register' element={<RegisterPage/>} />
      </Routes>
    </>
  )
}

export default App
