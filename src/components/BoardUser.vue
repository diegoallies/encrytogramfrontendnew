<template>

<h1 class="feed">feed</h1>

<div class="body">


  
   
<div class="container">

  <div class="row">
      

    <div class="col-7">

     <div class="spaceTaker">
   <!-- consumes space --> 
 </div>

<div v-for="post in posts" :key="post">
      <div class="bg-dark bloc aqua-border">
      <h2 class="hed bg-dark">{{ post.fullname }}</h2>
      <h5 class="txt bg-dark">{{ post.postText }}</h5>
      <br>
      <div class="p-image"><img :src="post.img" /></div>
    </div>
</div>

<div class="eofLine">
  <h1 class="eof">End of feed</h1>
</div>

<div class="stk"></div>


    </div>

    <div class="col">
      
  
  <form @submit.prevent="addPost" class="forme aqua-border">

        <h1>Hello {{ currentUser.fullname }} 👋</h1>
        <h2 class="cnp">Create new post</h2>
        <div class="form-group">
          <label for="postText">Whats on your mind:</label>
          <input name="postText" type="text" class="form-control" v-model="postText" />
        </div>

        <div class="form-group">
          <label for="img">Image URL:</label>
          <input name="img" type="text" class="form-control" v-model="img" />
        </div>

        <div class="form-group">
          <button class="btn glow-on-hover btn-block" :disabled="loading" type="submit">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm bg-blue"
            ></span>
            <span class="bg-black" onclick="rld()">Submit</span>
          </button>
        </div>

  </form>
<!-- small bloxk at bottom right corner -->

       <div class="smallBlock aqua-border">
   <h1 class="eg"> EncryptoGram</h1>
          <div id="particles-js"></div>
       </div>

  
  
    </div>

    
  
  </div>
</div>
  








</div>




 
</template>

<style scoped>

.body{
  background-color: rgb(157, 204, 247);
}

.fn{
  visibility: hidden;
  margin-bottom: -20%;

}
.bloc {
  width: 100%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 1.5%;
  color: aqua;
  margin-top: 2%;
  margin-left: -2%;

}

.feed {
  position: fixed;
}

.p-image {
  object-fit: contain;
  overflow: hidden;

}

.p-image img {
  width: 100%;
}

.hed, .txt {
  margin-left: 2%;
  margin-top: -1%;
  border-radius: 10%;
}

.txt {
    margin-bottom: -1%;
}

.cnp {
  margin-top: 5%;
}

.forme {
  position: fixed;
  margin-top: 5.3%;
  margin-left: -2.5%;
  height: 60%;
  width: 37%;
  padding: 2%;
}

.feed {
  position: fixed;
}

.navv {
  visibility: hidden;
}

.spaceTaker {
  margin-top: 11%;
}

.bg-black {
  background: #111;
}

input {
  width: 100%;
}

.aqua-border {
  border: #00ffd5 0.5px solid;
  border-radius: 1.5%;
}

.smallBlock {
  margin-top: 37.8%;
  margin-left: -2.5%;
  height: 26%;
  width: 37%;
  z-index: 2;
  position: fixed;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
 
}

.eof {
  text-align: center;
}

.eofLine {
  border: #00ffd5 solid 0.5px;
  border-left: #00ffd5 solid 0.5px;
  border-right: #00ffd5 solid 0.5px;
  margin-top: 2%;
  margin-left: -2%;
  width: 100%;
  border-radius: 1.5%;
  height: 2%;
  padding: 3%;
}

.stk {
  height: 0.3%;
}

.eg {
  margin-top: 11%;
  text-align: center;
  background: rgba(0, 0, 0, 0);
}

/* code for button */


.glow-on-hover {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

/* particles */

#particles-js{ position:absolute;
width: 100%;
height: 100%;
margin-left: 0%;
background-image: url("");
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
margin-top: -23%;
}
</style>

<script>
export default {
  data() {
    return {
  posts: [],
  
  postText: "",
  img: "",
  
  

    };
  },
  methods:{
    addPost(){
    fetch("https://encryptogram-backend.herokuapp.com/posts/", {
        method: "POST",
        body: JSON.stringify({

        img: this.img,
        postText: this.postText,
        fullname: this.currentUser.fullname,
        
        atn: this.currentUser.accessToken
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ` + this.currentUser.accessToken
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

  }
  ,
  mounted() {
    fetch("https://encryptogram-backend.herokuapp.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        this.posts = data;
        console.log(data, this.posts);
      });

    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#2ae6ff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
   
  },

  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
    
  },
  
  // methods: {
  //   rld = function () {
  //     window.location.reload();
  //   }
  // },
};
</script>



