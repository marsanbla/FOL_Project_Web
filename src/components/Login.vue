<template>
  <div class="login-page">
    <transition name="fade">
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div
            v-if="!registerActive"
            class="card"
            style="padding: 20px"
            v-bind:class="{ error: emptyFields }"
          >
            <h1>Sign In</h1>
            <form class="form-group">
              <input
                v-model="emailLogin"
                type="email"
                class="form-control"
                placeholder="Email"
                required
              />
              <input
                v-model="passwordLogin"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
              <!--router-link to="/home">Ves a home</router-link-->
              <input type="submit" class="btn btn-primary" @click="doLogin" />

              <p>
                Don't have an account?
                <a
                  href="#"
                  @click="
                    (registerActive = !registerActive), (emptyFields = false)
                  "
                  >Sign up here</a
                >
              </p>
              <p><a href="#">Forgot your password?</a></p>
            </form>
          </div>

          <div v-else class="card-login" v-bind:class="{ error: emptyFields }">
            <h1>Sign Up</h1>
            <form class="form-group">
              <input
                v-model="emailReg"
                type="email"
                class="form-control"
                placeholder="Email"
                required
              />
              <input
                v-model="passwordReg"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
              <input
                v-model="confirmReg"
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                required
              />
              <input
                type="submit"
                class="btn btn-primary"
                @click="doRegister"
              />
              <p>
                Already have an account?
                <a
                  href="#"
                  @click="
                    (registerActive = !registerActive), (emptyFields = false)
                  "
                  >Sign in here</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
localStorage.setItem('isLoggedIn', 'false')

var isAuth=false;

export function getAuth(){
  return isAuth;
}

export default {
  data() {
    return {
      registerActive: false,
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
      postData: null,
      response: null,
      
    };
  },
  methods: {
    changeMessage() {
      this.message = "Hello, Vue!";
    },
    async doLogin() {

      var auth=false;
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        console.log("Ha entrat al else del do login");
        var response = await this.getAuthPost();
        //var data = this.doDataFromResponse(response);
        //console.log("Data is auth: ", data.isAuth);
        /*if (data.isAuth) {
          const token = data.isAuth;
          localStorage.setItem("token", token); // update the token in localStorage
          this.$router.push("/home"); // redirect to the dashboard page
        }*/
        if (response.status == 202) {
          auth=true;
          localStorage.setItem('isLoggedIn', 'true')
          //localStorage.setItem("token", token); // update the token in localStorage
          this.$router.push({ name: "Home" });
          alert("You are now logged in");
        }
      }
      return auth;
    },
    async doRegister() {
      if (
        this.emailReg === "" ||
        this.passwordReg === "" ||
        this.confirmReg === ""
      ) {
        this.emptyFields = true;
        getUserList();
      } else {
        var response = await this.register();
        //console.log("Post data: ", this.postData);
        console.log("Response dins do register: ", response);
        if (response.status == 201) {
          alert("You are now registered");
        }
      }
    },
    async doDataFromResponse(response) {
      var data = await response.json();

      return data;
    },
    doPromiseFetchPost(url, data, callback) {
      //this.loading = true;

      var promResponse = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors",
        cache: "default",
      });
      return promResponse;
    },
    doFetchPost(url, data, callback) {
      //this.loading = true;

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors",
        cache: "default",
      })
        .then((response) => {
          console.log("Resposta del doFetch: ", response);
          this.response = response;
          console.log("Resposta de dins del vue: ", this.response);
          return response.json();
        })
        .then((data) => {
          this.postData = data;
          setTimeout(callback, this.timeout);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getAuthPost() {
      console.log("Ha entrat a get auth");
      let callback = () => {
        this.snackbar = true;

        console.log("Is auth dins client" + this.postData.isAuth);

        if (this.postData.isAuth) {
          this.text = "Autoritzat. Roles => " + this.postData.roles;
          this.auth = true;
          this.verpagina = true;
          console.log("dins get auth post auth this.aut= ", this.auth);
        } else {
          this.text = "No autoritzat";
        }
        //this.loading = false;
      };

      return this.doPromiseFetchPost(
        "http://localhost:3000/authPost",
        { name: this.emailLogin, password: this.passwordLogin },
        callback
      );
    },
    async register() {
      var callback = () => {
        console.log("Resposta dins del register: ", this.response);
        this.snackbar = true;
        this.text = this.postData.text;
        //this.loading = false;
        this.auth = false;
        this.loginpage = true;
      };
      console.log("Email: ", this.emailReg, " Password: ", this.passwordReg);
      return this.doPromiseFetchPost(
        "http://localhost:3000/registerUserVue",
        { email: this.emailReg, password: this.passwordReg },
        callback
      );
    },
  },
};
</script>

<style>
p {
  line-height: 1rem;
}

.form-group input {
  margin-bottom: 20px;
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}

.wallpaper-login {
  background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

.wallpaper-register {
  background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

h1 {
  margin-bottom: 1.5rem;
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
