import { Response } from './Response';

export const TOKEN_KEY = "authToken";

export const isAuthenticated = (): boolean => {
  const json: any = localStorage.getItem(TOKEN_KEY) || 'null';
  const obj: Response = JSON.parse(json);
  return !!obj;
};

export const getToken = (): Response => {
  const json: any = localStorage.getItem(TOKEN_KEY);
  const obj: Response = JSON.parse(json);
  return obj;
};

export const login = (token: any) => {
  let jsonAux: any = JSON.stringify(token);
  console.log(jsonAux, 'jsonAux')
  localStorage.setItem(TOKEN_KEY, jsonAux);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};  