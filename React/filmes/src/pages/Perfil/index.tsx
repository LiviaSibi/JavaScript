import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import '../../assets/global.css'
import './style.css'

function Perfil() {

  const [idPerfil, setIdPerfil] = useState(0);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [senha, setSenha] = useState('');

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