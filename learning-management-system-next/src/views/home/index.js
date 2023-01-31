import React from 'react';
import Faq from '../../components/faq/Faq';
import Banner from './banner/Banner';
import Course from './course/Course';
import Goal from './goal/Goal';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Goal/>
            <Course/>
            <Faq/>
        </div>
    );
};
export default Home;