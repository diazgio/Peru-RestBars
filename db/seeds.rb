restaurants = Restaurant.create([
  {
    name: 'Restaurant Name',
    image_url: 'https://st.depositphotos.com/2317793/3133/v/600/depositphotos_31331865-stock-illustration-restaurant-logo-fork.jpg'
  },
  {
    name: 'Brasas',
    image_url: 'https://i.pinimg.com/originals/33/aa/9b/33aa9bbf9ef5fee9e3f3184d20722db8.png',
  },
  {
    name: 'Restaurante Criollo',
    image_url: 'https://i.pinimg.com/originals/58/10/e0/5810e0f451ff5d4d5badb1523d3c6f50.png',
  },
  {
    name: 'Forkroad',
    image_url: 'https://www.staffcreativa.pe/blog/wp-content/uploads/dise%C3%B1os-de-logos-5.png',
  },
  {
    name: 'Al Garete',
    image_url: 'https://tentulogo.com/wp-content/uploads/2010/07/Logo-Algarete.jpg',
  },
  {
    name: 'La Casona',
    image_url: 'https://i.pinimg.com/originals/ce/a2/c0/cea2c08ba5780765521be24db8c37a0a.jpg',
  }
])

reviews = Review.create([
  {
    title: 'Greate place',
    description: 'I had a lovely time.',
    score: 5,
    restaurant: restaurants.first
  },
  {
    title: 'Bad place',
    description: 'I had a bad time.',
    score: 1,
    restaurant: restaurants.first
  }
])