import './Pag44.css';
import { useEffect, useState } from "react";
import logo from "/imagens/logo.png";
import { Link } from "react-router-dom";
import { API } from "../Pagina2/Pag2";
import axios from "axios";
import { apiUrl1 } from "../../dadosAPI";

type entrada_API = {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
};

type numero_notas = {
  2: number;
  5: number;
  10: number;
  20: number;
  50: number;
  100: number;
  200: number;
}


function Pag4() {
  const [userData, setUserData] = useState<entrada_API | null>(null);
  const [click, setClick] = useState<boolean>(false);
  const [numeroNotas, setNumeroNotas] = useState<numero_notas>({
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
    100: 0,
    200: 0,
  });

  async function getDados(api: string): Promise<entrada_API> {
    const response = await fetch(api);
    return (await response.json()) as entrada_API;
  }

  useEffect(() => {
    const apiUrl = API;
    getDados(apiUrl).then((data) => setUserData(data));
  }, []);

  function handleClick_mais(nota: keyof numero_notas) {
    setClick(false);
    setNumeroNotas((prev) => ({
      ...prev,
      [nota]: prev[nota] + 1,
    }));
  }

  function handleClick_menos(nota: keyof numero_notas) {
    setClick(false);
    setNumeroNotas((prev) => ({
      ...prev,
      [nota]: Math.max(0, prev[nota] - 1),
    }));
  }

  function calcula_notas() {
    let total =
      2 * numeroNotas[2] +
      5 * numeroNotas[5] +
      10 * numeroNotas[10] +
      20 * numeroNotas[20] +
      50 * numeroNotas[50] +
      100 * numeroNotas[100] +
      200 * numeroNotas[200];
    return total;
  }

  //Fazendo a rota Post:

  interface ApiResponse {
    current_balance: number;
    timestamp: number;
  }

  async function postDadosNotas(dados: numero_notas): Promise<ApiResponse> {
    setClick(true);
    try {
      const response = await axios.post<ApiResponse>(apiUrl1, dados);
      return response.data;
    } catch (error) {
      console.log("Erro encontrado");
      return { current_balance: 0, timestamp: 0 };
    }
  }

  return (
    <main>
      <Link to="/telainicial" className="deposito"></Link>
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
        <h1>Quantidade Depositada: R$ {click && calcula_notas()}</h1>
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
        <button onClick={() => handleClick_mais(2)}>+</button>
        <h1>{numeroNotas[2]}</h1>
        <button onClick={() => handleClick_menos(2)}>-</button>
        <h1>quantidade: </h1>
        <button onClick={() => handleClick_mais(5)}>+</button>
        <h1>{numeroNotas[5]}</h1>
        <button onClick={() => handleClick_menos(5)}>-</button>
        <h1>quantidade: </h1>
        <button onClick={() => handleClick_mais(10)}>+</button>
        <h1>{numeroNotas[10]}</h1>
        <button onClick={() => handleClick_menos(10)}>-</button>
        <h1>quantidade: </h1>
        <button onClick={() => handleClick_mais(20)}>+</button>
        <h1>{numeroNotas[20]}</h1>
        <button onClick={() => handleClick_menos(20)}>-</button>
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
          <button onClick={() => handleClick_mais(50)}>+</button>
          <h1>{numeroNotas[50]}</h1>
          <button onClick={() => handleClick_menos(50)}>-</button>
          <h1>quantidade: </h1>
          <button onClick={() => handleClick_mais(100)}>+</button>
          <h1>{numeroNotas[100]}</h1>
          <button onClick={() => handleClick_menos(100)}>-</button>
          <h1>quantidade: </h1>
          <button onClick={() => handleClick_mais(200)}>+</button>
          <h1>{numeroNotas[200]}</h1>
          <button onClick={() => handleClick_menos(200)}>-</button>
        </div>
      </section>
      <section className="dv">
        <Link to="/telainicial">
          <button>Voltar</button>
        </Link>
        <button onClick={() => postDadosNotas(numeroNotas)}>Sacar</button>
      </section>
    </main>
  );
}


export default Pag4