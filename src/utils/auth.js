export const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
}

export const getUserType = () => {
  return localStorage.getItem('tipousuario');
}

export const logout = () => {
  localStorage.removeItem('auth');
  localStorage.removeItem('tipousuario');
}