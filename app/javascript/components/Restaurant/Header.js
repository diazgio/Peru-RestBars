import React from 'react';
import Rating from '../Rating/Rating';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;

  img {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -18px;
    margin-right: 20px;
  }
`
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const TotalOutOf = styled.div`
font-size: 18px;
font-weight: bold;
padding: 10px 0;
`

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.length
  return (
    <Wrapper>
      <h1><img src={image_url} alt={name}/>{name}</h1>
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <Rating score={avg_score}/>
        <TotalOutOf> {avg_score} out of 5 Stars</TotalOutOf>
      </div>
    </Wrapper>
  )
};

export default Header;