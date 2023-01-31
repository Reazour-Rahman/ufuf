import React from "react";
import TopHeader from "../components/Breadcrumbs/TopHeader";
import CourseCard from "../components/card/CourseCard";
import Faq from "../components/faq/Faq";
import { MainLayout } from "../layout/MainLayout/MainLayout";
import CourseSection from "../views/about/CourseSection/CourseSection";
import Learning from "../views/about/Learning/Learning";
import Marketers from "../views/about/Marketers/Marketers";
import TabsSection from "../views/about/TabsSection/TabsSection";
import Testimonial from "../views/about/Testimonial/Testimonial";

const about = () => {
  return (
    <div>
      <MainLayout>
      <TopHeader />
      {/* <CourseCard /> */}
      <Learning />
      <TabsSection />
      <CourseSection />
      <Testimonial />
      <Marketers />
      <Faq />
      </MainLayout>
    </div>
  );
};

export default about;
