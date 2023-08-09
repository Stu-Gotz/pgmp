<script setup>
import { useStatStore } from '../stores/usageStore';
import { storeToRefs } from 'pinia';

const statStore = useStatStore();

const { current, previous, tma } = storeToRefs(statStore);
console.log(current.value)
console.log(previous)
console.log(tma)
//{{ curr.pokemon }} -- {{ curr.rank }}
</script>

<template>
  <div class="d-flex h-50 w-100 justify-content-between align-items-start flex-1">
    <div class="h-100 w-100 overflow-auto">
      <p class="position-absolute text-center m-0 p-0 border-bottom">Current Ranking</p>
      <ul class="d-flex flex-column flex-1 align-items-end">
        <li class="text-align-left pe-2" v-for="curr in current"> {{ curr.pokemon }} -- {{ curr.rank }}</li>
      </ul>
    </div>
    <div class="h-100 w-100 overflow-auto">
      <p class="position-absolute text-center m-0 p-0 border-bottom">Previous Ranking</p>
      <ul class="d-flex flex-column flex-1 align-items-end">
        <li class="text-align-left pe-2" v-for="prev in previous">{{ prev.pokemon }} -- {{ prev.rank }}</li>
      </ul>
    </div>
    <div class="h-100 w-100 overflow-auto">
      <p class="position-absolute text-center m-0 p-0 border-bottom">Older Ranking</p>
      <ul class="d-flex flex-column flex-1 align-items-end">
        <li class="text-align-left pe-2" v-for="old in tma">{{ old.pokemon }} -- {{ old.rank }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul>* {
  font-size: .8rem;
  text-transform: capitalize;
}</style>