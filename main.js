const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inventory: 0,
      onSale: this.inventory > 0,
    };
  },
  methods: {
    onClick(descOrInc) {
      if (descOrInc) {
        this.inventory++;
      } else {
        this.inventory <= 0 ? null : (this.inventory -= 1);
      }
    },
  },
});
