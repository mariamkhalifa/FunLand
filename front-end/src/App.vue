<template>
    <div>
        <h1 class="hidden">Fun Land</h1>
        <header id="header">
            <img id="logo" src="/static/logo.svg" alt="logo">
            <nav>
                <h2 class="hidden">Main Navigation</h2>
                <nav-links></nav-links>
            </nav>
        </header>
        <transition name="slide-fade">
            <router-view :attractions="attractions" />
        </transition>
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
    #header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
    }

    #logo {
        width: 200px;
    }

    .slide-fade-enter-active {
        transition: all .5s ease;
    }

    .slide-fade-leave-active {
        transition: all .5 ease-in-out;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(-100px);
        opacity: 0;
    }

    @media screen and (min-width: 700px) {
        #header {
            flex-direction: row;
            justify-content: space-between;
        }
    } 
</style>
