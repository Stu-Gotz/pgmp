<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { isLoggedIn, username } = storeToRefs(userStore);

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mt-0 pt-0">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/main">Main Page</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/"><i class="bi bi-house-door"></i></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink v-if="isLoggedIn" class="nav-link active" to="./logout">Hello {{ username }}</RouterLink>
            <RouterLink v-else class="nav-link active" to="./login">Login</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Other Pages
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="localhost:5500/index.html">API</a></li>
              <li class="nav-item">
                <a class="nav-link disabled">Report a Bug</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>