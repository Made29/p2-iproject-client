<template>
    <div class="flex justify-between">
        <!-- atas kanan -->
        <div class="h-16 flex p-3">
            <div class="flex items-center p-5">
                <h1
                    v-on:click.prevent="home"
                    class="text-black text-4xl bg-slate-50 rounded-md duration-500 cursor-pointer flex"
                >
                    Stock View
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="currentColor"
                        class="bi bi-graph-up-arrow bg-white"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                        />
                    </svg>
                </h1>
            </div>
        </div>
        <div class="flex">
            <div class="flex items-center p-5">
                <button
                    v-on:click.prevent="stockList"
                    class="w-20 hover:bg-slate-500 py-3 rounded-xl duration-500"
                >
                    Stock List
                </button>
            </div>
            <div class="flex items-center p-5">
                <button
                    v-on:click.prevent="stockWatchlist"
                    class="w-20 py-3 hover:bg-slate-500 rounded-xl duration-500"
                >
                    Watch List
                </button>
            </div>
            <div class="flex items-center p-5">
                <button
                    v-on:click.prevent="topUpButton"
                    class="w-20 py-3 hover:bg-slate-500 rounded-xl duration-500"
                >
                    Credit
                </button>
            </div>
        </div>

        <!-- atas kiri -->
        <div class="flex items-center p-3">
            <div class="flex items-center">
                <button
                    v-on:click.prevent="logout"
                    class="w-20 py-3 hover:bg-slate-500 rounded-xl duration-500"
                >
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useStockStore } from "@/stores/stock.js";

export default {
    methods: {
        ...mapActions(useStockStore, ["topUp"]),
        stockList() {
            this.$router.push("/stock");
            this.$toast.success("Stock List", {
                position: "top-right",
                duration: 1500,
            });
        },

        stockWatchlist() {
            this.$router.push("/watchlist");
            this.$toast.success("Watchlist", {
                position: "top-right",
                duration: 1500,
            });
        },

        topUpButton() {
            this.topUp();
            this.$toast.success("Top Up", {
                position: "top-right",
                duration: 1500,
            });
        },

        home() {
            this.$router.push("/");
            this.$toast.success("Home", {
                position: "top-right",
                duration: 1500,
            });
        },

        logout() {
            localStorage.clear();
            this.$router.push("/login");
            this.$toast.success("Success to logout", {
                position: "top-right",
                duration: 1500,
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
