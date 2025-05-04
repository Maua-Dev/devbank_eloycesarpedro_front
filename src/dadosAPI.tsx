let apiUrl = localStorage.getItem("apiUrl") || "";

export const setApiUrl = (url:string) => {
    apiUrl = url;
    localStorage.setItem("apiUrl",url)
}

export const getApiUrl = async () => {
    return await apiUrl;
};

export const fetchUserData = async (): Promise<{
    name: string;
    agency: string;
    account: string;
    current_balance: number;
} | null> => {
    if (!apiUrl) return null;
    
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch(error) {
        console.error("Dados não encontrados:", error);
        return null;
    }
}

