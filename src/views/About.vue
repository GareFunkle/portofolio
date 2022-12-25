<template>
    <div id="about" class="about__page">
        <img class="about__profil-img" src="../assets/profil.jpg" alt="">
        <img class="about__img" src="../assets/test.svg" alt="">
        <div class="about__left-wrap">
            <ul class="about__list">
                <li class="about__list-point">

                </li>
                <li class="about__list-point">

                </li>
                <li class="about__list-point">

                </li>
                <li class="about__list-point">

                </li>
                <li class="about__list-point">

                </li>
                <li class="about__list-point">

                </li>
            </ul>
            <h1 class="about__title">Developpeur Web</h1>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about__page {
    box-sizing: border-box;
    height: 100vh;

    .about__profil-img {
        position: relative;
        left: 25%;
        top: 30vh;
        width: 20rem;
    }

    .about__img {
        position: absolute;
        width: 50rem;
        right: 0;
        top: 45vh;
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

    .about__left-wrap {
        display: flex;


        .about__list {
            margin-left: 3rem;

            .about__list-point {
                color: var(--h1-color);
                cursor: pointer;
            }
        }

        .about__title {
            margin-left: 1rem;
            color: var(--h1-color);
            position: relative;
            top: -10rem;
        }
    }

}
</style>