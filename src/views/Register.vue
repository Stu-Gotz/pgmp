<script setup>
import * as Yup from 'yup';
import YupPassword from 'yup-password'
import { pushScopeId, ref } from 'vue';

const errors = ref([]);
YupPassword(Yup);

let registrationSchema = Yup.object({
  username: Yup.string().min(5, 'Username must be at least 5 characters.').max(30).required("Username is required."),
  email: Yup.string().min(5, "Email must be at least 5 characters.").email().required("Email is required."),
  confirmEmail: Yup.string().oneOf([Yup.ref('email'), null], 'Emails much match.'),
  password: Yup.string().min(8).max(20).minLowercase(1, 'Password must have at least one lower case letter. ')
    .minUppercase(1, 'Password must have at least one capital letter.')
    .minNumbers(1, 'Password must contain at least one number..')
    .minSymbols(1, 'Password must contain at least one symbol.').required(),
  confirmPass: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match.')
});

function resetErrors(errorList){
  return errorList.splice(0);
}
async function checkRegistration(event) {
  let formData = {
    username: event.target[0].value,
    email: event.target[1].value,
    confirmEmail: event.target[2].value,
    password: event.target[3].value,
    confirmPass: event.target[4].value,
  }

  registrationSchema.validate(formData, { abortEarly: false })
    .then(formData => {
      console.log('No errors.');
      console.log(formData);
      resetErrors(errors.value);
    })
    .catch((err) => {
      resetErrors(errors.value);
      console.log(err);
      console.log(err.name);
      console.log(err.errors);
      errors.value.push(...err.errors);
    })
    
    if(errors.length === 0) {
      await fetch("localhost:5173/apiv1/users/register") 
    }

  // pass to user server api to validate further and return errors
  // redirect to registration if unsuccessful
  // redirect to a "success" page before going to profile or main page (havent decided)
}
</script>

<template>
  
  <form action="/register" @submit.prevent="checkRegistration" class="row w-50 position-absolute top-50 start-50 translate-middle">
    <ul class="d-flex flex-column justify-content-center align-items-center text-danger">
    <li class="text-danger" v-for="error in errors">{{ error }}</li>
  </ul>
    <div class="col d-flex flex-column justify-content-center align-items-center border-end mb-3">
      <div class="d-flex justify-content-center align-self-center input-group">
        <span class="input-group-text w-25">Username: </span>
        <div class="form-floating w-50">
          <input class="form-control" type="text" name="username" id="registerName">
          <label for="registerName">Username</label>
        </div>
      </div>
      <div class="d-flex justify-content-center input-group">
        <span class="input-group-text w-25">Email: </span>
        <div class="form-floating">
          <input class="form-control" type="email" name="email" id="registerEmail">
          <label for="registerEmail">Email address</label>
        </div>
      </div>
      <div class="d-flex justify-content-center input-group">
        <span class="input-group-text w-25">Confirm: </span>
        <div class="form-floating">
          <input class="form-control" type="email" name="emailconf" id="confirmEmail">
          <label for="confirmEmail">Confirm email </label>
        </div>
      </div>
      <div class="form-text">Must be a valid email address.</div>
    </div>
    <div class="col d-flex flex-column justify-content-center align-items-center mb-3">
      <div class="d-flex justify-content-center input-group">
        <span class="input-group-text w-25">Password: </span>
        <div class="form-floating">
          <input class="form-control" type="password" name="password" id="registerPassword">
          <label for="registerPassword">Password </label>
        </div>
      </div>
      <div class="d-flex justify-content-center input-group">
        <span class="input-group-text w-25">Confirm: </span>
        <div class="form-floating">
          <input class="form-control" type="password" name="passconf" id="passconf">
          <label for="passconf">Confirm password </label>
        </div>
      </div>
      <div class="form-text">Password should use one digit and one special character.</div>
    </div>
    <div class="d-flex justify-content-center align-items-center input-group">
      <button class="btn btn-success mx-1 rounded" type="submit">Register</button>
      <RouterLink to="/"><button class="btn btn-danger mx-1 rounded">Cancel</button></RouterLink>
    </div>
  </form>
</template>