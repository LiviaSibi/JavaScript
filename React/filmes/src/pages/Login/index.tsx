import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css'

function Login() {
  return (
    <div>
      <Header description="Faça o Login e acesse a coletânea"/>
      <div className="centro">
        <div className="login">
          <h1>Login</h1>
          <Input type="email" label="E-mail" name="email"/>
          <Input type="password" label="Senha" name="senha"/>
          <Button value="Enviar"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;