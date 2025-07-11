import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  HStack,
  Icon
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg" fontWeight="semibold" color="teal.200">
        Choose Language
      </Text>
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="teal" variant="outline" minW="180px">
          <HStack>
            <Text fontWeight="bold">{language}</Text>
          </HStack>
        </MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
              }}
              onClick={() => onSelect(lang)}
            >
              <HStack>
                <Text fontWeight={lang === language ? "bold" : "normal"}>{lang}</Text>
                <Text as="span" color="gray.500" fontSize="sm">
                  ({version})
                </Text>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default LanguageSelector;
