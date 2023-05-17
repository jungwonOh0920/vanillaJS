const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com',
            inventory: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}]
        }
    },
    methods: {
        addCart() {
            console.log('this: ', this)
            this.cart++
        },
        updateImage(newImage) {
            this.image = newImage
        }
    }
})