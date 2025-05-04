import "./Pag5.css";
import React, { useEffect, useState } from "react";
import logo from "/imagens/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { API } from "../Pagina2/Pag2";

type entrada_API = {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
};

type history = {
  type: string
  value: number
  current_balance: number
  timestap: number
}

function Pag5() {
  const[userData, setUserData] = useState<entrada_API | null>(null);

    async function getDados(api: string): Promise<entrada_API> {
      const response = await fetch(api);
      console.log(response)
      return (await response.json()) as entrada_API;
    }

    async function getHistory(api: string): Promise<history> {
      const response1 = await fetch(api);
        return (await response1.json()) as history; 
      console.log(response1);
    }

  useState(() => {
    const apiUrl = API;
  getHistory(apiUrl).then((data) => setUserHistory(data));
  },);

  useEffect(() => {
    const apiUrl =
      API;
  getDados(apiUrl).then((data) => setUserData(data));
  }, []);

  const [userHistory, setUserHistory] = useState<history | null>(null);



  return (
    <main>
      <section className="titulop2">
        <img src={logo} alt="Logo do sistema" />
        <div id="c">
          <section id="a">
            <h2>Nome: {userData?.name} </h2>
            <h2>Agência: {userData?.agency} </h2>
            <h2>Conta: {userData?.account} </h2>
          </section>
        </div>
      </section>
      <section className="historico">
        <h1>Histórico de Transações</h1>
      </section>
      <section className="posts">
        <p>
          <div>{userHistory?.type}</div>
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
