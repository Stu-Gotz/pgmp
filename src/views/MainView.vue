<script setup>
import CardDisplay from '../components/CardDisplay.vue' 
import TeamForm from '../components/TeamForm.vue'
import LowerDisplay from '../components/LowerDisplay.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="content mb-0 p-0">
    <!-- left half -->
    <TeamForm />
    <!-- Right Half -->
    <div class="d-flex flex-column align-items-center justify-content-center">
      <CardDisplay />
      <LowerDisplay />
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<style lang="scss">
.content {
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: 1fr auto;
  column-gap: 20px;
  /* background-color: #6b769a; */
  /* height: 100%; */
  flex: 1;
}



.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.front {
  padding: 1rem 0;
}



.card-images {
  background-size: contain;
  background-repeat: no-repeat;
  margin: 4px;
  height: 35%;
}

.ev-list {
  display: inline-block;
  padding: 0;
  margin: 0;
}

.evs {
  display: inline-block;
  margin-left: 2px;
}
</style>
