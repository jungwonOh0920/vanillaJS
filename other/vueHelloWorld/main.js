const app = Vue.createApp({
    data() {
        return {
            itemsInCart: 0,
            premium: true
        }
    },
    methods: {
        addCart() {
            this.itemsInCart++
        }
    },

})