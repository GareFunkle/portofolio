

<template>
  <div class="page">
    <img class="bg" src="./assets/bg1.svg" alt="">
    <Header class="headers" />
    <Section1   />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Section1 from './components/Section1.vue';
export default {
  components: {
    Header,
    Section1
}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
}

.page {

  .bg {
    position: absolute;
    z-index: 0;
    top: 0;
    animation: fade 1s ease-in-out;

    @keyframes fade {
      0% {
        opacity: 0;
        transition: 0.3s;
      }

      50% {
        opacity: 0.5;
        transition: 0.3s;

      }

      100% {
        opacity: 1;
        transition: 0.3s;

      }

    }
  }

  .headers {
    position: relative;
    z-index: 1;
  }

 
}
</style>
