import { defineStore } from "pinia";
import axios from "axios";
const baseURL = "http://localhost:3000";

export const useStockStore = defineStore({
    id: "counter",
    state: () => ({
        stockList: [],
    }),
    getters: {},
    actions: {
        async fetchStock() {
            try{
              const data = await axios({
                method: "GET",
                url: `${baseURL}/stock`,
                headers: {
                  access_token: localStorage.getItem("access_token")
                }
              })
              console.log("data: ", data.data.data);
              this.stockList = data.data.data
            }catch(error){
              console.log(error)
            }
        },
    },
});
