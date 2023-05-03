<template>
    <div class="round-1"></div>
	<div class="round-2"></div>
	<div class="wrapper">
		<div class="box">
            <div>
            <input type="file" @change="previewImage" ref="fileInput">
            <button @click="uploadImage">Upload</button>
            <img v-if="profileImageUrl" :src="profileImageUrl" />
          </div>
			<h2>Joan Parera <span>Barcelona, ESPAÑA</span></h2>
			<p>Front-End Developer &<br>
			Graphics Designer</p>
			<p class="btn-area"><a href="#">Message</a> <a class="ex" href="#">Following</a></p>
                
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProfileImage',
  data() {
    return {
      profileImageUrl: '',
      imageFile: null,
    };
  },
  methods: {
    previewImage() {
      if (!this.$refs.fileInput.files[0]) return;
      this.imageFile = this.$refs.fileInput.files[0];
      this.profileImageUrl = URL.createObjectURL(this.imageFile);
    },
    uploadImage() {
      const formData = new FormData();
      formData.append('profileImage', this.imageFile);
      axios.post('http://localhost:3000/saveprofileimage', formData).then((response) => {
        alert(response.data.message);
      }).catch((err) => {
        console.error(err);
        alert('Error uploading image');
      });
    },
  },
};
</script>
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: none;
	border: none;
	font-family: 'Poppins', sans-serif;
}
body {
	background: black;
}
.wrapper {
	width: 1152px;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	margin: 0 auto;
	position: relative;
}
.round-1 {
	position: absolute;
	top: 5%;
	left: 32%;
	width: 13em;
	height: 13em;
	border-radius: 50%;
	box-shadow: 0 0 50px #D84869;
	background: linear-gradient(-25deg, #D84869, #F46641);
}
.round-2 {
	position: absolute;
	top: 50%;
	right: 23%;
	width: 19em;
	height: 19em;
	border-radius: 50%;
	box-shadow: 0 0 50px #5622FF;
	background: linear-gradient(180deg, #5622FF, #4190FD);
}
.box {
	width: 350px;
	height: 450px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    background-color: black;	backdrop-filter: blur(20px);
	padding: 1.5em;
	border-radius: 25px;
	border: 2px solid #ffffff30;
	box-shadow: 0 0 30px #0000002a;
	text-align: center;
}
.box h2 {
	color: #ffffff60;
	text-transform: capitalize;
	margin: 15px 0;
}
.box h2 span {
	display: block;
	font-size: 15px;
	font-weight: 300;
	text-transform: capitalize;
}
.box p {
	color: #ffffff90;
	font-size: 14px;
}
.btn-area a {
	text-decoration: none;
	color: #262626;
	background: rgba(255, 255, 255, 0.6);
	display: inline-block;
	padding: 8px 15px;
	margin: 15px 5px;
	border: 2px solid rgba(255, 255, 255, 0.6);
}
.btn-area a.ex {
	background: transparent;
	color: #fff;
}
.socials {
	margin-top: 20px;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
}

.profile-img {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	overflow: hidden;
	object-fit: cover;
}
.profile-img img {
	width: 100%;
}

</style>