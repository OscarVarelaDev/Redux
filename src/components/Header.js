import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <div className='container'>
        <h1 style={{color:"white"}}>
        <Link to={'/'} className={"text-ligth"}style={{color:"white"}}> CRUD - REACT REDUX, REST API & AXIOS</Link>
        </h1>
      </div>
      <Link className='btn btn-danger nuevo-post d-block d-md-inline-block'
        to={'/productos/nuevo'}>Agregar Productos &#43;</Link>
    </nav>
 
  )
}

export default Header