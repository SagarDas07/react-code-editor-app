import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import CodeEditor from "../components/CodeEditor";

const Editor = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const lang = params.get("lang");
    if (code && lang) {
      const decoded = decodeURIComponent(escape(atob(code)));
      window.__SHARED_CODE__ = { code: decoded, lang };
    } else {
      window.__SHARED_CODE__ = null;
    }
  }, []);

  return (
    <Box py={8}>
      <Heading as="h2" size="lg" mb={6} color="teal.300" textAlign="center">
        Online Code Editor
      </Heading>
      <CodeEditor />
    </Box>
  );
};

export default Editor;
