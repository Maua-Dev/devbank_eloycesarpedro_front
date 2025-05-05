import "./Pag22.css";
import { useEffect, useState } from "react";
import logo from "/imagens/logo.png";
import { Link } from "react-router-dom";

export const API =
  "https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/";

type entrada_API = {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
};

function Pag2() {
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
        <img src={logo} alt="Logo do sistema" />
        <h1>O que você deseja fazer?</h1>
        <div>
          <section id="a">
            <h2>Nome: {userData?.name} </h2>
            <h2>Agência: {userData?.agency} </h2>
            <h2>Conta: {userData?.account} </h2>
          </section>
        </div>
      </section>
      <section id="b">
        <h1>Saldo atual: R${userData?.current_balance}</h1>
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

