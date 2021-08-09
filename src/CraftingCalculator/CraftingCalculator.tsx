import {Heading} from "@chakra-ui/react";
import {FC} from "react";
import {woodlandHillsParcel} from "../resources/resources";
import CraftingRequirements from "./components/CraftingRequirements";
import ResourceTable from "./components/ResourceTable";

const CraftingCalculator: FC = () => (
  <>
    <Heading as="h1" size="2xl">
      Crowfall Crafting Calc
    </Heading>
    <CraftingRequirements resource={woodlandHillsParcel} amount={5} />
    <ResourceTable />
  </>
);

export default CraftingCalculator;
