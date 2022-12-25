
<template>
  <div class="page">
    <img class="page__bg" src="./assets/bg1.svg" alt="">
    <div class="page__wrap">
      <Header class="page__headers" />
      <About />
      <MyJourney />
      <Production />
      <Contact />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './views/About.vue';
import MyJourney from './views/MyJourney.vue';
import Production from './views/Production.vue';
import Contact from './views/Contact.vue';


export default {
  components: {
    Header,
    About,
    MyJourney,
    Production,
    Contact
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  --h1-color: #387EC1;
  --p-color: #a2c8eb;
  --blue-light: #d8e7f5;
  --background: rgba(255, 255, 255, 0.794);
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
}

.page {

  .page__bg {
    position: absolute;
    z-index: -1;
    top: -1rem;
    left: -1rem;
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

  .page__wrap {

    box-sizing: border-box;
    margin: 2rem;
    background: var(--background);


    .page__headers {
      position: relative;
      z-index: 1;
    }
  }




}
</style>
