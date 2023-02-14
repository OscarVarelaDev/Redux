import Header from "./components/Header";
import { Fragment } from "react";
import './index.css';
import Productos from "./components/Productos"
import NuevoProducto from "./components/NuevoProducto"
import EditarProducto from "./components/EditarProducto"
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {

  const router = (
    <Provider  store={store}>
      <BrowserRouter>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/productos/nuevo" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProducto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );


  return (
    router
  );
}

export default App;
