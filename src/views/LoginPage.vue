<template>
  <div>
    <form @submit.stop.prevent="submit" class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Faça login</h1>
      <label for="inputEmail" class="sr-only">Endereço de email</label>
      <input 
      v-model="email"
      type="email" id="inputEmail" class="form-control" placeholder="Seu email" required autofocus>
      <label for="inputPassword" class="sr-only">Senha</label>
      <input 
      v-model="password"
      type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import Cookie from 'js-cookie';
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  // created() {
  //   Cookie.remove('_myapp_token');
  // },

  methods: {
    submit() {
      // Make a POST request to the Laravel backend
      const payload = {
        email: this.email,
        password: this.password,
      }
      fetch(`http://127.0.0.1:8000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access': 'application/json',
        },
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(res => {
          Cookie.set('_myapp_token', res.access_token);
        })
    },
  },
};
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>