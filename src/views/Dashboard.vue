<template>
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
      <router-link to="/home/users"
        ><button style="color: blue">Show all</button></router-link
      >
    </div>
  </div>
</template>

<style>



</style>