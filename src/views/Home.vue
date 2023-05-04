<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/userp">User Panel</router-link>
    <!--img src="public\images\logo.png"/-->
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-1">
        <aside>
          <!--Izquierda-->
          <div class="top">
            <div class="logo">
              <img src="/assetts/logo.png" />
              <h2>FOL <span class="danger">ING </span></h2>
            </div>
            <div class="close" id="close-btn">
              <span class="material-icons-sharp"> close </span>
            </div>
          </div>

          <div class="tab-buttons">
            <router-link to="/home/dashboard">
              <button class="material-icons-sharp">grid_view</button>
              <button class="tab-button" onclick="changeTab(event, 'tab-1')">
                Dashboard
              </button>
            </router-link>

            <router-link to="/home/users">
              <button class="material-icons-sharp">group</button>
              <button class="tab-button" onclick="changeTab(event, 'tab-1')">
                Users Admin
              </button>
            </router-link>

            <router-link to="/home/stats">
              <button class="material-icons-sharp">query_stats</button>
              <button class="tab-button" onclick="changeTab(event, 'tab-3')">
                Stats
              </button>
            </router-link>

            <router-link to="/home/userp">
              <button class="material-icons-sharp">settings</button>
              <button class="tab-button" onclick="changeTab(event, 'tab-4')">
                User Panel

              </button>
            </router-link>
            <router-link to="/home/temas">
              <button class="material-icons-sharp">settings</button>
              <button class="tab-button" onclick="changeTab(event, 'tab-4')">
                Book Content

              </button>
            </router-link>


       
            <a href="#">
              <span class="material-icons-sharp"> logout </span>

              <h3>LogOut</h3>
            </a>
          </div>
        </aside>
      </div>
      <div class="col-md-auto flex-grow-1">
        <main>
          <router-view></router-view>
        </main>
      </div>
      <div class="col col-lg-2">
        <!--Derecha-->
        <div class="right">
          <div class="top">
            <button id="menu-btn">
              <span class="material-icons-sharp"> menu </span>
            </button>
            <div class="tema" @click="toggleTheme">
              <span class="material-icons-sharp active"> light_mode </span>
              <span class="material-icons-sharp"> dark_mode </span>
            </div>
            <div class="profile">
              <div class="info">
                <p>Hello, {{ user }}</p>
                <small class="text-muted">{{ rol }}</small>
              </div>
              <div class="profile-photo">
                <img src="/assetts/fotito.JPG" />
              </div>
            </div>
          </div>

          <div class="recent-played">
            <h2>People That Played Recently to Foling</h2>
            <div class="updates">
              <div class="update">
                <div class="profile-photo">
                  <img src="/assetts/fotito.JPG" />
                </div>
                <div class="message">
                  <p>
                    <b>{{ user }} </b> Played during {{ gametime }}
                  </p>
                  <small class="text-muted">{{ time }} ago</small>
                </div>
                <div class="update">
                  <div class="profile-photo">
                    <img src="/assetts/fotito2.JPG" />
                  </div>
                  <div class="message">
                    <p>
                      <b>{{ user }} </b> Played during {{ gametime }}
                    </p>
                    <small class="text-muted">{{ time }} ago</small>
                  </div>
                  <div class="update">
                    <div class="profile-photo">
                      <img src="/assetts/fotito3.JPG" />
                    </div>
                    <div class="message">
                      <p>
                        <b>{{ user }} </b> Played during {{ gametime }}
                      </p>
                      <small class="text-muted">{{ time }} ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClickableSpan",
  methods: {
    handleClick() {
      alert("You clicked the span!");
      // perform any other actions you want here
    },
    toggleTheme() {
      document.body.classList.toggle("dark-theme-variables");
      this.$refs.icon1.classList.toggle("active");
      this.$refs.icon2.classList.toggle("active");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

/*General Settings*/

:root {
  --color-primary: #7380ec;
  --color-danger: #ff7782;
  --color-success: #41f1b6;
  --color-warning: #ffbb55;
  --color-white: #fff;
  --color-info-dark: #7d8da1;
  --color-info-light: #dce1eb;
  --color-dark: #363949;
  --color-light: rgba(132, 139, 200, 0.18);
  --color-primary-variant: #111e88;
  --color-dark-variant: #677483;
  --color-background: #f6f6f9;
  --card-border-radius: 2rem;
  --border-radius-1: 0.4rem;
  --border-radius-2: 0.8rem;
  --border-radius-3: 1.2rem;
  --card-padding: 1.8rem;
  --padding-1: 1.2rem;
  --box-shadow: 0 2rem 3rem var(--color-info-light);
}

/*--Dark Theme--*/

.dark-theme-variables {
  --color-background: #181a1e;
  --color-white: #202528;
  --color-dark: #edeffd;
  --color-dark-variant: #a3bdcc;
  --color-light: #rgba(0, 0, 0, 0.4);
  --box-shadow: 0 2rem 3rem var(--color-light);
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  appearance: none;
  border: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
aside {
  height: 100vh;
}

aside .top {
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.4rem;
}

aside .logo {
  display: flex;
  gap: 0.8rem;
}

aside .logo img {
  width: 2rem;
  height: 2rem;
}

aside .close {
  display: none;
}

aside .tab-buttons {
  background: white;
  display: flex;
  flex-direction: column;
  height: 86vh;
  position: relative;
  top: 3rem;
}

aside h3 {
  font-weight: 500;
}

aside .tab-buttons a {
  display: flex;
  color: var(--color-info-dark);
  margin: 2rem;
  gap: 1rem;
  align-items: center;
  position: relative;
  height: 3.7rem;
  transition: all 300ms ease;
}

aside .tab-buttons a span {
  font-size: 1.6rem;
  transition: all 300ms ease;
}

aside .tab-buttons a:last-child {
  position: absolute;
  bottom: 2rem;
  width: 100%;
}

aside .tab-buttons a.active {
  background: var(--color-light);
  color: var(--color-primary);
  margin-left: 0;
}

aside .tab-buttons a.active::before {
  content: "";
  width: 6px;
  height: 100%;
  background: var(--color-primary);
}

aside .tab-buttons a.active span {
  color: var(--color-primary);
  margin-left: calc(1rem- 3px);
}

aside .tab-buttons a:hover {
  color: var(--color-primary);
}

aside .tab-buttons a:hover span {
  margin-left: 1rem;
}

main {
  margin-top: 1.4rem;
}

main .date {
  display: inline-block;
  background: var(--color-light);
  border-radius: var(--border-radius-1);
  margin-top: 1rem;
  padding: 0.5rem 1.6rem;
}

main .date input[type="date"] {
  background: transparent;
  color: var(--color-dark);
}

main .insights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
}

main .insights > div {
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--border-radius-1);
  margin-top: 1rem;
  box-shadow: var(--box-shadow);
  transition: all 300ms ease;
}

main .insights > div:hover {
  box-shadow: none;
}

main .insights > div.players span {
  border-radius: 50%;
  background-color: var(--color-primary);
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--color-white);
}

main .insights > div.gametime span {
  background-color: var(--color-danger);
  border-radius: 50%;
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--color-white);
}

main .insights > div.money span {
  background-color: var(--color-success);
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--color-white);
}

main .insights > div .middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

main .insights h3 {
  margin: 1rem 0 0.6rem;
  font-size: 1rem;
}

main .insights .progress {
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
}

main .insights svg {
  width: 7rem;
  height: 7rem;
}

main .insights svg circle {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 14;
  stroke-linecap: round;
  transform: translate(5px, 5px);
  stroke-dashoffset: 92;
}

main .insights .players svg circle {
  stroke-dashoffset: -30;
  stroke-dasharray: 200;
}

main .insights .money svg circle {
  stroke-dashoffset: -30;
  stroke-dasharray: 100;
}

main .insights .gametime svg circle {
  stroke-dashoffset: -30;
  stroke-dasharray: 250;
}

main .insights .progress .number {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

main .insights small {
  margin-top: 1.3rem;
  display: block;
}

main .users {
  margin-top: 2rem;
}

main .users h2 {
  margin-bottom: 0.8rem;
}

main .users table {
  background: var(--color-white);
  width: 100%;
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: all 300ms ease;
}

main .users table:hover {
  box-shadow: none;
}

main table tbody td {
  height: 2.8rem;
  border-bottom: 1px solid var(--color-light);
  color: var(--color-dark-variant);
}

main table tbody tr:last-child td {
  border: none;
}

main .users a {
  text-align: center;
  display: block;
  margin: 1rem auto;
  color: var(--color-primary);
}
.right {
  margin-top: 1.4rem;
}

.right .top {
  display: flex;
  justify-content: end;
  gap: 2rem;
}

.right .top button {
  display: block;
}

.right .tema {
  background: var(--color-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.6rem;
  width: 4.2rem;
  cursor: pointer;
  border-radius: var(--border-radius-1);
}

.right .tema span {
  font-size: 1.2rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right .tema span.active {
  background: var(--color-primary);
  color: white;
  border-radius: var(--border-radius-1);
}

.right .top .profile {
  display: flex;
  gap: 2rem;
  text-align: right;
}

.right .recent-played {
  margin-top: 1rem;
}

.right .recent-played h2 {
  margin-bottom: 0.8rem;
}

.right .recent-played .updates {
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
  transition: all 300ms ease-in;
}

.right .recent-played .updates:hover {
  box-shadow: none;
}

.right .recent-played .updates .update {
  display: grid;
  grid-template-columns: 2.6rem auto;
  gap: 1rem;
  margin-bottom: 1rem;
}
.col-lg-2 {
  padding-right: 50px;
}

.col-md-auto {
  padding-left: 200px;
  padding-right: 200px;
}

Parte de la izquierda .container {
  display: grid;
  width: 96%;
  margin: 0 auto 0 auto;
  gap: 1.8rem;
  grid-template-columns: 14rem auto 23rem;
}

a {
  color: var(--color-dark);
}

img {
  display: block;
  width: 100%;
}

h1 {
  font-weight: 800;
  font-size: 1.8rem;
}

h2 {
  font-size: 1.4rem;
}

h3 {
  font-size: 0.87rem;
}

h4 {
  font-size: 0.8rem;
}

h5 {
  font-size: 0.77rem;
}

small {
  font-size: 0.75rem;
}

.profile-photo {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow: hidden;
}

.text-muted {
  color: var(--color-info-dark);
}

p {
  color: var(--color-dark-variant);
}

b {
  color: var(--color-dark);
}

.primary {
  color: var(--color-primary);
}

.danger {
  color: var(--color-danger);
}

.sucess {
  color: var(--color-success);
}

.warning {
  color: var(--color-warning);
}
/* Navigation */

#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}

#nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  transition: 0.2 ease color;
}

#nav a.router-link-active,
#nav a:hover {
  opacity: 1;
}
</style>
