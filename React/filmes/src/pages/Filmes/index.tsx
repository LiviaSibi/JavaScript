import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/global.css'
import './style.css'

function Filmes() {
  return (
    <div className="Filmes">
      <Header description="Cadastre os Filmes"/>
      <div className="centro">
        <div className="perfil">
          <h1>Filmes</h1>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Filmes;