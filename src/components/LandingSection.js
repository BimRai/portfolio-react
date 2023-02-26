import React from "react";
import { Avatar, Heading, HStack, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I'm Bim Rai!";
const bio1 = "A Frontend Developer";
const bio2 = "Specialised in React.js";
const imageStyles = {
    objectFit: "cover",
    width: "200px",
    height: "200px",

};

const LandingSection = () => (

    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#6D1E15"
    >
        <HStack py={50}>
            <VStack>
                <Avatar size='2xl' name='Bim Rai' src='https://images7.alphacoders.com/500/500857.jpg' style={imageStyles} />
                <Heading size='md' py={5} color='#19181a' fontWeight='bold'>
                    {greeting}
                </Heading>
            </VStack>

        </HStack>
        <HStack py={5}>
            <Heading as='h1' size='2xl' color='#19181a' fontWeight='normal'>
                {bio1}
            </Heading>
        </HStack>
        <HStack>
            <Heading as='h1' size='2xl' color='#19181a' fontWeight='normal'>
                {bio2}
            </Heading>
        </HStack>




    </FullScreenSection>
);

export default LandingSection;