import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const PROJECT_NAME = "CodeCraft Studio";

const NavBar = () => (
  <Flex as="nav" bg="#1a1333" color="gray.100" px={6} py={4} align="center" boxShadow="md">
    <Box fontWeight="bold" fontSize="xl">
      <Link as={NavLink} to="/" _hover={{ textDecoration: "none", color: "teal.300" }} style={{ cursor: "pointer" }}>
        {PROJECT_NAME}
      </Link>
    </Box>
    <Spacer />
    <Flex gap={4} align="center">
      <Link as={NavLink} to="/" _activeLink={{ color: "teal.300" }}>
        Home
      </Link>
      <Link as={NavLink} to="/about" _activeLink={{ color: "teal.300" }}>
        About
      </Link>
      <Link as={NavLink} to="/contact" _activeLink={{ color: "teal.300" }}>
        Contact
      </Link>
      <Button as={NavLink} to="/editor" colorScheme="teal" variant="solid" size="sm">
        Try Editor
      </Button>
    </Flex>
  </Flex>
);

export default NavBar;
