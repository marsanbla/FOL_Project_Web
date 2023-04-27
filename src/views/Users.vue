<template>
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
          <v-btn color="success" class="mr-4" @click="deletePost(u.name, u.rol)"
            >X</v-btn
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
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
  },
};
</script>
