const authProvider = {
  login: async ({ username, password }) => {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Connexion échouée')
    }

    const { token, user } = await response.json()
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return Promise.resolve()
  },

  checkAuth: () => {
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject()
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token')
      return Promise.reject()
    }
    return Promise.resolve()
  },

  getPermissions: () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return Promise.resolve(user.role || 'user')
  },

  getIdentity: () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return Promise.resolve({
      id: user.id,
      fullName: user.email,
    })
  },
}

export default authProvider