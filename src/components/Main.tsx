import React from 'react';

import Header from "./user/Header";
import Banner from "./user/Banner";
import Categories from "./user/Categories";
import ProductCategories from "./user/ProductCategories";
import Flashsale from "./user/Flashsale";
import BuyMemall from "./user/BuyMemall";
import TopSearches from "./user/TopSearches";
import TodaySuggestion from "./user/TodaySuggestion";
import Footer from "./user/Footer";

const Main: React.FC = () => {
    return (
        <div className="bg-gray-100 overflow-hidden">
            {/* Header */}
            <Header />

            <div className="container max-w-screen-xl mx-auto mt-4 px-4">
                {/* Banner */}
                <Banner />

                {/* Categories */}
                <Categories />
            </div>
            <div className="container max-w-screen-xl mx-auto mt-4 px-4">
                {/* Product Categories */}
                <ProductCategories />
            </div>
            <div className="bg-gray-100">
                <div className="container max-w-screen-xl mx-auto p-4">
                    {/* Flashsale */}
                    <Flashsale />

                    {/* Mazemall */}
                    <BuyMemall />

                    {/* TopSearches */}
                    <TopSearches />

                    {/* TodaySuggestion */}
                    <TodaySuggestion />
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;