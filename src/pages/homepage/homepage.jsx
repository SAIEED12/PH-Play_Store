import React from 'react';
import Banner from './apps/Banner/Banner';
import Stats from './Stats';
import TrendingApps from './TrendingApps';
import { useLoaderData } from 'react-router';

const Homepage = () => {
    const data = useLoaderData()
    return (
        <>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </>
    );
};

export default Homepage;