app.component("review-form", {
  template: /*html*/ `
        <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />

        <label for="review">Review:</label>
        <textarea name="reviewArea" id="review" v-model="review"></textarea>

        <label for="rating">Rating</label>
        <select name="ratingArea" id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        </select>

        <fieldset id="yesorno">
        <legend for="yesorno">Would you recommend this product?</legend>
        <label for="yes">Yes:</label>
        <input type="radio" name="yesorno" id="yes" value="yes" v-model="isRecommended" />
        <label for="no">No:</label>
        <input type="radio" name="yesorno" id="no" value="no" v-model="isRecommended"/>
        </fieldset>

        <button type="submit" className="button" value="Submit">Submit review</button>
        </form>
        `,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      isRecommended: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.review === "" || this.rating === null) {
        alert("Dont leave blank fields");
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        isRecommended: this.isRecommended,
      };

      console.log(productReview);

      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
      this.isRecommended = null;
    },
  },
});
