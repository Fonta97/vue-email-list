const { createApp } = Vue;

createApp({
    data() {
        return {
            numRandomEmails: 10,
            mail: [],
        }
    },
    methods: {
        generateEmail() {

            this.mail.length = 0;


            for (let i = 0; i < this.numRandomEmails; i++) {

                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(
                        response => {
                            this.mail.push(response.data.response);
                        }
                    );
            }

        }
    },
    mounted() {
        this.generateEmail()
    }
}).mount("#app")