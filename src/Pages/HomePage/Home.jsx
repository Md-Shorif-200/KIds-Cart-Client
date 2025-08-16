import React from 'react';
import Banner from './Banner';
import ProductsCatagory from './ProductsCatagory';
import RecomendedProducts from './RecomendedProducts';

const Home = () => {
    return (
        <div>
                    <Banner></Banner>
                     <ProductsCatagory></ProductsCatagory>
                     <RecomendedProducts></RecomendedProducts>
        </div>
    );
};

export default Home;