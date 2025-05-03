import './Pag11.css';
import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from "/imagens/logo.png";

type entrada_API = {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
};

function Pag1() {
  const[input, setInput] = useState<string>('');
  const [response, setResponse] = useState<entrada_API>();
  const [erro, setErro] = useState<boolean>(false);
  const navigate = useNavigate();


  //Essa função armazena o valor inserido no input no parâmetro "e"
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    setErro(false);
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
      navigate('/home');
    }
  }, [response]);


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
                  try{
                    const res = await getDados(input);
                    setResponse(res);
                    const urlValida = validaURL();
                  
                    if ((!res || !urlValida) && input.length>0){
                      setErro(true)
                    }else{
                      setErro(false)
                    }
                  } catch (err) {
                    setErro(true);
                  }
                }
              }}
            />                             
          </div>
          {(erro && input.length> 0)&&(
              <span style ={{ color: 'rgb(255, 0, 0)', fontSize: '35px', flex:1/2}}>URL inválida</span>
          )}
    </main>
  )
}

export default Pag1

