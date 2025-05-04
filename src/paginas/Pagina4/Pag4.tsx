import './Pag44.css';
import React, { useEffect, useState } from 'react';
import logo from "/imagens/logo.png";
import {Link} from 'react-router-dom'; 
import {API} from '../Pagina2/Pag2';

type entrada_API = {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
};


function Pag4() {

  const [click, setClick] = useState<boolean>(false);
  const[userData, setUserData] = useState<entrada_API | null>(null);

    async function getDados(api: string): Promise<entrada_API> {
      const response = await fetch(api);
      return (await response.json()) as entrada_API;
    }

  useEffect(() => {
    const apiUrl =
      API;
    getDados(apiUrl).then((data) => setUserData(data));
  }, []);

  return (
    <main>
      <section className="titulop2">
        <img src={logo} alt=""></img>
        <div id="c">
          <section id="a">
            <h2>Nome: {userData?.name} </h2>
            <h2>Agência: {userData?.agency} </h2>
            <h2>Conta: {userData?.account} </h2>
          </section>
        </div>
      </section>
      <section className="displaypg3">
        <div className="saldo">
          <h1 className="saldo">Saldo atual: R$ {userData?.current_balance}</h1>
        </div>
        <h1>Quantidade Retirada: R$</h1>
      </section>
      <section className="botao_pag3">
        <h2>Selecione as cédulas e a quantidade que você deseja</h2>
        <button>R$2</button>
        <button>R$5</button>
        <button>R$10</button>
        <button>R$20</button>
      </section>
      <section className="quantidade">
        <h1>quantidade: </h1>
        <button>+</button>
        <h1>x</h1>
        <button>-</button>
        <h1>quantidade: </h1>
        <button>+</button>
        <h1>x</h1>
        <button>-</button>
        <h1>quantidade: </h1>
        <button>+</button>
        <h1>x</h1>
        <button>-</button>
        <h1>quantidade: </h1>
        <button>+</button>
        <h1>x</h1>
        <button>-</button>
      </section>
      <section className="botao_pag3"></section>
      <section className="botao_pag3">
        <div id="linha2">
          <button id="segundalinha">R$50</button>
          <button id="segundalinha">R$100</button>
          <button id="segundalinha">R$200</button>
        </div>
      </section>
      <section>
        <div className="quantidade" id="quantidadebaixo">
          <h1>quantidade: </h1>
          <button>+</button>
          <h1>x</h1>
          <button>-</button>
          <h1>quantidade: </h1>
          <button>+</button>
          <h1>x</h1>
          <button>-</button>
          <h1>quantidade: </h1>
          <button>+</button>
          <h1>x</h1>
          <button>-</button>
        </div>
      </section>
      <section className="dv">
        <Link to="/telainicial">
          <button>Voltar</button>
        </Link>
        <button>Retirar</button>
      </section>
    </main>
  );
}


export default Pag4