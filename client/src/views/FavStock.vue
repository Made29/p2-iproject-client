<template>
<div class="bg-cover" style="background-image: url(https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);">

<Navbar/>

<div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>No</th> 
              <th>Stock</th> 
              <th>Delete</th> 
            </tr>
          </thead>

        <FavTable
        v-for="(value, i) in favList"
        v-bind:key="value.id"
        v-bind:value="value"
        v-bind:index="i"
        />
      
          <tfoot>
            <tr>
                <th>No</th> 
                <th>Stock</th> 
                <th>Delete</th> 
            </tr>
          </tfoot>
        </table>
      </div>

</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import FavTable from "@/components/FavTable.vue"
import { mapActions, mapState } from "pinia"
import { useStockStore } from "@/stores/stock.js"

export default {
    components: {
        Navbar,
        FavTable
    },

    methods:{
      ...mapActions(useStockStore, ["favStock"])
    },

    computed: {
      ...mapState(useStockStore, ["favList"])
    },

    created() {
      this.favStock()
    }
}
</script>

<style lang="scss" scoped>

</style>