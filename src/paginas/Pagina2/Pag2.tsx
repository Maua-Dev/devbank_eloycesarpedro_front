import './Pag22.css';
import React, { useEffect, useState } from 'react';
import logo from "/imagens/logo.png";
import {Link} from 'react-router-dom';  

function Pag2() {
  return (
    <main>
      
      <section className="titulop2">
        <img src={logo} alt="Logo do sistema" />
        <h1>O que você deseja fazer?</h1>
      </section>

      <nav> 
        <ul>
          <li><Link to="/deposito" className="deposito">Depósito</Link></li>
          <li><Link to="/saque" className="saque">Saque</Link></li>
          <li><Link to="/transacoes" className="transacoes">Transações</Link></li>
        </ul>
      </nav>
    </main>
  );
}

export default Pag2