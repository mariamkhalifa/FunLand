<template>
    <section id="attCon">
        <h2>All Attractions</h2>
        <p>This is a list of all the fun stuff you can do in the park.<br>Be prepared for a <span>fun</span> filled day!</p>
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
    #attCon {
        margin-top: 100px;

        h2 {
            text-align: center;
        }
        p {
            text-align: center;
            margin: 20px 20px 0;
            font-size: 25px;
            line-height: 29px;

            span {
                font-family: var(--title-font);
                color: var(--orange);
                font-size: 30px;
            }
        }
    }
</style>