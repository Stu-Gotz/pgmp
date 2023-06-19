<script setup>

function register() {
  console.log('registered');
}
</script>

<template>
  <form @submit.prevent="register">
    <div class="input-group">
      <label class="input-group-label" for="username">Username: </label>
      <input class="input-group-control" type="text" name="username" id="">
    </div>

    <div class="input-group">
      <label class="input-group-label" for="email">Email: </label>
      <input class="input-group-control" type="email" name="email" id="">
    </div>
    <div class="input-group">
      <label class="input-group-label" for="emailconf">Confirm email: </label>
      <input class="input-group-control" type="email" name="emailconf" id="">
    </div>
    <div class="form-text">Must be a valid email.</div>

    <div class="input-group">
      <label class="input-group-label" for="password">Password: </label>
      <input class="input-group-control" type="text" name="password">
    </div>
    <div class="input-group">
      <label class="input-group-label" for="passconf">Confirm password: </label>
      <input class="input-group-control" type="text" name="passconf">
    </div>
    <div class="form-text">Password should use one digit and one special character.</div>

  </form>
</template>