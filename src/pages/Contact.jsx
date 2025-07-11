import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";

const FORMSUBMIT_URL = "https://formsubmit.co/dass14177@gmail.com"; // Updated with your email

const Contact = () => {
  const toast = useToast();

  return (
    <Box maxW="2xl" mx="auto" py={12} px={4}>
      <Heading as="h2" size="xl" mb={4} color="teal.300">
        Contact
      </Heading>
          <Text fontSize="lg" color="gray.300" mb={6}>
              Reach out via the form below, call me at <b>+91 8100076522</b>, or{" "}
              <a href="mailto:dass14177@gmail.com" style={{ textDecoration: "underline", color: "#90cdf4" }}>
                  email me
              </a>.
          </Text>
      <form
        action={FORMSUBMIT_URL}
        method="POST"
        onSubmit={() => {
          setTimeout(() => {
            toast({
              title: "Message sent!",
              description:
                "Thank you for reaching out. I'll get back to you soon.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          }, 100);
        }}
      >
        <FormControl isRequired mb={4}>
          <FormLabel color="teal.200">Name</FormLabel>
          <Input
            name="name"
            placeholder="Your Name"
            bg="#19122b"
            color="gray.100"
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel color="teal.200">Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="you@email.com"
            bg="#19122b"
            color="gray.100"
          />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel color="teal.200">Message</FormLabel>
          <Textarea
            name="message"
            placeholder="Type your message..."
            rows={5}
            bg="#19122b"
            color="gray.100"
          />
        </FormControl>
        {/* Prevent spam */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={window.location.href} />
        <Button type="submit" colorScheme="teal" size="md">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
