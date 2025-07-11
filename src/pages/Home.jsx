import { Box, Heading, Text, Button, SimpleGrid, Icon, VStack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCode, FaRocket, FaUsers, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: FaCode,
    title: "Multi-language Support",
    desc: "Write code in multiple programming languages with syntax highlighting."
  },
  {
    icon: FaRocket,
    title: "Instant Output",
    desc: "Run your code and see results instantly in the browser."
  },
  {
    icon: FaUsers,
    title: "Community Driven",
    desc: "Join a growing community of developers and learners."
  },
  {
    icon: FaCheckCircle,
    title: "No Installation Needed",
    desc: "Start coding right away in your browser—no setup required!"
  }
];

const Home = () => (
  <Box textAlign="center" py={16}>
    <Heading as="h1" size="2xl" mb={4} color="teal.300">
      Welcome to the Online Code Editor
    </Heading>
    <Text fontSize="xl" mb={8} color="gray.300">
      Write, run, and share code instantly in your browser.
    </Text>
    <Button as={Link} to="/editor" colorScheme="teal" size="lg" mb={12}>
      Start Coding
    </Button>
    <Divider mb={12} />
    <Heading as="h2" size="lg" mb={8} color="teal.200">
      Features
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={16}>
      {features.map((feature) => (
        <VStack key={feature.title} spacing={4} bg="#19122b" p={6} borderRadius="lg" boxShadow="md">
          <Icon as={feature.icon} w={10} h={10} color="teal.300" />
          <Text fontWeight="bold" fontSize="lg" color="teal.100">{feature.title}</Text>
          <Text color="gray.300">{feature.desc}</Text>
        </VStack>
      ))}
    </SimpleGrid>
    <Heading as="h3" size="md" mb={4} color="teal.200">
      How It Works
    </Heading>
    <Text color="gray.300" maxW="2xl" mx="auto" mb={8}>
      Select your preferred language, write your code in the editor, and click 'Run' to see the output instantly. Share your code with friends or colleagues using the share feature. Perfect for learning, teaching, and quick prototyping.
    </Text>
    <Text color="gray.400" fontSize="sm">
      Have feedback or want to join our community? Visit the <Link to="/contact" style={{ color: '#81e6d9' }}>Contact</Link> page!
    </Text>
  </Box>
);

export default Home;
