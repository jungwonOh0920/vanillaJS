app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="getImage" :class="[isInStock ? '' : 'out-of-stock-img']">
                </div>
                <div class="product-info">
                    <h1>{{ getTitle }}</h1>
                    <a v-bind:href="url" target="_blank">Google link</a>
                    <p v-if="isInStock">In stock</p>
                    <p v-else>Out of stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <ul>
                        <li v-for="d in details">{{ d }}</li>
                    </ul>

                    <div v-for="(variant, idx) in variants" :key="variant.id" @mouseover="updateVariant(idx)"
                        class="color-circle" :style="{'background-color': variant.color}">
                    </div>

                    <button v-on:click="addCart" class="button" :class="{disabledButton: !isInStock}"
                        :disabled="!isInStock">Add to
                        Cart</button>
                    <button v-on:click="decreaseCart" class="button">Take one off</button>
                </div>
            </div>
        </div>`,
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
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})