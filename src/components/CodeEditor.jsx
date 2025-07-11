import { useRef, useState } from "react";
import { Box, HStack, useColorModeValue, Grid, GridItem } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(() => {
    if (window.__SHARED_CODE__) {
      return window.__SHARED_CODE__.code;
    }
    return "";
  });
  const [language, setLanguage] = useState(() => {
    if (window.__SHARED_CODE__) {
      return window.__SHARED_CODE__.lang;
    }
    return "javascript";
  });

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const editorBg = useColorModeValue("#1a202c", "#1a202c");
  const borderColor = useColorModeValue("gray.700", "gray.700");

  return (
    <Box w="100%" minH="80vh" display="flex" justifyContent="center" alignItems="center" overflowX="hidden" px={0}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Keep this for responsive stacking on small screens
        gap={8}
        w="100%"
        maxW="7xl" // Restrict the overall max width of the grid to prevent excessive stretching
        mx="auto"
        px={4}
      >
        <GridItem> {/* Editor Section */}
          <LanguageSelector language={language} onSelect={onSelect} />
          <Box borderRadius="lg" borderWidth={1} borderColor={borderColor} overflow="hidden" boxShadow="lg" bg={editorBg}>
            <Editor
              options={{
                minimap: { enabled: false },
                fontSize: 16,
                fontFamily: "Fira Mono, monospace",
                smoothScrolling: true,
                scrollBeyondLastLine: false,
                wordWrap: "on",
                lineNumbers: "on",
                padding: { top: 16 },
                suggestOnTriggerCharacters: true,
                quickSuggestions: true,
                wordBasedSuggestions: true,
                tabCompletion: "on",
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
        </GridItem>
        <GridItem> {/* Output Section */}
          <Output editorRef={editorRef} language={language} />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CodeEditor;