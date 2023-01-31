import Faq from "../components/faq/Faq";
import { MainLayout } from "../layout/MainLayout/MainLayout";
import Banner from "../views/home/banner/Banner";
import Course from "../views/home/course/Course";
import Goal from "../views/home/goal/Goal";
import React from 'react';

const Home = () => {
  return (
    <MainLayout>
      <Banner />
      <Goal />
      <Course />
      <Faq />
    </MainLayout>
  );
};

export default Home;
