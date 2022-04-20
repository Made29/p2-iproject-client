<template>
    <div
        class="min-h-screen flex justify-center items-center bg-cover"
        style="
            background-image: url(https://img.freepik.com/free-photo/technical-financial-graph-technology-abstract-background_34663-15.jpg);
        "
    >
        <div class="p-10 w-96 bg-white rounded-md shadow-lg space-x-5">
            <form v-on:submit.prevent="loginSection">
                <h1 class="font-bold flex justify-center pb-8 text-2xl">
                    Login
                </h1>
                <div class="space-y-7">
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
                            class="rounded-full p-2 px-36 background-image:h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:outline outline-offset-0 outline-blue-500 outline-1"
                        >
                            Login
                        </button>
                    </div>
                    <hr />
                    <a
                        v-on:click.prevent="signUp"
                        class="flex justify-center text-slate-400 hover:text-blue-900 duration-500 cursor-pointer"
                        >SIGN UP</a
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
            email: "",
            password: "",
        };
    },

    methods: {
        ...mapActions(useAccessStore, ["login"]),
        signUp() {
            this.$router.push("/register");
        },

        async loginSection() {
            console.log("masuk dong anjim ");
            try {
                const data = await this.login({
                    email: this.email,
                    password: this.password,
                });
                localStorage.setItem("access_token", data.data.access_token);
                this.$router.push("/")
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>

<style lang="scss" scoped></style>
