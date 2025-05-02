import './Pag2.css';
import React, { useEffect, useState } from 'react';
import logo from "/imagens/logo.png";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';  


function Pag2() {
  return (
    <main>
      <section className="titulop2">
        <img src={logo} alt=""></img><h1>O que você deseja fazer?</h1>
      </section>
    </main>
  )
} 
    <BrowserRouter>
      <div>
        <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
            <li><Link to="/">Tela inicial</Link></li>
            <li><Link to="/Depostio">Deposito</Link></li>
            <li><Link to="/Saque">Saque</Link></li>
            <li><Link to="/Transições">Saque</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Pag2/>} />
          <Route path="/Deposito" element={<Pag3/>} />
          <Route path="/Saque" element={<Pag4/>} />
          <Route path="/Transações" element={<Pag5/>} />
        </Routes>
      </div>
    </BrowserRouter>


export default Pag2