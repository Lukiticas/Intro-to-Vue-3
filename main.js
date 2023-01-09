const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      hover: false,
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    removeFromCart() {
      if (this.cart <= 0) return;
      this.cart -= 1;
    },
    changeColorInHover(newImg) {
      this.image = newImg;
    },
  },
});
