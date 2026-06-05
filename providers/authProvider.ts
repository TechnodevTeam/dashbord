const API_URL = "http://localhost:8080";

export const authProvider = {
  login: () => Promise.resolve(), // inutilisé car login déjà fait ailleurs
  logout: () => { localStorage.removeItem("token"); window.location.href = "http://localhost:3000/admin"; return Promise.resolve(); },
  checkAuth: () => localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};

export default authProvider;