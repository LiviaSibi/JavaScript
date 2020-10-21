import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import Perfil from './pages/Perfil/index';
import Filmes from './pages/Filmes/index';
import Genero from './pages/Genero/index';
import ListarFilmes from './pages/ListarFilmes/index';
import { parseJwt } from './services/auth';

function Routers() {

  const RotaPrivadaComum = ({Component, ...rest}:any) => (
    <Route render={props => 
      localStorage.getItem('token-filmes') !== null && parseJwt().role === 'Comum'? (
      <Component {...props}/>) : (<Redirect to={{pathname: "/login"}}/>)
    }/>
  )

  const RotaPrivadaAdm = ({Component, ...rest}:any) => (
    <Route render={props => 
      localStorage.getItem('token-filmes') !== null && parseJwt().role === 'Administrador'? (
      <Component {...props}/>) : (<Redirect to={{pathname: "/login"}}/>)
    }/>
  )

  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/cadastro" component={Cadastro}/>

      <RotaPrivadaAdm path="/perfil" Component={Perfil}/>
      <RotaPrivadaAdm path="/filmes" Component={Filmes}/>
      <RotaPrivadaAdm path="/genero" Component={Genero}/>

      <RotaPrivadaComum path="/listar-filmes" Component={ListarFilmes}/>
    </BrowserRouter>
  );
}

export default Routers;