var app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),

  data: {
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

  },

  methods: {
    deletePost: function (nomUsuari, rol) {
      let callback = () => {
        console.log("Ha entrat a delete post");

        this.usersPost();
        this.usuaris = this.postData;

        console.log("usuaris del post data dins userpost", this.postData);

        console.log("usuaris dins userpost", this.username);
        window.dataUser = this;


        this.loading = false;
      };

      console.log("Rol: ", rol);

      if (rol != "admin") {
        console.log("Ha entrat al if");
        this.doFetchPost(
          "http://localhost:3000/deletePost",
          { userid: nomUsuari },
          callback
        );
      }
    },

    updateSettings: function () {
      console.log("Ha entrat a update settings client");
      let callback = () => {
        this.zombiedialog = false;
        this.characters = true;
        this.settings = false;
        this.stats = false;
        this.loginpage = false;
        this.verpagina = false;

        this.loading = false;

        this.playerFireRate = this.postData.playerFireRate;
        this.playerhealth = this.postData.playerMaxHealth;
        this.playerspeed = this.postData.playerSpeed;
      };

      this.doFetchPost(
        "http://localhost:3000/updateSettingsPost",
        {
          playerSpeed: this.playerspeed,
          playerFireRate: this.playerFireRate,
          playerHealth: this.playerhealth,
        },
        callback
      );
    },

    loadSettings: function () {
      let callback = () => {
        this.characters = true;
        this.settings = false;
        this.stats = false;
        this.loginpage = false;
        this.verpagina = false;

        this.loading = false;
        this.playerFireRate = this.postData.playerFireRate;
        this.playerhealth = this.postData.playerMaxHealth;
        this.playerspeed = this.postData.playerSpeed;
      };

      this.doFetchPost("http://localhost:3000/getSettingsPost", {}, callback);
    },

    usersPost: function () {
      let callback = () => {
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

        this.loading = false;
      };

      this.doFetchPost(
        "http://localhost:3000/usersPost",
        { userid: this.username, passwdid: this.passwd },
        callback
      );
    },

    getAuthPost: function () {
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
        this.loading = false;
      };

      this.doFetchPost(
        "http://localhost:3000/authPost",
        { name: this.username, password: this.passwd },
        callback
      );
    },
    getLogOutPost: function () {
      var callback = () => {
        this.snackbar = true;
        this.text = this.postData.text;
        this.loading = false;
        this.auth = false;
        this.loginpage = true;
      };
      this.doFetchPost("http://localhost:3000/logOutPost", {}, callback);
    },
    register: function () {
      var callback = () => {
        this.snackbar = true;
        this.text = this.postData.text;
        this.loading = false;
        this.auth = false;
        this.loginpage = true;
      };
      this.doFetchPost(
        "http://localhost:3000/register",
        { name: this.username, password: this.passwd },
        callback
      );
    },

    doFetchPost: function (url, data, callback) {
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
          setTimeout(callback, this.timeout);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

const sideMenu = document.querySelector("#sidebar"); // en vez de sidemenu era aside
const menubtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const tema = document.querySelector(".tema");
const dashbtn = document.querySelector("#dash");

menubtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
dashbtn.addEventListener("click",()=>{
  alert("hello")
})
tema.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  tema.querySelector("span:nth-child(1)").classList.toggle("active");
  tema.querySelector("span:nth-child(2)").classList.toggle("active");
});


function changeTab(evt, tabName){

  if (tabName=='tab-2'){
    var callback = () => {
      this.snackbar = true;
      this.text = this.postData.text;
      this.loading = false;
      this.auth = false;
      this.loginpage = true;
    };
    this.doFetchPost("http://localhost:3000/logOutPost", {}, callback);

  }


  var i,tabPane,tabButton;
  tabPane= document.getElementsByClassName("tab-pane");

  for(i=0; i<tabPane.length;i++){
    tabPane[i].style.display = "none";
  }

  tabButton=document.getElementsByClassName("tab-button");
  for(i=0; i<tabButton.length;i++){
    tabButton[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
  console.log("clicked button");
}
//ChartJS
// Retrieve data from server
fetch('/data')
  .then(response => response.json())
  .then(data => {
    // Format data for Chart.js
    const chartData = {
      labels: data.map(item => item.label),
      datasets: [{
        label: 'My Dataset',
        data: data.map(item => item.value),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };
    // Create Chart.js chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {}
    });
  })
  .catch(error => console.error(error));
//Dificulty 

  const difficultySelector = document.querySelector('.difficulty-selector');
const radios = difficultySelector.querySelectorAll('input[type="radio"]');
let selectedDifficulty;

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    selectedDifficulty = radio.value;
    console.log(`La dificultad seleccionada es: ${selectedDifficulty}`);
  });
});

//
const imgDiv = document.querySelector('profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');


imgDiv.addEventListener('mouseenter', function(){
  uploadBtn.style.display="block";
});

imgDiv.addEventListener('mouseleave',function(){
  uploadBtn.style.display="none";
});

file.addEventListener('change',function(){
  const choosedFile = this.files[0];

  if(choosedFile){
    const reader = new FileReader();

    reader.addEventListener('load', function
    (){
      img.setAttribute('src', reader.result);
    });
  
    reader.readAsDataURL(choosedFile);
  }
});

