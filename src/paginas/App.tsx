import './App.css';
import React, { useEffect, useState } from 'react';
import logo from "/imagens/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <main>
      <section className="titulop2">
        <img src={logo} alt=""></img><h1>O que você deseja fazer?</h1>
      </section>
      <section className = "botao_pag2">
      <button>
        <h1>sacar</h1>
      </button>
      <button>
        <h1>depositar</h1>
      </button>
      <button>
        <h1>trasações</h1>
      </button>
      </section>
      <section></section>
    </main>
  )
}
  


export default App