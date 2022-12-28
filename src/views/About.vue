<template>
    <div id="about" class="about__page">
        <img class="about__bg" src="../assets/bgsection2.svg" alt="">
        <div class="about__wrap-img">
            <img class="about__profil-img" src="../assets/mokup.svg" alt="">
            <div class="test">
                <p>Bonjour !</p>
            </div>
            <div class="about__wrap-profil">
                <img class="about__img-avatar" src="../assets/avatar.jpg" alt="">
                <p class="name">Vincent Durret</p>
            </div>
        </div>
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
    height: 100vh;

    .about__bg {
        position: absolute;
        z-index: -1;
        top: 113.3vh;
        left: -1rem;
    }

    .about__wrap-img {

        .about__profil-img {
            position: relative;
            z-index: 2;
            left: 27%;
            top: 30vh;
            width: 30rem;
        }

        .test {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
            top: 52.5vh;
            left: 30.7%;
            width: 23.1rem;
            height: 50.3rem;
            border-radius: 41px;
            animation: start 3s ease-in-out;
            filter: drop-shadow(1px 1px 40px var(--h1-color));

            @keyframes start {
                0% {
                    background: black;
                    opacity: 1;
                }


                100% {
                    background: black;
                    opacity: 0;
                }
            }

            p {
                color: white;
                font-weight: bold;
            }
        }

        .about__wrap-profil {
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 0;
            .about__img-avatar {
                position: relative;
                width: 5rem;
                height: 5rem;
                margin-right: 15px;
                left: -16.5rem;
                top: -13rem;
                border-radius: 50%;

            }

            .name {
                position: relative;
                top: -11.5rem;
                left: -16rem;
            }


        }
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
                transform: scale(1.6);
                margin-top: 1rem;
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