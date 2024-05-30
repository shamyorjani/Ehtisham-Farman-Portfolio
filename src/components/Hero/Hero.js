import React, { useState } from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Section>
        <SectionTitle>Welcome To </SectionTitle>
        <SectionTitle>My Development Journey</SectionTitle>
        <SectionText>
          {isExpanded
            ? "Hello and welcome! I’m Ehtisham Farman, a skilled web developer with expertise in Laravel, PHP, JavaScript, and React. My frontend skills include creating engaging user interfaces with HTML, CSS, and JavaScript, while my backend expertise focuses on building robust solutions using Laravel and PHP. I’ve worked on diverse projects, such as an emotion-based music player, the Earninglance platform, and an e-commerce website for dentist equipment. Additionally, I improved the functionality of GospelScout.com and developed dynamic landing pages with React. Each project showcases my ability to blend intuitive design with seamless functionality. "
            : "Hello and welcome! I’m Ehtisham Farman, a skilled web developer with expertise in Laravel, PHP, JavaScript, and React. My frontend skills include creating engaging user interfaces with HTML, CSS, and JavaScript, while my backend expertise focuses on building robust solutions using Laravel and PHP . . . "}
        </SectionText>
        <Button onClick={toggleReadMore}>
          {isExpanded ? "View Less" : "View More"}
        </Button>
      </Section>
    </>
  );
};
export default Hero;
