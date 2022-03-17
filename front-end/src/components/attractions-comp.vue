<template>
    <ul class="attList">
        <li v-for="(attraction, index) in attractions" :key="index">
            <router-link :to="`/attraction/${attraction._id}`">
                <h3>{{ attraction.name }}</h3>
                <img :src="`/static/${attraction.thumb}`" :alt="attraction.name">
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
    .attList {
        margin: 80px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            padding: 20px;
            border: 3px solid var(--blue-l);
            margin-bottom: 30px;
            max-width: 300px;
            transition: all .5s ease-in-out;
            cursor: pointer;

            &:hover {
                border: var(--orange) 3px solid;
                transform: scale(0.995);
            }

            h3 {
                text-align: center;
            }

            img {
                display: block;
                width: 80%;
                margin: 20px auto 0;
            }
        }        
    }

    @media screen and (min-width:900px) {
        .attList {
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
            gap: 30px;
        }
    }
</style>