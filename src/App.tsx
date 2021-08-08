import React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Heading
} from "@chakra-ui/react";
import {ColorModeSwitcher} from "./ColorModeSwitcher";
import ResourceTable from "./ResourceTable";
import {CraftingRequirements} from "./CraftingRequirements";
import {woodlandHillsParcel} from "./resources/resources";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading as="h1" size="2xl">
              Crowfall Crafting Calc
            </Heading>
            <CraftingRequirements resource={woodlandHillsParcel} amount={5} />
            <ResourceTable />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
