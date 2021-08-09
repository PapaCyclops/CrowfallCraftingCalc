import {Box, ChakraProvider, Grid, VStack} from "@chakra-ui/react";
import {FC} from "react";
import {ColorModeSwitcher} from "./ColorModeSwitcher";
import CraftingCalculator from "./CraftingCalculator/CraftingCalculator";
import theme from "./theme";

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <CraftingCalculator />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);

export default App;
