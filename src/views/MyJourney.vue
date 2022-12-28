<template>
    <div id="myjourney" class="myjourney__page">
        <img class="myjourney__bg" src="../assets/bgsection3.svg" alt="">
        <h1>Mon parcours</h1>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.myjourney__page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .myjourney__bg {
        position: absolute;
        z-index: -1;
        // width: 5rem;
        top: 228.4vh;
        left: -1rem;
    }
}

</style>