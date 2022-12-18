<template>
    <header class="header">
        <a href="">A propos de moi</a>
        <a href="">Mon parcours</a>
        <div class="header__logo-wrap">
            <img class="img" src="../assets/logo.svg" alt="">
            <div class="header__title">
                <h1>Vincent Durret</h1>
                <div class="header__p-wrap">
                    <p>Developpeur Web</p>
                </div>
            </div>
        </div>
        <a href="">Mes realisations</a>
        <a href="">Contactez-Moi !</a>

    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
    box-sizing: border-box;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #d8e7f5c9;
    margin-top: 3rem;

    a {
        color: #387EC1;
        font-weight: bold;

    }

    .header__logo-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        .img {
            width: 15rem;
        }


        .header__title {

            h1 {
                color: #387EC1;
                font-size: 2.2rem;
                font-weight: bold;
            }

            .header__p-wrap {
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    font-weight: bold;
                    color: #387EC1;
                    font-size: 1.2rem;
                }
            }
        }
    }
}
</style>