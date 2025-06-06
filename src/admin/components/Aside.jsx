import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
  const [isProductosOpen, setIsProductosOpen] = useState(false)

  const toggleProductos = () => {
    setIsProductosOpen(prev => !prev)
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
            <i className={`fas fa-chevron-${isProductosOpen ? 'up' : 'down'} ms-auto`}></i>
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

        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      </ul>
    </>
  )
}
