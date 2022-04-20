<template>
   <div class="bg-cover" style="background-image: url(https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);">

       <Navbar/>
   
       <!-- body -->
       <div class="overflow-x-auto">
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
          v-bind:key="value.id"
          v-bind:value="value"
          v-bind:index="i"
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
        ...mapActions(useStockStore, ["fetchStock"])
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