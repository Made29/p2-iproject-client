<template>
    <div
        class="min-h-screen flex justify-center items-center bg-cover"
        style="
            background-image: url(https://img.freepik.com/free-photo/technical-financial-graph-technology-abstract-background_34663-15.jpg);
        "
    >
        <div class="p-10 w-96 bg-white rounded-md shadow-lg space-x-5">
            <form v-on:submit.prevent="registerSubmit">
                <h1 class="font-bold flex justify-center pb-8 text-2xl">
                    Register
                </h1>
                <div class="space-y-5">
                    <div>
                        <label for="" class="font-serif">Username</label>
                        <br />
                        <input
                            v-model="username"
                            type="text"
                            class="border-b-2 focus:outline-none"
                            placeholder="Type your username"
                            style="width: 100%"
                        />
                    </div>
                    <div>
                        <label for="" class="font-serif">Email</label>
                        <br />
                        <input
                            v-model="email"
                            type="text"
                            class="border-b-2 focus:outline-none"
                            placeholder="Type your email"
                            style="width: 100%"
                        />
                    </div>
                    <div>
                        <label for="" class="font-serif">Password</label>
                        <br />
                        <input
                            v-model="password"
                            type="password"
                            class="border-b-2 focus:outline-none"
                            style="width: 100%"
                        />
                    </div>
                    <div class="flex justify-center">
                        <button
                            class="rounded-full p-2 px-28 background-image:h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:outline outline-offset-0 outline-blue-500 outline-1"
                        >
                            Sign In
                        </button>
                    </div>
                    <hr />
                    <a
                        v-on:click.prevent="toLogin"
                        class="flex justify-center text-slate-400 hover:text-red-700 duration-500 cursor-pointer"
                        >Back To Login</a
                    >
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAccessStore } from "@/stores/access.js";

export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(useAccessStore, ["register"]),
        toLogin() {
            this.$router.push("/");
        },

        async registerSubmit() {
            try {
                const data = await this.register({
                    username: this.username,
                    email: this.email,
                    password: this.password,
                });
                this.$router.push("/login");
                this.$toast.success("Let's go to login", {
                    position: "top-right",
                    duration: 1500,
                });
            } catch (error) {
                this.$toast.error("Input can not empty", {
                    position: "top-right",
                    duration: 1500,
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
