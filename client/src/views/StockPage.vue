<template>
   <div class="bg-cover" style="background-image: url(https://media.istockphoto.com/videos/double-exposure-of-graph-and-rows-of-money-coins-video-id1044323966?s=640x640);">

       <Navbar/>
   
       <!-- body -->
       <div class="overflow-x-auto">
         <h6 class="text-gray-700">Click table to buy</h6>
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>No</th> 
              <th>Code</th> 
              <th>Name</th> 
              <th>Sektor</th> 
              <th>Last Price</th> 
              <th>Volume</th> 
              <th>Favorite</th>
            </tr>
          </thead>
          
          <Table
          v-for="(value, i) in stockList"
          v-bind:key="value.Id"
          v-bind:value="value"
          v-bind:index="i"
          v-on:click.prevent="buy(value.Id)"
          />

          <tfoot>
            <tr>
                <th>No</th> 
                <th>Code</th> 
                <th>Name</th> 
                <th>Sektor</th> 
                <th>Last Price</th> 
                <th>Volume</th> 
                <th>Favorite</th>
            </tr>
          </tfoot>
        </table>
      </div>

   </div>
</template>

<script>
import Table from "@/components/Table.vue"
import Navbar from "@/components/Navbar.vue"
import { mapActions, mapState } from "pinia"
import { useStockStore } from "@/stores/stock.js"

export default {
    components: {
        Navbar,
        Table
    },

    methods: {
        ...mapActions(useStockStore, ["fetchStock", "stockDetail", "buyStock"]),
        buy(id){
          this.buyStock(id)
        }
    },

    computed: {
        ...mapState(useStockStore, ["stockList"])
    },

    created() {
        this.fetchStock()
    }
}
</script>

<style lang="scss" scoped>

</style>