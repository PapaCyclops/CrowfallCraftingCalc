import {Heading} from "@chakra-ui/react";
import {woodlandHillsParcel} from "../resources/resources";
import {CraftingRequirements} from "./components/CraftingRequirements";
import ResourceTable from "./components/ResourceTable";

export default function CraftingCalculator() {
  return (
    <>
      <Heading as="h1" size="2xl">
        Crowfall Crafting Calc
      </Heading>
      <CraftingRequirements resource={woodlandHillsParcel} amount={5} />
      <ResourceTable />
    </>
  );
}
