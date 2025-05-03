import "./Pag5.css";
import React, { useEffect, useState } from "react";
import logo from "/imagens/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Pag5() {
  return (
    <main>
      <section className="titulop2">
        <img src={logo} alt="Logo do sistema" />
      </section>
      <section className="historico">
        <h1>Histórico de Transações</h1>
      </section>
      <section className="posts">
        <p>
          <div>saque</div>
          <h2>dsadaaadadsdaadasddasdadadada</h2>
        </p>
      </section>
      <section className="posts">
        <p>
          <div>saque</div>
          <h2>dsadaaadadsdaadasddasdadadada</h2>
        </p>
      </section>
      <Link to="/telainicial">
        <button id="voltar">Voltar</button>
      </Link>
    </main>
  );
}

export default Pag5;
