<template>
    <section>
        <h2>All Attractions</h2>

        <attractions-comp :attractions="attractions"></attractions-comp>
    </section>
</template>

<script>
import AttractionsComp from '../components/attractions-comp.vue';

export default {
    props: ['attractions'],

    components: {
        AttractionsComp
    }
}
</script>

<style lang="scss" scoped>

</style>