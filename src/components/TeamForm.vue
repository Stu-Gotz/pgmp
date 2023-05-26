<script setup>
import { ref, onMounted } from 'vue';
import { Koffing } from 'koffing';
import { useTeamStore } from '../stores/store';

const state = ref()
const store = useTeamStore();

onMounted(() => {
  state.value = "";
})


async function submitForm() {
  const teamIn = Koffing.parse(state.value);
  const team = teamIn.teams[0].pokemon;
  // console.log(team);
  for(var i in team) {
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${team[i].name.toLowerCase()}`);
    const res = await req.json();
    
    team[i].id = res.id;
    team[i].spriteUrl = res.sprites.front_default;
    team[i].type = [];
    team[i].itemUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${team[i].item.toLowerCase().replace(' ', '-')}.png`;

    for (var j in team[i].moves){
      const moveReq = await fetch(`https://pokeapi.co/api/v2/move/${team[i].moves[j].toLowerCase().replace(' ', '-')}/`)
      const moveRes = await moveReq.json();
      team[i].moves[j] = {
            name: team[i].moves[j],
            type: moveRes.type.name,
            priority: moveRes.priority
          }
    }

    for (var t in res.types){
      
      team[i].type.push(res.types[t].type.name);
    }
    
  };
  console.log(team);
  
  
  store.updateTeam(team);
}

function clearForm() {
  state.value = "";
  store.clearTeam();
}
</script>

<template>
  <!-- left half  -->
  <form @submit.prevent class="d-flex flex-column">
    <div class="form-floating h-100 d-flex flex-column flex-grow-1 ps-2 pt-0 mx-2 mb-2 mt-0">
      <textarea class="form-control pastearea flex-grow-1" 
      placeholder="Place your team" 
      name="teamPasteArea" 
      v-model="state">
    </textarea>
      <label class="form-label" for="teamPasteArea">Paste your team</label>
    </div>

    <div class="d-flex align-items-center justify-content-around">

      <button @click="submitForm()" type="button" class="btn btn-success form-control w-25">Submit</button>
      <button @click="clearForm()" type="button" class="btn btn-danger form-control w-25">Clear</button>

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
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, .3);

  &::-webkit-scrollbar {
    // width: 12px;
    background: #5c4780;
    border-radius: 20px;

    &-button {
      background: #432e68;
      border-radius: 20px;
    }

    &-thumb {
      background: #7d6b9b;
      border: 1px solid #192650;
      cursor: pointer;
      border-radius: 20px;
    }
  }

  &:focus {
    outline: none !important;
    border: 2px solid darkorchid;
    box-shadow: 0 0 10px mediumorchid;

    & + .form-label{
      visibility: hidden;
      transition: .1s;
    }
  }
}
</style>