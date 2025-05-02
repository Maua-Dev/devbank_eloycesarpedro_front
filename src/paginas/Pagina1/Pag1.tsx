import './Pag1.css';
import React, {useEffect, useState } from 'react';
import logo from "/imagens/logo.png";


type entrada_API = {
  name: string;
  agency: string;
  account: string;
  current_balance: Float64Array;
};

function Pag1() {
  const[input, setInput] = useState<string>('');
  const [enterPressed, setEnterPressed] = useState<0 | 1>(0);
  const [response, setResponse] = useState<entrada_API>();

  //Essa função armazena o valor inserido no input no parâmetro "e"
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  //validação da URL da API
  function validaURL(){
    KeyPressed
    return input.includes("https://");
  }
  
  //Função para detectar se a tecla enter foi pressionada ou não
  function KeyPressed (e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key == 'Enter'){
      setEnterPressed(1);
    }
  }

  // //declaração da variável mensagemErro
  // let mensagemErro;
  // //esse desvio condicional serve para detectarmos se o usuário está inserindo uma URL de fato
  // if (input.length > 0 && !validaURL() && enterPressed) {
  //   mensagemErro = <span style ={{ color: 'rgb(255, 0, 0)', fontSize: '35px'}}>URL inválida</span>;
  // }
  
  
  //Fazendo a rota get:
  async function getDados(api:string): Promise<entrada_API> {
    const response = await fetch(api)
    
    return (await response.json()) as entrada_API;
  }

  return (
    <main className='background-color: rgb(255, 0, 0) h-screen w-full flex flex-col items-center justify-center gap-4 '>
      <div className= 'titulo'> <img src={logo} width={877} height={165} alt=""/> </div> 
          <div>
            <input 
              className = "caixaAPI" 
              type = "string" 
              id = "inputID"
              placeholder='Coloque o Endpoint da Sua API'
              //a função abaixo diz para o React que essa função deve ser chamada toda vez que o input mudar
              onChange={handleChange}
              // onKeyDown = {KeyPressed}
              onKeyDown={async () => {
                const res = await getDados(input);
                setResponse (res);
            }}
            />                             
          </div>
          {(!response || !validaURL()) &&(
              <span style ={{ color: 'rgb(255, 0, 0)', fontSize: '35px'}}>URL inválida</span>
          )}
          {/* {response &&(
            
          )} */}
    </main>
  )
}
  


export default Pag1