import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`
const RestaurantLogo = styled.div`
  width: 100px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px; 
  img {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`
const RestaurantName = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
margin: 30px 0 20px 0;
height: 50px;
a {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background: #ff0000;
  padding: 10px 50px;
  border: 1px solid #000;
  border-radius: 6px;
  width: 100%;
  text-decoration: none;
}
`

const Restaurant = ({ name, image_url, average_score, slug, ...props }) => {
  return (
    <Card>
      <RestaurantLogo>
        <img src={image_url} alt={name}/>
      </RestaurantLogo>
      <RestaurantName>
        {name}
      </RestaurantName>
      <Rating score={average_score}/>
      <LinkWrapper>
        <Link to={"/restaurants/" + slug}>View Restaruant</Link>
      </LinkWrapper>
    </Card>
  )
};

export default Restaurant;