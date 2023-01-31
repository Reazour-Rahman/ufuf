import React from "react";
import TopHeader from "../../components/Breadcrumbs/TopHeader";
import CourseCard from "../../components/card/CourseCard";
import SliderCard from "../../components/card/SliderCard";
import Faq from "../../components/faq/Faq";
import CourseSection from "./CourseSection/CourseSection";
import Learning from "./Learning/Learning";
import Marketers from "./Marketers/Marketers";
import TabsSection from "./TabsSection/TabsSection";
import Testimonial from "./Testimonial/Testimonial";

const About = () => {
  return (
    <div>
      <TopHeader />
      {/* <CourseCard /> */}
      <Learning />
      <TabsSection />
      <CourseSection />
      <Testimonial />
      <Marketers />
      <Faq />
    </div>
  );
};

export default About;
