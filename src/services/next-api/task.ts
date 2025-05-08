import { apiHandler } from "..";

export const taskService = {
  index: async (params?: Record<string, unknown>) => {
    try {
      const token = await apiHandler.getAuthToken();
      const reqOptions = {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      }
      const response = await apiHandler.get('/task',params,reqOptions);

      return response;
    } catch (error) {
      console.log("task-index", error);
      throw error;
    }
  }
}