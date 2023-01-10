app.component("review-card", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template: /*html*/ `
        <div className="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">{{review.name}} gave this {{review.rating}} stars
                <br>
                "{{review.review}}"
                <br>
                <small v-if="review.isRecommended !== null">Would you recommend this product?: {{review.isRecommended}}</small>
                </li>
            </ul>
        </div>
    `,
});
