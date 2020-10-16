import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import '../../assets/global.css'
import './style.css'

function Perfil() {

  const [idUsuario, setIdUsuario] = useState(0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [senha, setSenha] = useState('');

  const update = (id:number) => {
    fetch('http://localhost:5000/api/perfil/' + id, {
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(response => response.json())
    .then(dados => {
      setIdUsuario(dados.idUsuario);
      setIdUsuario(dados.nome);
      setIdUsuario(dados.email);
      setIdUsuario(dados.senha);
      setIdUsuario(dados.tipo);
    })
    .catch(erro => console.error(erro))
  }

  const salvar = () => {
    const form = {
      nome: nome,
      email: email,
      senha: senha,
      senha: senha,
    };

    fetch('http://localhost:5000/api/generos/' + idUsuario, {
      method: 'PUT',
      body:JSON.stringify(form),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(() => {
      setIdGenero(0);
      setGenero('');
      listar()
    })
    .catch(erro => console.error(erro))
  }

  return (
    <div className="Perfil">
      <Header description="Edite seu perfil"/>
      <div className="centro">
        <div className="perfil">
          <h1>Perfil</h1>
          <Input type="text" label="Nome" name="nome"/>
          <Input type="email" label="E-mail" name="email"/>
            <label>Permissão</label> 
            <br/>
            <select id="permissao">
                <option value="" disabled selected>Selecione</option>
                <option value="adm">Administrador</option>
                <option value="usuario">Usuário</option>
            </select>
          <Input type="password" label="Senha" name="senha"/>
          <Button value="Enviar"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Perfil;