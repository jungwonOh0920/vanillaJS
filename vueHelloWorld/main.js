const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            url: 'https://www.google.com',
            details: ['50% cotton', '30% wool', '20% polyester'],
            selectedVariantIdx: 0,
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}]
        }
    },
    methods: {
        addCart() {
            this.cart++
        },
        decreaseCart() {
            if (this.cart) this.cart--
        },
        updateVariant(idx) {
            this.selectedVariantIdx = idx
        }
    },
    computed: {
        getTitle() {
            return this.brand + ' ' + this.product
        },
        getImage() {
            return this.variants[this.selectedVariantIdx].image
        },
        isInStock() {
            return this.variants[this.selectedVariantIdx].quantity
        }
    }
})