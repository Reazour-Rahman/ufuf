import React from "react";
import CourseCard from "../../components/card/CourseCard";
import SliderCard from "../../components/card/SliderCard";
import Learning from "./Learning/Learning";
import TabsSection from "./TabsSection/TabsSection";
import Testimonial from "./Testimonial/Testimonial";

const About = () => {
  return (
    <div>
      <p>
        ravi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        necessitatibus aliquid accusantium vitae ratione dolor aliquam
        blanditiis. Voluptatibus laborum ad, corrupti aliquam eaque, commodi
        animi eligendi earum neque, reprehenderit maiores.
      </p>
      <CourseCard />
      <SliderCard />
      <Learning />
      <Testimonial />
      <TabsSection />
      <CourseCard />
    </div>
  );
};

export default About;
