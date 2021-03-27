const restaurantQuery = (slug) => `
  query Restaurant {
    restaurant(slug: "${slug}") {
      id
      name
      imageUrl
      slug
      averageScore
      reviews {
        id
        title
        description
        score
      }
    }
  }
`

export default restaurantQuery