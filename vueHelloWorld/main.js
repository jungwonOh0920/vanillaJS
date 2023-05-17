const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {
        decreaseCart() {
            if (this.cart) this.cart--
        },
    },

})