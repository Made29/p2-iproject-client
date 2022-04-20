<template>
    <div class="min-h-screen flex justify-center items-center bg-cover"  style="background-image: url(https://img.freepik.com/free-photo/technical-financial-graph-technology-abstract-background_34663-15.jpg)">
        <div class="p-10 w-96  bg-white rounded-md shadow-lg space-x-5" >
                <form action="">
                <h1 class="font-bold flex justify-center pb-8 text-2xl">Register</h1>
                <div class="space-y-5">
                    <div>
                        <label for="" class="font-serif">Username</label>
                        <br>
                        <input type="text" class="border-b-2 focus:outline-none" placeholder="Type your username" style="width: 100%;">
                    </div>
                    <div>
                        <label for="" class="font-serif">Email</label>
                        <br>
                        <input type="text" class="border-b-2 focus:outline-none" placeholder="Type your email" style="width: 100%;">
                    </div>
                    <div>
                        <label for="" class="font-serif">Password</label>
                        <br>
                        <input type="password" class="border-b-2 focus:outline-none" style="width: 100%;">
                    </div>
                    <div class="flex justify-center">
                        <button class="rounded-full p-2 px-28 background-image:h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:outline outline-offset-0 outline-blue-500 outline-1" >Sign In</button>
                    </div>
                    <hr>
                    <a v-on:click.prevent="toLogin" class="flex justify-center text-slate-400 hover:text-red-700 duration-500 cursor-pointer">Back To Login</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toLogin(){
            this.$router.push("/")
        }
    }
}
</script>

<style lang="scss" scoped>

</style>