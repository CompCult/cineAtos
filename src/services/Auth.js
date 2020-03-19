export const TOKEN_KEY = "@airbnb-Token"
export const ID = 'id'
export const GESTOR = false
export const PROFESSORTEMPERMISSAO = false

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const getId = () => localStorage.getItem(ID)
export const getIsGestor = () => {
  if (localStorage.getItem(GESTOR) === 'true') {
    return true
  }
  return false
}

export const getIsPermissaoProfessor = () => {
  if (sessionStorage.getItem(PROFESSORTEMPERMISSAO) === 'true') {
    return true
  }
  return false
}

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const id = id => {
  localStorage.setItem(ID, id);
}
export const logout = () => {
  localStorage.clear();
  sessionStorage.clear()
}

export const gestor = (value) => {
  localStorage.setItem(GESTOR, value)
}

export const permissaoProfessor = (value) => {
  sessionStorage.setItem(PROFESSORTEMPERMISSAO, value)
}