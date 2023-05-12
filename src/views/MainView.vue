<script setup>

</script>

<template>
  <!-- left half -->
  <div class="wrapper-col">
    <form @submit.prevent="submit">
      <!-- <div class="col mb-4"> -->
      <div class="form-floating">
        <textarea class="form-control h-100" placeholder="Please import a team from
          Showdown." name="teamPasteArea"></textarea>
        <label for="teamPasteArea">Paste your team</label>
      </div>

      <!-- <div class="grid"> -->
      <div class="g-col-4 g-start-2">
        <button @click="" type="button" class="btn btn-success form-control">Submit</button>

      </div>
      <div class="g-col-4 g-start-8">
        <button @click="" type="button" class="btn btn-danger form-control">Clear</button>

      </div>
      <!-- </div> -->
      <!-- </div> -->
    </form>
  </div>
  <!-- Right Half -->
  <div class="wrapper-col">
    display half
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
