import React, {useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Pag1 from './paginas/Pagina1/Pag1';
import Pag2 from './paginas/Pagina2/Pag2';
import Pag3 from './paginas/Pagina3/Pag3';
import Pag4 from './paginas/Pagina4/Pag4';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pag1 />} />
        <Route path="/telainicial" element={<Pag2 />} /> 
        <Route path="/deposito" element={<Pag3 />} />     
        <Route path="/saque" element={<Pag4 />} />       
      </Routes>
    </BrowserRouter>
  );
}