import React from 'react'
import { crearNuevoProductoAction } from '../actions/productoActions'
import { useDispatch, useSelector } from 'react-redux'



const NuevoProducto = () => {

  const dispatch = useDispatch();
  const aggregarProducto = () => dispatch(crearNuevoProductoAction)

  
  aggregarProducto()


const submitNuevoProducto = (e) => {
  e.preventDefault()

}




return (

  <div className='row justify-content-center'>
    <div className='col-md-8'>
      <div className='card'>
        <div className='card-body'>
          <h2 className='text-center mb-4 font-weight-bold'>
            Agregar un nuevo producto

          </h2>
          <form onSubmit={submitNuevoProducto}>
            <div className='form-group'>
              <label>Nombre Producto</label>
              <input
                type='text'
                className='form-control'
                placeholder='Nombre Producto'
                name='nombre'
              ></input>

            </div>
            <div className='form-group'>
              <label>Precio Producto</label>
              <input
                type='number'
                className='form-control'
                placeholder='Precio Producto'
                name='precio'
              ></input>

            </div>

          </form>
          <button
            type='submit'
            className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
          > Agregar</button>

        </div>

      </div>
    </div>

  </div>

)
}

export default NuevoProducto