const createReviewQuery = (attributes) => `
  mutation {
    createReview(
      title: "${attributes.title}",
      description: "${attributes.description}",
      score: ${attributes.score},
      restaurantId: ${attributes.restaurantId}
    ) {
      title
      description
      score
      restaurantId
    }
  }
`

export default createReviewQuery