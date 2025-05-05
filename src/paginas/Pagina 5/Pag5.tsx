import "./Pag5.css";
import React, { useEffect, useState } from "react";
import logo from "/imagens/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { API } from "../Pagina2/Pag2";
import axios from "axios";

type entrada_API = {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
};

type history = {
  type: string;
  value: number;
  current_balance: number;
  timestamp: number;
};

function Pag5() {
  const [userData, setUserData] = useState<entrada_API | null>(null);
  const [userHistory, setUserHistory] = useState<history[] | null>(null);

  async function getDados(api: string): Promise<entrada_API> {
    const response = await fetch(api);
    console.log(response);
    return (await response.json()) as entrada_API;
  }

  async function getHistory(api: string): Promise<history[]> {
    const response1 = await axios.get(api);
    console.log("request get history", response1.data);
    return response1.data;
  }

  async function fetchHistory() {
    let apiUrl = API + "history";
    let allhistory = await getHistory(apiUrl);
    console.log("all transactions", allhistory.all_transactions);
    setUserHistory(allhistory.all_transactions);
  }

  useEffect(() => {
    let apiUrl = API;
    getDados(apiUrl).then((data) => setUserData(data));
    fetchHistory();
  }, []);

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
        {userHistory != undefined &&
          userHistory.map((transaction, index) => (
            <div key={index}>
              <h1>
                Tipo de transação: {transaction.type} / Conta: {" "}
                {transaction.current_balance} / Horário: {transaction.timestamp}
              </h1>
            </div>
          ))}
      </section>
      <section className="posts">
        <div>
          <div>saque</div>
          <h2>dsadaaadadsdaadasddasdadadada</h2>
        </div>
      </section>
      <Link to="/telainicial">
        <button id="voltar">Voltar</button>
      </Link>
    </main>
  );
}

export default Pag5;
