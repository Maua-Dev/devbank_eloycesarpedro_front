import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import  Pag1  from './paginas/Pagina1/Pag1';

interface UserData {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
}

