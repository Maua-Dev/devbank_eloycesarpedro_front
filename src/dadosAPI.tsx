import Pag1 from "./paginas/Pagina1/Pag1";

export let apiUrl1 = localStorage.getItem("apiUrl1") || "";

export const setApiUrl = (url: string) => {
  apiUrl1 = url;
  localStorage.setItem("apiUrl1", url);
};

export const getApiUrl = () => {
  return apiUrl1;
};

export const fetchUserData = async (): Promise<{
  name: string;
  agency: string;
  account: string;
  current_balance: number;
} | null> => {
  if (!apiUrl1) return null;

  try {
    const response = await fetch(apiUrl1);
    return await response.json();
  } catch (error) {
    console.error("Dados não encontrados:", error);
    return null;
  }
};
