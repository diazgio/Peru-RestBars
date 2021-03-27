const restaurantsQuery = `
  query restaurants {
    restaurants {
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

export default restaurantsQuery