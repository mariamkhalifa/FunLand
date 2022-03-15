<template>
    <section>
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
        
        <p><span>Price:</span>{{ attraction.price }}</p>

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
            else {
                return this.hasRestrictions = true;
            }
        })
        .catch(err=>console.log(err));
    }
}
</script>

<style lang="scss" scoped>

</style>