import React, { useState, useEffect, Fragment } from 'react';
import Header from './Header';
import Review from './Review';
import ReviewForm from './ReviewForm';
import styled from 'styled-components';
import AxiosWrapper from '../../utils/Requests/AxiosWrapper';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`
const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
  @media (min-width: 425px) {
    max-width: 100%;
    height: 50vh;
  }
`
const Main = styled.div`
  padding-left: 60px;
`

const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState({});
  const [reviews, setReviews] = useState([])
  const [review, setReview] = useState({ title: '', description: '', score: 0 })
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    const slug = props.match.params.slug

    AxiosWrapper.get(`/api/v1/restaurants/${slug}`)
    .then( resp => {
      setRestaurant(resp.data)
      setReviews(resp.data.included)
      setLoaded(true)
    })
    .catch( data => console.log('Error', data) )
  }, []);

  const handleChange = (e) => {
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const restaurant_id = parseInt(restaurant.data.id)
    AxiosWrapper.post('/api/v1/reviews', {...review, restaurant_id})
    .then((resp) => {
      setReviews([...reviews, resp.data.data])
      setReview({ title: '', description: '', score: 0 })
      setError('')
    })
    .catch( resp => {
      let error
      switch(resp.message){
        case "Request failed with status code 401":
          error = 'Please log in to leave a review.'
          break
        default:
          error = 'Something went wrong.'
      }
      setError(error)
    })
  }

  const handleDestroy = (id, e) => {
    e.preventDefault();

    AxiosWrapper.delete(`/api/v1/reviews/${id}`)
    .then( (data) => {
      const included = [...reviews]
      const index = included.findIndex( (data) => data.id == id )
      included.splice(index, 1)

      setReviews(included)
    })
    .catch( data => console.log('Error', data) )
  }

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  }

  let total, average = 0
  let userReviews

  if (reviews && reviews.length > 0) {
    total = reviews.reduce((total, review) => total + review.attributes.score, 0);
    average = total > 0 ? (parseFloat(total) / parseFloat(reviews.length)) : 0;
    
    userReviews = reviews.map( (review, index) => {
      return (
        <Review 
          key={index}
          id={review.id}
          attributes={review.attributes}
          handleDestroy={handleDestroy}
        />
      )
    });
  }
  
  return(
    <Wrapper>
      { 
        loaded &&
        <Fragment>
          <Column>
            <Main>
              <Header 
                attributes={restaurant.data.attributes}
                reviews={reviews}
                average={average}
              />
              {userReviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              name={restaurant.data.attributes.name}
              review={review}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              error={error}
            />
          </Column>
        </Fragment>
      }
    </Wrapper>
  )
};

export default Restaurant;