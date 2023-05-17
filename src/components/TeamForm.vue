<script setup>
import { Koffing } from 'koffing';
import { useTeamStore } from '../stores/store';
import { reactive } from 'vue';

var userTeam = "";

const store = useTeamStore();

function submitForm() {
  const teamIn = Koffing.parse(userTeam);
  store.updateTeam(teamIn.teams[0].pokemon);
  console.log(store.team);
}
</script>

<template>
  <!-- left half  @submit.prevent="submit"-->
  <form class="d-flex flex-column">
    <div class="form-floating h-100 d-flex flex-column flex-grow-1 ps-2 pt-0 mx-2 mb-2 mt-0">
      <textarea class="form-control pastearea flex-grow-1" placeholder="" name="teamPasteArea" v-model="userTeam">
    </textarea>
      <label for="teamPasteArea">Paste your team</label>
    </div>

    <div class="d-flex align-items-center justify-content-around">

      <button @click="submitForm" type="button" class="btn btn-success form-control w-25">Submit</button>
      <button @click="" type="button" class="btn btn-danger form-control w-25">Clear</button>

    </div>
  </form>
</template>

<style lang="scss">
.pastearea {
  outline: 0 none;
  padding: 10px;
  // width: calc(100% - 10px);
  resize: none;
  height: 100%;
  box-sizing: border-box;
  // background-color:#a79bbc;
  border: none;
  // border: 1px solid black;
  border-radius: 20px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, .3);

  &::-webkit-scrollbar {
    width: 12px;
    background: #5c4780;
    border-radius: 2px;

    &-button {
      background: #432e68;
    }

    &-thumb {
      background: #7d6b9b;
      border: 1px solid #192650;
      cursor: pointer;
    }
  }
}
</style>