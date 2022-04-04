import React from 'react';
import useReview from '../CustomHooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='reviews'>
            <div className='reviews-head'>
                <h1>Reviews</h1>
            </div>
            <div className='reviews-content'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;