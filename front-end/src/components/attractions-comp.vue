<template>
    <ul>
        <li v-for="(attraction, index) in attractions" :key="index">
            <router-link :to="`/attraction/${attraction._id}`">
                <p>{{ attraction.name }}</p>
                <img :src="`/static/${attraction.image}`" :alt="attraction.name">
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['attractions']
}
</script>

<style lang="scss" scoped>

</style>