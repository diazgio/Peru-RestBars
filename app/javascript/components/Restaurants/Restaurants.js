import React, { useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Restaruant from './Restaurant';
import Header from './Header';
import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left:auto;
  margin-right:auto;

`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;

  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`



const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=> {
    axios.get('/api/v1/restaurants.json')
    .then(resp => setRestaurants(resp.data.data))
    .catch( resp => console.log(resp) )
  }, [restaurants.length]);

  const grid = restaurants.map((restaurant, index) => {
    const { name, image_url, slug, average_score } = restaurant.attributes
    
    return (
      <Restaruant
      key={index}
      name={name}
      image_url={image_url}
      slug={slug}
      average_score={average_score}
      />
    )
  });

  return (
    <Home>
      <Header/>
      <Grid>{grid}</Grid>
    </Home>
  )
};

export default Restaurants;