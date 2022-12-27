import React from 'react';
import Banner from './banner/Banner';
import Course from './course/Course';
import Goal from './goal/Goal';

const index = () => {
    return (
        <div>
            <Banner/>
            <Goal/>
            <Course/>
        </div>
    );
};
export default index;