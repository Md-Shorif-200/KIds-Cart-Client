import React from 'react';
import Banner from './Banner';
import ProductsCatagory from './ProductsCatagory';
import RecomendedProducts from './RecomendedProducts';
import BabyMilestones from './BabyMilestones';
import AddSection from './AddSection';
import ClearanceSale from './ClearanceSale';
import ArrivalProducts from './ArrivalProducts';
import EssentialProducts from './EssentialProducts';

const Home = () => {
    return (
        <div>
                    <Banner></Banner>
                     <ProductsCatagory></ProductsCatagory>
                     <RecomendedProducts></RecomendedProducts>
                      <BabyMilestones></BabyMilestones>
                      <AddSection></AddSection>
                      <ClearanceSale></ClearanceSale>
                      <ArrivalProducts></ArrivalProducts>
                            <EssentialProducts></EssentialProducts>
        </div>
    );
};

export default Home;