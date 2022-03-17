<template>
    <section>
        <h2 class="hidden">Home</h2>

        <div id="heroCon">
            <img class="hero" src="/static/ferris-wheel.jpg" alt="ferris wheel">
            
            <div class="text">
                <p>Loads of Fun</p>
                <p>For Everyone</p>
                <p>We have a roller coaster, carousel, ferris wheel and... The list is too long!</p>
            </div>

            <router-link class="button" to="/attractions">Just click for the full list</router-link>
        </div>

        <about></about>

        <contact></contact>
    </section>
</template>

<script>
import About from '../components/about.vue';
import Contact from '../components/contact.vue';

export default {
    components: {
        About,
        Contact
    }
}
</script>

<style lang="scss" scoped>
    #heroCon {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    }

    .hero {
        width: 90%;
    }

    .text {
        text-align: center;
        margin-top: 30px;

        p:first-child {
            font-size: 40px;
            font-family: var(--title-font);
            color: var(--blue-d);
        }

        p:nth-child(2) {
            font-size: 30px;
            margin-top: 20px;
            font-family: var(--title-font);
            color: var(--blue-d);
        }

        p:last-child {
            margin-top: 20px;
            padding: 0 20px;
        }
    }

    .button {
        //background-color: var(--blue-d);
        border: var(--orange) 3px solid;
        border-radius: 5px;
        margin-top: 20px;
        padding: 20px 30px;
        //color: var(--white);
        color: var(--blue-d);
        font-size: 28px;
        font-family: var(--title-font);
        transition: all .5s ease-in-out;

        &:hover {
            background-color: var(--blue-l);
            border: var(--blue-l) 3px solid;
        }
    }

    @media screen and (min-width: 700px) {
        #heroCon {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin: 100px auto 0;
            max-width: 1200px; 
        }

        .hero {
            grid-column: 2;
            grid-row: 1/3;
            max-width: 500px;
            justify-self: center;
            margin-left: 10vw;
        }

        .text {
            justify-self: center;
            max-width: 500px;

            p:last-child {
                margin-top: 40px;
            }
        }

        .button {
            text-align: center;
            width: 60%;
            max-width: 300px;
            justify-self: center;
        }
    }
</style>