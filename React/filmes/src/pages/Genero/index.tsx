import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import theater from '../../assets/images/theater.png';
import '../../assets/global.css'
import './style.css'

function Genero() {

  const [idGenero, setIdGenero] = useState(0);
  const [genero, setGenero] = useState('');
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    listar();
  }, [])

  return (
    <div className="Genero">
      <Header description="Cadastre os gêneros dos filmes"/>
      <div className="centro">
        <div className="genero">
          <h1>Generos</h1>
          <img className="theater" src={theater} alt="generos"/>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Genero;