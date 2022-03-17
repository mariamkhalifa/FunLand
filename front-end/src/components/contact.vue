<template>
    <section id="contactCon">
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
    #contactCon {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;

        p {
            margin-top: 20px;
            text-align: center;
            padding: 0 40px;
            max-width: 700px;
        }

        form {
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            width: 60%;
            max-width: 700px;

            label {
                color: var(--blue-d);
                font-family: var(--title-font);
                font-size: 24px;
                margin-top: 20px;
            }

            input, textarea {
                padding: 10px;
                margin-top: 10px;
                border: var(--blue-l) 2px solid;
                border-radius: 5px;

                &:hover, &:focus {
                    border: var(--orange) 2px solid;
                }
            }

            input[type=submit] {
                background-color: var(--blue-d);
                border: none;
                color: var(--white);
                padding: 20px;
                font-family: var(--title-font);
                font-size: 26px;
                margin-top: 30px;

                &:hover {
                    background-color: var(--orange);
                }
            }
        }
    }
</style>