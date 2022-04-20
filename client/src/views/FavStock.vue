<template>
<div class="bg-cover" style="background-image: url(https://media.istockphoto.com/videos/double-exposure-of-graph-and-rows-of-money-coins-video-id1044323966?s=640x640);">

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