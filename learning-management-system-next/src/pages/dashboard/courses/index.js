import React from 'react';
import DashboardLayout from '../../../layout/dashboardLayout/DashboardLayout';
import CourseDetails from '../../../views/dashboard/courseManagement/CourseDetails';


const courses = () => {
    return (
        <DashboardLayout>
            <CourseDetails/>
        </DashboardLayout>
    );
};

export default courses;