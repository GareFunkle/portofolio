<template>
    <div id="about" class="about__page">
        <div class="about__wrap-img">
            <img class="about__profil-img" src="../assets/mokup.svg" alt="">
            <div class="test">
                <p>Bonjour !</p>
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
    box-sizing: border-box;
    height: 100vh;

    .about__wrap-img {

        // transform: rotateY(45deg) skewY(20deg);
        animation: rotation 3s;


        @keyframes rotation {
            0% {
                transform: rotateY(20deg) skewY(10deg);
            }

            100% {
                transform: rotateY(0deg) skewY(0deg);
            }
        }



        .about__profil-img {
            position: relative;
            z-index: 2;
            left: 27%;
            top: 30vh;
            width: 20rem;
        }

        .test {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 0;
            top: 52.5vh;
            left: 30.5%;
            width: 15.5rem;
            height: 33.7rem;
            border-radius: 30px;
            animation: start 3s ease-in-out;
            filter: drop-shadow(1px 1px 40px var(--h1-color));
            // background: #000;

            @keyframes start {
                0% {
                    background: black;
                    top: 29vh;
                    left: 31%;
                    opacity: 1;
                }

                // 50% {
                //     background: black;
                //     top: 40.5vh;
                //     left: 30%;
                //     opacity: 0.5;
                // }

                100% {
                    background: black;
                    top: 31.5vh;
                    left: 29.5%;
                    opacity: 0;
                }
            }

            p {
                color: white;
                font-weight: bold;
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