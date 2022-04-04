import React from 'react';
import './Home.css';
import product from '../../images/product.png'

const Home = () => {
    return (
        <div>
            <div className='product'>
                <div className='product-details'>
                    <h1>Here is Your Camera Haul</h1>
                    <h3>Sony Alpha a6400 Mirrorless Camera: Compact APS-C Interchangeable Lens Digital Camera with Real-Time Eye Auto Focus, 4K Video, Flip Screen & 16-50mm Lens - E Mount Compatible Cameras - ILCE-6400L/B</h3>
                    <p>Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.</p>
                </div>
                <div className='product-image'>
                    <img src={product} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;