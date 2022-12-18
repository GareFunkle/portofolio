<template>
    <div class="section1">
        <img class="profil" src="../assets/profil.jpg" alt="">
        <img class="test" src="../assets/test.svg" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.section1 {
    .profil {
        position: relative;
        left: 25%;
        top: 25vh;
        width: 20rem;
    }

    .test {
        position: absolute;
        width: 60rem;
        right: 0;
        top: 30vh;
        animation: left_fade 1s ease-in-out;

        @keyframes left_fade {
            0% {
                transform: translateX(-5rem);
                opacity: 0;
            }

            100% {
                transform: translateX(0rem);
                opacity: 1;
            }
        }
    }
}
</style>