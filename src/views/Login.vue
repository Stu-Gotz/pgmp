<script setup>
// TODO:
// Login Function (username pw validation)
// Error Handling (send message, and clear form.)
function login() {
  console.log('this doesnt work yet')
}
</script>

<template>
  <div class="container d-flex flex-column align-items-center justify-content-center h-50">
    <h4>some image here</h4>
    <form @submit.prevent="login">
      <div class="input-group mb-3">
        <label for="username" class="input-group-text" id="username">Username: </label>
        <div class="form-floating">
          <input name="username" type="text" class="form-control" id="floatingUsernameInput" placeholder="Username">
          <label for="floatingUsernameInput">Username</label>
        </div>
      </div>
      <div class="input-group mb-3">
        <label for="password" class="input-group-text" id="password">Password: </label>
        <div class="form-floating">
          <input name="username" type="text" class="form-control" id="floatingPasswordInput" placeholder="Username">
          <label for="floatingPasswordInput">Password</label>
        </div>
      </div>
      <div class="row g-3">
        <button class="col btn btn-success form-control mx-1">Login</button>
        <button class="col btn btn-danger form-control mx-1">Reset</button>
      </div>
    </form>
    <div class="fs-6">Don't have an account? <a href="#" class="">Register here</a>.</div>
  </div>
</template>