<script></script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
    <router-link to="/panama">Panama</router-link>
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
            <a href="#">
              <span class="material-icons-sharp">grid_view</span>
              <button class="tab-button" onclick="changeTab(event, 'tab-1')">
                Dashboard
              </button>
            </a>
            <a href="#">
              <span class="material-icons-sharp">group</span>
              <button class="tab-button" onclick="changeTab(event, 'tab-2')">
                Users Admin
              </button>
            </a>
            <a href="#">
              <span class="material-icons-sharp">query_stats</span>
              <button class="tab-button" onclick="changeTab(event, 'tab-3')">
                Stats
              </button>
            </a>
            <a href="#">
              <span class="material-icons-sharp"> sports_esports </span>

              <button
                class="tab-button active"
                onclick="changeTab(event, 'tab-4')"
              >
                Gameplay
              </button>
            </a>
            <a href="#">
              <span class="material-icons-sharp"> settings </span>

              <button class="tab-button" onclick="changeTab(event, 'tab-5')">
                User Panel
              </button>
            </a>
            <a href="#">
              <span class="material-icons-sharp"> logout </span>

              <h3>LogOut</h3>
            </a>
          </div>
        </aside>
      </div>
      <div class="col-md-auto">
        <router-view></router-view>
      </div>
      <div class="col col-lg-2 position fixed">
        <!--Derecha-->
        <div class="right">
          <div class="top">
            <button id="menu-btn">
              <span class="material-icons-sharp"> menu </span>
            </button>
            <div class="tema">
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
