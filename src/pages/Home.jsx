import React from 'react';
import Hero from '../components/Hero';
import TopRated from '../components/TopRated';
import GreenExperts from './../components/GreenExperts';
import CareTips from './../components/CareTips';
import PlantOfTheWeek from '../components/PlantOfTheWeek ';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PlantOfTheWeek></PlantOfTheWeek>
            <TopRated></TopRated>
            <CareTips></CareTips>
            <GreenExperts></GreenExperts>
        </div>
    );
};

export default Home;