import { defineStore } from "pinia";
import axios from "axios"
const baseURL = "https://stock-view.herokuapp.com/"

export const useAccessStore = defineStore({
  id: "counter",
  state: () => ({
    
  }),
  getters: {
    
  },
  actions: {
    login(data){
      return axios({
        method: "POST",
        url: `${baseURL}/login`,
        data: {
          email: data.email,
          password: data.password
        }
      })
    },

    register(data){
      return axios({
        method: "POST",
        url: `${baseURL}/register`,
        data: {
          username: data.username,
          email: data.email,
          password: data.password
        }
      })
    }
  },
});