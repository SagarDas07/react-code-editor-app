import { IconButton, useColorMode, Tooltip } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip label={colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        variant="ghost"
        colorScheme="teal"
        size="md"
        ml={2}
      />
    </Tooltip>
  );
};

export default ThemeToggle;
