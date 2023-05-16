<script setup>
import CardFront from './Cards/CardFront.vue'
</script>


<template>
      <!-- Container for the top half of the page -->
      <div class="h-50 w-100">
        <!-- Create the row to hold the cards within the top half -->
        <div class="cards grid ">
          <!-- This begins each card element. A goal in the project is to turn this into smaller components -->
          <!-- Begins the Front -->
          <CardFront  v-for="i in 6"/>
        </div>
      </div>
      <!-- End Top Half Page -->
</template>

<style lang="scss">
.cards {
  font-size: 12px;
}
</style>