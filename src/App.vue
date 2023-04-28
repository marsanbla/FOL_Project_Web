<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="pb-4 ma-60" elevation="8">
        <v-row justify="center">
          <v-col cols="4" class="pt-16 pl-6 pr-6 teal lighten-2">
            <div class="d-flex flex-column justify-center align-center">
              <h1>Welcome Admin</h1>
              <p class="text-center text-justify">
                This is the admin page to control your game
              </p>
              <v-btn outlined rounded color="white" @click="getAuthPost"
                >SIGN IN</v-btn
              >
            </div>
          </v-col>
          <v-col
            cols="8"
            class="d-flex flex-column pt-16 pl-6 pr-6 align-center justify-center"
          >
            <div class="d-flex flex-column justify-center align-center">
              <h1 class="teal--text">Create Account</h1>
              <div>
                <v-btn outlined icon>
                  <v-icon icon--outlined> mdi-facebook </v-icon>
                </v-btn>
                <v-btn outlined icon>
                  <v-icon icon--outlined> mdi-google-plus </v-icon>
                </v-btn>
                <v-btn outlined icon>
                  <v-icon icon--outlined> fab fa-linkedin-in </v-icon>
                </v-btn>
              </div>
              <p>Ensure your email for registration</p>
            </div>
            <div class="fields">
              <v-list-item>
                <v-text-field
                  color="teal"
                  label="Name"
                  v-model="username"
                  prepend-icon="mdi-account"
                >
                </v-text-field>
              </v-list-item>
              <v-list-item>
                <v-text-field
                  color="teal"
                  type="email"
                  v-model="email"
                  label="Email"
                  prepend-icon="email"
                ></v-text-field>
              </v-list-item>
              <v-list-item>
                <v-text-field
                  color="teal"
                  type="password"
                  v-model="passwd"
                  label="Password"
                  prepend-icon="mdi-lock"
                ></v-text-field>
              </v-list-item>
            </div>
            <div>
              <v-btn
                color="teal lighten-2"
                rounded
                class="white--text"
                @click="getAuthPost"
                href="./index.html"
                >SIGN UP</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, World!",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Hello, Vue!";
    },
  },
};
</script>
