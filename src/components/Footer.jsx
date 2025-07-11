import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" bg="#1a1333" color="gray.400" py={4} px={6} textAlign="center" mt={8} boxShadow="sm">
    <Text fontSize="sm">© {new Date().getFullYear()} Online Code Editor. All rights reserved.</Text>
  </Box>
);

export default Footer;
