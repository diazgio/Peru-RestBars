import React from 'react';

const ReviewForm = (props) => {
  return (
    <div className="Wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>have an experience with {props.attributes.name}? Share your review!</div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
        </div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description" />
        </div>
        <div className="field">
          <div className="raiting-container">
            <div className="raiting-title-text">Rate this Restaurant</div>
            [Star Raiting Goes Here]
          </div>
        </div>
        <button type="submit">Submit Your Review</button>
      </form>
    </div>
  )
};

export default ReviewForm;