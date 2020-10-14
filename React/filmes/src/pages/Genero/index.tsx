import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/global.css'
import './style.css'

function Genero() {
  return (
    <div className="Genero">
      <Header description="Cadastre os Generos"/>
      <div className="centro">
        <div className="perfil">
          <h1>Generos</h1>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Genero;