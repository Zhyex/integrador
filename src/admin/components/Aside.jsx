import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Aside() {
  const [isProductosOpen, setIsProductosOpen] = useState(false)
  const navigate = useNavigate()

  const toggleProductos = () => {
    setIsProductosOpen(prev => !prev)
  }

  const handleLogout = () => {
    if (window.confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      // Limpiar localStorage usando la misma lógica de tu App
      localStorage.removeItem('auth');
      localStorage.removeItem('tipousuario');
      
      // Forzar redirección y recarga de la página
      window.location.href = '/';
    }
  }

  return (
    <>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        {/* Sidebar - Brand */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/Dashboard">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Inventario</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/Dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Modulos</div>

        {/* Nav Item - Productos con colapsable controlado */}
        <li className={`nav-item ${isProductosOpen ? 'show' : ''}`}>
          <button
            type="button"
            className="nav-link collapsed btn btn-link d-flex align-items-center"
            onClick={toggleProductos}
            aria-expanded={isProductosOpen}
            aria-controls="collapseProductos"
            style={{ width: '100%', textAlign: 'left', color: 'inherit', padding: '0.75rem 1rem', border: 'none', background: 'none' }}
          >
            <i className="fas fa-fw fa-cog"></i>
            <span className="ms-2">Productos</span>
          </button>
          <div
            id="collapseProductos"
            className={`collapse ${isProductosOpen ? 'show' : ''}`}
            aria-labelledby="headingProductos"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to="/List">Ver Productos</Link>
              <Link className="collapse-item" to="/Create">Crear Productos</Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        {/* Logout Button */}
        <li className="nav-item">
          <button
            type="button"
            className="nav-link btn btn-link d-flex align-items-center"
            onClick={handleLogout}
            style={{ width: '100%', textAlign: 'left', color: 'inherit', padding: '0.75rem 1rem', border: 'none', background: 'none' }}
          >
            <i className="fas fa-fw fa-sign-out-alt"></i>
            <span className="ms-2">Cerrar Sesión</span>
          </button>
        </li>
      </ul>
    </>
  )
}