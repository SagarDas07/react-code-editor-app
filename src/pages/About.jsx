import { Box, Heading, Text, List, ListItem, ListIcon, Divider } from "@chakra-ui/react";
import { FaCheckCircle, FaUser } from "react-icons/fa";

const WEBSITE_NAME = "CodeCraft Studio";

const About = () => (
  <Box maxW="2xl" mx="auto" py={12} px={4}>
    <Heading as="h2" size="xl" mb={4} color="teal.300">
      About {WEBSITE_NAME}
    </Heading>
    <Text fontSize="lg" color="gray.300" mb={4}>
      {WEBSITE_NAME} is a modern web application that allows users to write, run, and share code in multiple languages. Built with React, Chakra UI, and Vite, it aims to provide a fast and user-friendly coding experience directly in your browser.
    </Text>
    <Divider my={6} />
    <Heading as="h3" size="md" mb={2} color="teal.200">
      Why I Built This
    </Heading>
    <Text color="gray.300" mb={4}>
      As a developer and educator, I wanted a tool that makes it easy for anyone to experiment with code, learn new languages, and share their work instantly—without any setup or installation. This project is my way of making coding more accessible and collaborative.
    </Text>
    <Heading as="h3" size="md" mb={2} color="teal.200">
      Key Technologies
    </Heading>
    <List spacing={2} color="gray.200" mb={4}>
      <ListItem><ListIcon as={FaCheckCircle} color="teal.300" />React (UI Framework)</ListItem>
      <ListItem><ListIcon as={FaCheckCircle} color="teal.300" />Chakra UI (Component Library)</ListItem>
      <ListItem><ListIcon as={FaCheckCircle} color="teal.300" />Vite (Build Tool)</ListItem>
      <ListItem><ListIcon as={FaCheckCircle} color="teal.300" />Monaco Editor (Code Editing)</ListItem>
    </List>
    <Heading as="h3" size="md" mb={2} color="teal.200">
      Features & Benefits
    </Heading>
    <List spacing={2} color="gray.200" mb={4}>
      <ListItem><ListIcon as={FaCheckCircle} color="teal.300" />Multi-language code editing</ListItem>
      <ListItem><ListIcon as={FaCheckCircle} color="teal.300" />Instant code execution and output</ListItem>
      <ListItem><ListIcon as={FaCheckCircle} color="teal.300" />Easy code sharing via links</ListItem>
      <ListItem><ListIcon as={FaCheckCircle} color="teal.300" />Responsive, modern UI</ListItem>
    </List>
    <Divider my={6} />
    <Heading as="h3" size="md" mb={2} color="teal.200">
      About the Developer
    </Heading>
    <Text color="gray.300" mb={2}>
      <FaUser style={{ display: 'inline', marginRight: 8, color: '#81e6d9' }} />
      Hi, I'm Sagar Das! I'm passionate about building tools that empower others to learn and create. If you have feedback or want to collaborate, feel free to reach out via the <a href="/contact" style={{ color: '#81e6d9', textDecoration: 'underline' }}>Contact</a> page.
    </Text>
  </Box>
);

export default About;
