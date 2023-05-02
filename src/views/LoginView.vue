<template>
  <div class="login-view">
    <h1>Login</h1>
    <Login />
    <!-- Other UI elements, such as a footer or navigation menu, could go here -->
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  name: "LoginView",
  components: {
    Login,
  },
};
</script>
