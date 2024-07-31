import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar src="https://i.pravatar.cc/150?img=7"
      size='2xl'
      name='Iyad'/>

      {/* I use here Chakra UI */}
      <Heading as='h4' size='md' noOfLiners={1}>{greeting}</Heading>
    </VStack>

    <VStack spacing={6}>
      <Heading as='h1' size='3xl' noOfLiners={1}>{bio1}</Heading>
      <Heading as='h1' size='3xl' noOfLiners={1}>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;