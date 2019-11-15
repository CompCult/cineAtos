export const TOKEN_KEY = "@airbnb-Token"
export const ID = ''
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const getId = () => localStorage.getItem(ID)
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const id = id => {
  localStorage.setItem(ID, id);
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
}