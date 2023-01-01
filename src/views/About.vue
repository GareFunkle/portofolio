<template>
    <div id="about" class="about__page">
        <img class="about__bg" src="../assets/bgsection2.svg" alt="">
        <div class="about__wrap-img">
            <img class="about__profil-img" src="../assets/mokup.svg" alt="">
            <div class="test">
                <img class="about__logo" src="../assets/logo.svg" alt="">
            </div>
            <div class="about__profil">
                <div class="about__profil-wrap">
                    <img class="about__img-avatar" src="../assets/avatar.jpg" alt="">
                    <div class="name__wrap">
                        <h3 class="name">Vincent Durret</h3>
                        <p class="name__p">Devellopeur</p>
                    </div>
                </div>
                <hr class="lign">
                <div class="about__profil-skill">
                    <div class="skill__wrap">
                        <img class="skill__img" src="../assets/science.png" alt="">
                        <span class="skill">React</span>
                    </div>
                    <div class="skill__wrap">
                        <img class="skill__img" src="../assets/vue.svg" alt="">
                        <span class="skill">Vue</span>
                    </div>
                    <div class="skill__wrap">
                        <img class="skill__img" src="../assets/wordpress.png" alt="">
                        <span class="skill">Wordpress</span>
                    </div>
                    <div class="skill__wrap">
                        <img class="skill__img" src="../assets/firebase.png" alt="">
                        <span class="skill">Firebase</span>
                    </div>
                </div>
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
            width: 20rem;
        }

        .test {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
            top: 51.5vh;
            left: 29.7%;
            width: 15.5rem;
            height: 33.7rem;
            border-radius: 30px;
            animation: start 7s ease-in-out;
            filter: drop-shadow(1px 1px 40px var(--h1-color));
            // background: #000;

            @keyframes start {
                0% {
                    background: black;
                    opacity: 1;
                }

                50% {
                    background: black;
                    opacity: 1;
                }

                100% {
                    background: black;
                    opacity: 0;
                }
            }

            .about__logo {

                width: 8rem;
                visibility: hidden;
                animation: test 7s ease-in-out;

                @keyframes test {
                    0% {
                        visibility: visible;
                        opacity: 1;
                    }

                    100% {
                        visibility: visible;
                        opacity: 0;
                    }
                }
            }

        }

        .about__profil {
            position: absolute;
            z-index: 0;
            top: 56vh;
            left: 35.8rem;
            box-sizing: border-box;
            // border: 1px solid black;
            height: 30rem;
            border-radius: 25px;

            .about__profil-wrap {
                display: flex;
                align-items: center;
                justify-content: center;


                .about__img-avatar {
                    width: 5rem;
                    height: 5rem;
                    margin-right: 10px;
                    border-radius: 50%;
                }

                .name__wrap {

                    .name {
                        color: var(--h1-color);
                    }

                    .name__p {
                        color: var(--p-color);
                    }
                }
            }

            .lign {
                width: 100%;
                border: 0.01 px solid var(--h1-color);
                font-weight: bold;
                margin-top: 10%;
            }

            .about__profil-skill {
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding: 1rem;
                box-sizing: border-box;
                // border: 1px solid black;
                height: 25rem;

                .skill__wrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 0.2rem;

                    .skill__img {
                        width: 5rem;


                    }


                    .skill {
                        // margin-top: 25px;
                        color: var(--p-color);
                    }
                }
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
        position: relative;
        top: -15vh;

        .about__list {
            margin-left: 6rem;

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