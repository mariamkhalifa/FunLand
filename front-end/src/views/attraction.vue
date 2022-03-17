<template>
    <section class="detailsCon">
        <h3>{{ attraction.name }}</h3>

        <img :src="`/static/${attraction.image}`" :alt="attraction.name">

        <p>{{ attraction.desc }}</p>

        <ul v-if="this.hasRestrictions">
            <li v-for="(restriction, index) in attraction.restrictions" :key="index">
                <h4>Minimum Height:</h4>
                <p>{{ restriction.height }}</p>
                <h4>Other Restrictions:</h4>
                <p>{{ restriction.other }}</p>
            </li>
        </ul>
        
        <div>
            <h4>Price:</h4>
            <p>{{ attraction.price }}</p>
        </div>

        <router-link class="backBtn" to="/attractions">Back</router-link>
    </section>
</template>

<script>
export default {
    data() {
        return {
            attraction: {},
            hasRestrictions: true
        } 
    },

    created() {
        
        fetch(`http://localhost:3002/api/attraction/${this.$route.params.id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.attraction = data;

            if(this.attraction.name === 'Restaurant') {
                return this.hasRestrictions = false;
            }
            else if(this.attraction.name === 'Arcades') {
                return this.hasRestrictions = false;
            }
            else if(this.attraction.name === 'Carousel') {
                return this.hasRestrictions = false;
            }
            else {
                return this.hasRestrictions = true;
            }
        })
        .catch(err=>console.log(err));
    }
}
</script>

<style lang="scss" scoped>
    .detailsCon {
        display: flex;
        flex-direction: column;
        margin: 100px 40px;

        h3 {
            text-align: center;
        }

        img {
            margin: 40px auto;
            width: 80%;
            max-width: 500px;
            display: block;
        }

        h4 {
                margin-top: 20px;
                font-size: 24px;
            }

        p {
            margin-top: 10px;
        }
    }

    .backBtn {
        margin-top: 40px;
        padding: 20px 30px;
        background-color: var(--blue-d);
        width: fit-content;
        color: var(--white);
        border-radius: 5px;
        font-family: var(--title-font);
        font-size: 24px;
        transition: all .5s ease-in-out;

        &:hover {
            background-color: var(--orange);
        }
    }

    @media screen and (min-width: 800px) {
        .detailsCon {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            h3 {
                grid-column: 1/-1;
                margin-bottom: 40px;
            }

            img {
                grid-row: 2/6;
                margin: 10px 0 0;
            }
        }
    } 
</style>