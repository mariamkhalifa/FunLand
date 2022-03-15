<template>
    <section>
        <h2 class="hidden">Home</h2>

        <div class="container">
            <p>Loads of Fun</p>
            <p>for everyone</p>
            <p>We have a roller coaster, carousel, ferris wheel and... The list is too long!</p>
            <div class="button">
                <router-link to="/attractions">Just click for the full list</router-link>
            </div>
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
    .container {
        background-image: url('/static/roller-coaster.jpg');
        background-position: center;
        height: 500px;
    }
</style>