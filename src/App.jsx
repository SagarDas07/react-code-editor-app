import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Editor from "./pages/Editor";

function App() {
  return (
    <Router>
      <Box
        minH="100vh"
        bg="#0f0a19"
        color="gray.500"
        display="flex"
        flexDirection="column"
      >
        <NavBar />
        <Box flex="1" px={6} py={8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
