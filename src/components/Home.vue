<template>
  <!-- particles.js container -->
  

<div class="thatDiv">

  <div id="particles-js"> 

  <h1 class="eg"> <span class="enc">EncryptoGram</span> </h1>

  </div>
  <div class="spaceTaker"></div>
</div>
 
</template>

<script>
export default {
  mounted() {
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

}
</script>

<style scoped>
/* ---- reset ---- */ 
body{ margin:0;
font:normal 75% Arial, Helvetica, sans-serif;
} 
#particles-js{ position:absolute;
z-index: -10;
width: 100%;
margin-bottom: -20%;
margin-left: -10%;
height: 100%;
background-image: url("");
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
}

.eg {
  text-align: center;
  margin-bottom: -4%;
  z-index: 5;

}



.enc {
  font-size: 400%;
  background: rgba(0, 0, 0, 0);
  margin-bottom: -20%;
}


</style>