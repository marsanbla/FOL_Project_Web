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
            <router-link to="/dashboard">
              <button class="material-icons-sharp">grid_view</button>
              <button class="tab-button" onclick="changeTab(event, 'tab-1')">
                Dashboard
              </button>
            </router-link>

            <router-link to="/users">
              <button class="material-icons-sharp">group</button>
              <button class="tab-button" onclick="changeTab(event, 'tab-1')">
                Users Admin
              </button>
            </router-link>

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
        <!--main>
          <div class="tab-content">
            <div id="tab-1" class="tab-pane active">
              <h1>Dashboard</h1>
              <div class="date">
                <input type="date" />
              </div>
              <div class="insights">
                <div class="players">
                  <span class="material-icons-sharp"> person </span>
                  <div class="middle">
                    <div class="left">
                      <h3>Total Players</h3>
                      <h1>33</h1>
                    </div>
                    <div class="progress">
                      <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                      </svg>
                      <div class="number">
                        <p>33%</p>
                      </div>
                    </div>
                  </div>
                  <small class="text-muted">All Time Players</small>
                </div>
                <div class="gametime">
                  <span class="material-icons-sharp"> timer </span>
                  <div class="middle">
                    <div class="left">
                      <h3>Total GameTime</h3>
                      <h1>33</h1>
                    </div>
                    <div class="progress">
                      <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                      </svg>
                      <div class="number">
                        <p>33%</p>
                      </div>
                    </div>
                  </div>
                  <small class="text-muted">All Time Players</small>
                </div>
                <div class="money">
                  <span class="material-icons-sharp"> paid </span>
                  <div class="middle">
                    <div class="left">
                      <h3>Total Money</h3>
                      <h1>33</h1>
                    </div>
                    <div class="progress">
                      <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                      </svg>
                      <div class="number">
                        <p>33%</p>
                      </div>
                    </div>
                  </div>
                  <small class="text-muted">All Time Players</small>
                </div>
              </div>
              <div class="users">
                <h2>Users</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Rol</th>
                      <th>Borrar</th>
                      <th>Update</th>
                      <th>Tiempo de Juego</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mario Santos</td>
                      <td class="sucess">Admin</td>
                      <td>
                        <button class="material-icons-sharp">delete</button>
                      </td>
                      <td>
                        <button class="material-icons-sharp">update</button>
                      </td>
                      <td>2H</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#">Show All</a>
              </div>
            </div>
            <div id="tab-2" class="tab-pane">
              <table class="default">
                <tr>
                  <th class="nomus">Nom usuari</th>

                  <th>Rol</th>
                </tr>

                <tr v-for="(u, index) in usuaris" :key="u.name">
                  <td>{{ index }}</td>

                  <td>{{ u.name }}</td>

                  <td>{{ u.rol }}</td>

                  <td>
                    <v-btn
                      color="success"
                      class="mr-4"
                      @click="deletePost(u.name, u.rol)"
                      >X</v-btn
                    >
                  </td>
                </tr>
              </table>
            </div>
            <div id="tab-3" class="tab-pane">
              <canvas id="myChart"></canvas>
            </div>
            <div id="tab-4" class="tab-pane">
              <div class="header">
                <head class="header">
                  Gameplay
                </head>
              </div>
              <div class="difficulty-selector">
                <p>Selecciona la dificultad:</p>
                <input
                  type="radio"
                  id="easy"
                  name="difficulty"
                  value="easy"
                  checked
                />
                <label for="easy">Fácil</label>
                <input
                  type="radio"
                  id="medium"
                  name="difficulty"
                  value="medium"
                />
                <label for="medium">Media</label>
                <input type="radio" id="hard" name="difficulty" value="hard" />
                <label for="hard">Difícil</label>
              </div>
            </div>

            <div id="tab-5" class="tab-pane">
              <h1>Profile Picture Upload</h1>
              <form id="profile-picture-form">
                <label for="profile-picture">Select a profile picture:</label>
                <input
                  type="file"
                  id="profile-picture"
                  accept="image/*"
                  required
                />
                <button type="submit">Upload</button>
              </form>
              <div id="preview-container">
                <h2>Preview</h2>
                <img id="preview" src="" alt="Preview" />
              </div>
            </div>
          </div>
        </main-->

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
