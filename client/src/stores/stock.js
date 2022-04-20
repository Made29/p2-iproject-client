import { defineStore } from "pinia";
import axios from "axios";
const baseURL = "http://localhost:3000";

export const useStockStore = defineStore({
    id: "counter",
    state: () => ({
        stockList: [],
        favList: [],
    }),
    getters: {},
    actions: {
        async fetchStock() {
            try {
                const data = await axios({
                    method: "GET",
                    url: `${baseURL}/stock`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });
                this.stockList = data.data.data;
            } catch (error) {
                this.$toast.error(error);
            }
        },

        async favStock() {
            try {
                const data = await axios({
                    method: "GET",
                    url: `${baseURL}/watchlist`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });
                this.favList = data.data;
            } catch (error) {
                this.$toast.error(error);
            }
        },

        async favoriteStock(value) {
            try {
                await axios({
                    method: "POST",
                    url: `${baseURL}/watchlist/${value}`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });
            } catch (error) {
                this.$toast.error(error);
            }
        },

        async deleteStock(value) {
            try {
                await axios({
                    method: "DELETE",
                    url: `${baseURL}/watchlist/delete/${value}`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });
                this.$toast.success("Success delete stock from watchlist", {
                    position: "top-right",
                    duration: 1500,
                });
            } catch (error) {
                this.$toast.error(error);
            }
        },

        async topUp() {
            try {
                const data = await axios({
                    method: "POST",
                    url: `${baseURL}/xendit`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });
                window.location = data.data.invoice_url;
                this.$toast.success("Success top up", {
                    position: "top-right",
                    duration: 1500,
                });
            } catch (error) {
                this.$toast.error(error);
            }
        },
    },
});
