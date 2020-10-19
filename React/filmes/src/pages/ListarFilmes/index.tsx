import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import cinema from '../../assets/images/cinema.png';
import '../../assets/global.css'
import './style.css'

function ListaFilmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    listar();
  }, [])

  const listar = () => {
    fetch('http://localhost:5000/api/filmes',{
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(response => response.json())
    .then(dados => {
      setFilmes(dados);
    })
    .catch(erro => console.error(erro))
  }

  return (
    <div className="Filme">
      <Header description="Lista de Filmes"/>
      <main>
        <h1>Filmes</h1>
        <div className="centro">
          <img className="cinema" src={cinema} alt="filmes"/>
        </div>
        <h2>Lista de Filmes</h2>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Titulo do Filme</td>
              <td>Gênero</td>
            </tr>
          </thead>
          <tbody>
            {
              filmes.map((item:any) => {
                return(
                  <tr key={item.idFilme}>
                    <td>{item.titulo}</td>
                    <td>{item.genero}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </main>
      <Footer/>
    </div>
  );
}

export default ListaFilmes;