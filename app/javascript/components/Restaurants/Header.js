import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding:100px 100px 10px 100px;
  
  h1 {
    font-size:42px;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Header = () => {
  return(
    <Wrapper>
    <h1>Peruvian Restaurants</h1>
    <Subheader>
      Honest, unbiased restaurant reviews form Perú. Share your experience.
    </Subheader>
    <Subheader>
      To make your review please Login first or sign up.
    </Subheader>
    </Wrapper>
  )
}

export default Header