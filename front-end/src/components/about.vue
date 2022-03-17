<template>
    <section id="aboutCon">
        <h2>About Us</h2>
        <p>At <span>Fun Land</span>, our goal is to make sure everyone has fun. It's the place to forget about the stresses of everyday life. Smiles, giggles and enthusiastic screams are our favourite sounds. We have a ride for everyone.</p>
        <img src="/static/waterfall.jpg" alt="waterfall">
        <p>Just relax and have <span>fun!</span></p>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #aboutCon {
        background-color: var(--blue-d);
        color: var(--white);
        margin: 100px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
        
        h2 {
            color: var(--white);
        }

        p {
            margin-top: 30px;
            text-align: center;
            max-width: 600px;

            span {
                color: var(--orange);
                font-family: var(--title-font);
                font-size: 28px;
            }
        }

        p:last-child {
                font-size: 30px;
                font-family: var(--title-font);
                margin-top: 40px;
            }

        img {
            width: 80%;
            margin-top: 40px;
            max-width: 500px;
        }
    }

</style>