<template>
  <div id="tab-2" class="tab-pane margin_top">
    <table class="default margin_top">
      <tr>
        <th class="nomus">Index</th>

        <th>Nom usuari</th>
      </tr>

      <tr v-for="(u, index) in usuaris" :key="u.name">
        <td>{{ index }}</td>

        <td>{{ u.name }}</td>

        <td>{{ u.rol }}</td>

        <td>
          <button @click="confirmDelete(u.name)">Delete</button>
        </td>

        <td></td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.button {
  background-color: #0077be;
  color: #fff;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #005fa3;
}

.margin_top {
  margin-top: 10vw;
}
.table-container {
  max-width: 100%;
  overflow-x: auto;
  padding: 16px;
  background-color: #f2f2f2;
  border-radius: 4px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  padding: 12px;
  text-align: left;
}

th {
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #e6f2ff;
}

tr:hover {
  background-color: #cce6ff;
}

@media (max-width: 768px) {
  .table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th,
  td {
    display: inline-block;
    padding: 8px;
  }
}
</style>
<script>
export default {
  mounted() {
    this.getUserList();
  },
  data() {
    return {
      username: "",
      passwd: "",
      snackbar: false,
      text: "",
      loading: false,
      timeout: 1500,
      postData: null,
      auth: true,
      tab: null,
      users: false,
      usuaris: [],
      playerspeed: null,
      playerhealth: null,
      playerFireRate: null,
      playerdialog: false,
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
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
      this.loading = true;

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
          console.log(response);
          return response.json();
        })
        .then((data) => {
          this.postData = data;
          setTimeout(() => {
            callback(); // invoke the callback function here
          }, this.timeout);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getUserList() {
      console.log("Ha entrat a get UserList");
      let data = {
        username: this.username,
        passwd: this.passwd,
      };
      let callback = () => {
        this.snackbar = true;
        console.log("POSTDATA" + this.postData);
        this.usuaris = this.postData;
      };
      console.log("FETCH userpost");
      var response=await  this.doPromiseFetchPost("http://localhost:3000/usersPost1", data, callback);
      data=this.doDataFromResponse(response);
      this.users=data;
      console.log("HOLA");
    },
    async doDataFromResponse(response) {
      var data = await response.json();

      return data;
    },
    deleteUser(nomUsuari) {
      let callback = () => {
        console.log("Ha entrat a delete post");

        this.getUserList();
        this.characters = false;
        this.settings = false;
        this.stats = false;
        this.verpagina = false;
        this.users = true;
        this.snackbar = true;
        this.loginpage = false;

        this.usuaris = this.postData;

        console.log("usuaris del post data dins userpost", this.postData);

        console.log("usuaris dins userpost", this.username);
        window.dataUser = this;

        /*if (this.postData.users) {
          this.text = "Autoritzat. Roles => " + this.postData.roles;
          this.auth = true;
          this.verpagina=true;
          console.log('dins get auth post auth this.aut= ',this.auth);
        } else {
          this.text = "No autoritzat";
        }*/
        //this.loading = false;
      };

      this.doFetchPost(
        "http://localhost:3000/deletePost",
        { userid: nomUsuari },
        callback
      );
    },

    confirmDelete(nomUsuari) {
      if (window.confirm("Are you sure you want to delete this data?")) {
        this.deleteUser(nomUsuari);
      }
    },

    deletePost(name, rol) {
      // delete post logic here
    },
  },
};
</script>
