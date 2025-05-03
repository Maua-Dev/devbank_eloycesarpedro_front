import './Pag11.css';
import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from "/imagens/logo.png";
import API from '../../dadosAPI';

type entrada_API = {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
};

 function Pag1() {
  const[input, setInput] = useState<string>('');
  const [response, setResponse] = useState<entrada_API>();
  const navigate = useNavigate();


  //Essa função armazena o valor inserido no input no parâmetro "e"
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  //validação da URL da API
  function validaURL(): boolean{
    return input.includes("https://");
  }
  
  //Fazendo a rota get:
  async function getDados(api:string): Promise<entrada_API> {
    const response = await fetch(api)
    
    return (await response.json()) as entrada_API;
  }

  useEffect(() => {
    if (response && validaURL()) {
      navigate('/telainicial');
    }
  }, [response]) ;  

  



  return (
    <main id="margem">
      <div className= 'titulo'> <img src={logo} width={877} height={165} alt=""/> </div> 
          <div>
            <input 
              className = "caixaAPI" 
              type = "string" 
              id = "inputID"
              placeholder='Coloque o Endpoint da Sua API'
              //a função abaixo diz para o React que essa função deve ser chamada toda vez que o input mudar
              onChange={handleChange}
              onKeyDown={async (e) => {
                if (e.key === 'Enter') {
                  const res = await getDados(input);
                  setResponse(res);
                }
              }}
            />                             
          </div>
          {((!response || !validaURL()) && input.length>0) &&(
              <span style ={{ color: 'rgb(255, 0, 0)', fontSize: '35px'}}>URL inválida</span>
          )}
    </main>
  )
}

export default Pag1

