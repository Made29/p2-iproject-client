<template>
   <div class="flex justify-between">
        <!-- atas kanan -->
          <div class=" h-16 flex p-3">
              <div class="  flex items-center p-5">
                  <h1 v-on:click.prevent="home" class="text-black text-4xl bg-slate-50 rounded-md duration-500 cursor-pointer">Stock View</h1>
              </div>
           </div>
           <div class="flex">
              <div class=" flex items-center p-5">
                  <button v-on:click.prevent="stockList" class=" w-20 hover:bg-slate-500 py-3 rounded-xl duration-500">Stock List</button>
              </div>
              <div class=" flex items-center p-5">
                  <button v-on:click.prevent="stockWatchlist" class=" w-20 py-3 hover:bg-slate-500 rounded-xl duration-500">Watch List</button>
              </div>
              <div class=" flex items-center p-5">
                  <button v-on:click.prevent="topUp" class=" w-20 py-3 hover:bg-slate-500 rounded-xl duration-500">Top Up</button>
              </div>
          </div>
   
          <!-- atas kiri -->
          <div class=" flex items-center p-3">
              <div class=" flex items-center">
                  <button v-on:click.prevent="logout" class=" w-20 py-3 hover:bg-slate-500 rounded-xl duration-500">Logout</button>
              </div>
          </div>
  </div>
</template>

<script>
export default {
    methods: {
        stockList(){
            this.$router.push("/stock")
        },

        stockWatchlist(){
            console.log("masuk bang stockwathlist")
        },

        topUp(){
            console.log("masuk bang topup")
        },

        home(){
            this.$router.push("/")
        },

        logout(){
            localStorage.clear()
            this.$router.push("/login")
        }
    }
}
</script>

<style lang="scss" scoped>

</style>