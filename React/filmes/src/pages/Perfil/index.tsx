import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/global.css'
import './style.css'

function Perfil() {
  return (
    <div className="Perfil">
      <Header description="Seu Perfil"/>
      <div className="centro">
        <div className="perfil">
          <h1>Seu Perfil</h1>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Perfil;