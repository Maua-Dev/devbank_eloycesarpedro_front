import "./Pag22.css";
import React, { useEffect, useState } from "react";
import logo from "/imagens/logo.png";
import { Link } from "react-router-dom";
import { fetchUserData, getApiUrl, setApiUrl, apiUrl } from "../../dadosAPI";

function Pag2() {
  return (
    <main>
      <section className="titulop2">
        <img src={logo} alt="Logo do sistema" />
        <h1>O que você deseja fazer?</h1>
      </section>
      <nav>
        <ul>
          <section className="botao_pag2">
            <Link to="/deposito">
              <button>
                <h1>Depósito</h1>
              </button>
            </Link>
            <Link to="/saque">
              <button>
                <h1>Saque</h1>
              </button>
            </Link>
            <Link to="/transacoes">
              <button>
                <h1>Transações</h1>
              </button>
            </Link>
          </section>
        </ul>
      </nav>
      <Link to="/">
        <button id="voltar">Voltar</button>
      </Link>
    </main>
  );
}

export default Pag2;
