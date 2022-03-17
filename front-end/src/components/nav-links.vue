<template>
    <ul id="mainNav">
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/attractions">Attractions</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #mainNav {
        display: flex;
        margin-top: 80px;
        justify-content: space-evenly;
        gap: 30px;

        a {
            padding: 15px 30px;
            font-family: var(--title-font);
            transition: all .5s ease-in-out;
            font-size: 24px;
            color: var(--white);
            background-color: var(--blue-d);
            border-radius: 5px;

            &:hover {
               background-color: var(--orange);
            }
        }
    }
</style>