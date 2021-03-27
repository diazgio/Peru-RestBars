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
const UserReviewCount = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const ScoreOutOf = styled.div`
font-size: 18px;
font-weight: bold;
padding: 10px 0;
`

const Header = ({attributes, reviews, average, ...props}) => {
  const { image_url, name } = attributes;
  
  return (
    <Wrapper>
      <h1><img src={image_url} alt={name}/>{name}</h1>
      <div>
        <UserReviewCount>
          <span className="review-count">{reviews ? reviews.length : 0}</span> user reviews
        </UserReviewCount>
        <Rating score={average}/>
        <ScoreOutOf>{average.toFixed(1)} out of 5 stars</ScoreOutOf>
      </div>
    </Wrapper>
  )
};

export default Header;