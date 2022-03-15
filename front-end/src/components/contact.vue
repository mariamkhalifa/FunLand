<template>
    <section>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>

        <form>
            <label for="name">Name:</label>
            <input id="name" name="name" type="text">

            <label for="email">Email:</label>
            <input id="email" name="email" type="email">

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="7" cols="11"></textarea>

            <input type="submit" value="Send">
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: "Contact Us",
            text: "We're here to help you with any questions or concerns you might have. Just fill out the form and we'll get back to you asap."
        }
    }
}
</script>

<style lang="scss" scoped>

</style>