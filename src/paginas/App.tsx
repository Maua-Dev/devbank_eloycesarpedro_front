import './App.css';
import React, { useEffect, useState } from 'react';
import logo from "/imagens/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  //Definindo o tipo inicial do valor inserido na caixa de texto
  const[input, setInput] = useState<string>('');

  //Essa função armazena o valor inserido no input no parâmetro "e"
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }
  
  //validação da URL da API
  function validaURL(){
    return input.includes("https");
  }
  //declaração da variável mensagemErro
  let mensagemErro;

  //esse desvio condicional serve para detectarmos se o usuário está inserindo uma URL de fato
  if (input.length > 0 && !validaURL()) {
    mensagemErro = <span className='color: rgb(255, 0, 0)'>URL inválida</span>;
  }

  return (
    <main className='background-color: rgb(255, 0, 0) h-screen w-full flex flex-col items-center justify-center gap-4 '>
      <div className= 'titulo'> <img src={logo} width={877} height={165} alt=""/> </div> 
          <div>
            <input 
            className = "caixaAPI" 
            type = "string" 
            placeholder='Coloque o Endpoint da Sua API'
            //a função abaixo diz para o React que essa função deve ser chamada toda vez que o input mudar
            onChange={handleChange}
            />
            {mensagemErro}
          </div>
    </main>
  )
}
  


export default;