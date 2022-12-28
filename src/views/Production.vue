<template>
    <div class="production__page" id="production">
        <img  class="production__bg" src="../assets/bgsection4.svg" alt="">
        <h1>Mes realisations</h1>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
.production__page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .production__bg {
        position: absolute;
        z-index: -1;
        // width: 5rem;
        top: 343.4vh;
        left: -1rem;
    }
}
</style>