import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css'

function Login() {

  //Demosntração do useState: Declarar 2 variaveis (nesse caso cont (que é a variavel inicial) e setCont (que irá fazer a contagem)) e setar o estado inicial (useState(0))
  //Essa demonstração irá contar o número de cliques de um botão
  const [cont, setCont] = useState(0);

  return (
    <div>
      <Header description="Faça o Login e acesse a coletânea"/>
      <div className="centro">
        <div className="login">
          <h1>Login</h1>
          <Input type="email" label="E-mail" name="email"/>
          <Input type="password" label="Senha" name="senha"/>

          {/* fazer o setCont como uma arrow function que fará algo (nesse caso add +1 ao cont quando for clicado) */}
          <Button onClick={() => setCont(cont + 1)} value="Enviar"/>
          <p>Você clicou {cont} vezes</p>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;