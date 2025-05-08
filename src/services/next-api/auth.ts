import { apiHandler } from ".."

function saveToken(token: unknown) {
  sessionStorage.setItem('token', String(token))
}
function removeToken() {
  sessionStorage.removeItem('token')
}

export const authService = {
  login: async (payload: Record<string, unknown>) => {
    try {
      const response = await apiHandler.post('/login',payload);

      if(response?.token) {
        saveToken(response?.token);
      }

      return response;
    } catch (error) {
      console.log(error)
      throw error;
    }
  },
  register: async (data: Record<string, unknown>) => {
    try {
      const response = await apiHandler.post('/register',data);

      if(response?.token) {
        saveToken(response?.token);
      }

      return response;
    } catch (error) {
      console.log(error)
      throw error;
    }
  },
  logout: async () => {
    removeToken();
  },
  loggedUser: async () => {
    try {
      const token = await apiHandler.getAuthToken();
      const reqOptions = {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      }
      const response = await apiHandler.get('/logged-user',undefined, reqOptions);
      return response;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
}