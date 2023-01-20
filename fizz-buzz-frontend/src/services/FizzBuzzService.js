import apiClient from "../utils/apiClient";

class FizzBuzzService {
  async postFizzBuzz(payload) {
    return await apiClient.post(`/fizzBuzz`, payload);
  }

  async getLeaderboard(payload) {
    return await apiClient.get(`/leaderboard`, payload);
  }
}

export default new FizzBuzzService();
