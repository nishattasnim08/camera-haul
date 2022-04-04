import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, review, rating} = props.review;
    return (
        <div className='review'>
            <h2>{name}</h2>
            <p>{review}</p>
            <h4>Rating: {rating}</h4>
        </div>
    );
};

export default Review;