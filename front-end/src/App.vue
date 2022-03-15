<template>
    <div>
        <h1 class="hidden">Fun Land</h1>
        <header>
            <img src="/static/logo.svg" alt="logo">
            <nav>
                <h2>Main Navigation</h2>
                <nav-links></nav-links>
            </nav>
        </header>
        <router-view :attractions="attractions" />
    </div>
</template>

<script>
import NavLinks from './components/nav-links.vue';

export default {
    components: {
        NavLinks
    },

    data() {
        return {
             attractions: []
        }
    },

    created() {
        fetch("http://localhost:"+process.env.VUE_APP_API_PORT+"/api/attractions")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.attractions = data;
        })
        .catch(err=>console.log(err));
    }
}
</script>

<style lang="scss">
    header {
        background-color: var(orange);
    }
    img {
        width: 150px;
    }
</style>
