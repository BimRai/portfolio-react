import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import FullScreenSection from "./FullScreenSection";
const projects = [
  {
    title: "MOOBEE - (NETFLIX Like Website)",
    description:
      "NETFLIX immitation website with JavaScript authentication, some animations and CSS Flexbox as well as directing links. Login email is: bimdev@outlook.com and Pass is: bimdev123. Give it a go! :)",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "PCBUD (Educational Web App)",
    description:
      "This is (currently) a responsive landing page to an educational web app for kids and teens as well as adults who are interested in the Computers/IT field but starting with the basics.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "YAZAM (Travel Agency Landing Page)",
    description:
      "A warm welcoming landing page for travellers ready to book off their next adventure.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Mangata Gallo (Local Online Shop)",
    description:
      "This is an online shop for a local jewellery store to expand their business traffic, marketing and growth.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];
const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#5e0101"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color='#19181a' >
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1,minmax(1fr))", md: "repeat(2,minmax(0,1fr))", lg: "repeat(2,minmax(0,1fr))" }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}

      </Box>

    </FullScreenSection>
  );

}
export default ProjectsSection;
