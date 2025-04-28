import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  //Definindo o tipo inicial do valor inserido na caixa de texto
  const[input, setInput] = useState<string>('');

  return (
    <main className='h-screen w-full flex flex-col items-center justify-center gap-4'>
      <h1>DevBank</h1>
        <div>
          <input 
          className = "caixaAPI" 
          type = "string" 
          placeholder='Coloque o Endpoint da Sua API'
          onChange={(event) => {
            //o algoritmo abaixo tenta transformar aquilo que foi inserido na caixa de texto
            //em uma url, caso nao consiga, o programa vai apagar todo o conteúdo escrito na
            //caixa de texto
            try {
              const url = new URL(event.target.value); // esse event.target.value é o "valor" do que for inserido na caixa do input
              setInput(url);
            } catch (error) {
              // Se não for uma URL válida, mantém vazio
              setInput(''); 
            }
          }}
          />
        </div>
    </main>
  )
}

export default App
