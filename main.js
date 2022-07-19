// const app = Vue({})

const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            // inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', isActive: false },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', isActive: true },
            ],
            /* styles: {
                color: 'red',
                fontSize: '14px',
            }, */
            activeClass: true,
            isActive: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    },
    computed: {     // this property calculate/compute values
        title() {
            return this.brand + ' ' + this.product;
        }
    }
})