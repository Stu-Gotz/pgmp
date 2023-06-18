<script setup>

function login() {
  console.log('this doesnt work yet')
}
</script>

<template>
  <div class="container d-flex flex-column align-items-center justify-content-center h-50">
    <h4>some image here</h4>
    <form @submit.prevent="login">
      <div class="input-group mb-3">
        <label for="username" class="input-group-text" id="basic-addon1">Username: </label>
        <input name="username" type="text" class="form-control" placeholder="Username" aria-label="Username"
          aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <label for="password" class="input-group-text" id="basic-addon1">Password: </label>
        <input name="password" type="text" class="form-control" placeholder="Password" aria-label="Username"
          aria-describedby="basic-addon1">
      </div>
    </form>
    <div class="fs-6">Don't have an account? <a href="#" class="">Login here</a>.</div>
  </div>
</template>