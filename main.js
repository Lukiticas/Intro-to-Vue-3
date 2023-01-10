const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart(id) {
      if (this.cart.length <= 0) return;
      let removedItem = this.cart.filter((item) => item === id);

      if (removedItem.length <= 0) return;

      removedItem.pop();
      const otherItems = this.cart.filter((item) => item !== id);
      this.cart = [...otherItems, ...removedItem];
    },
  },
});
