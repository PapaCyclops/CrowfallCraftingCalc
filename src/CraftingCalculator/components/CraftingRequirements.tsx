import {Heading, Table, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {FC} from "react";
import {Resource} from "../../resources/resources";
import {getCraftingSteps} from "../utils/craftingUtils";

const CraftingRequirements: FC<{
  resource: Resource;
  amount: number;
}> = ({resource, amount}) => {
  const steps = getCraftingSteps(resource, amount);
  return (
    <section>
      <Heading as="h2" size="xl">
        Crafting Requirements
      </Heading>
      <Text size="lg">
        {resource.name} - {amount}
      </Text>
      <Table>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Amount</Th>
          </Tr>
        </Thead>
        <tbody>
          {Array.from(steps.entries())
            .sort(([, amountA], [, amountB]) => amountB - amountA)
            .map(([resource, amount]) => (
              <Tr key={resource.name}>
                <Td>{resource.name}</Td>
                <Td isNumeric>{amount.toLocaleString()}</Td>
              </Tr>
            ))}
        </tbody>
      </Table>
    </section>
  );
};

export default CraftingRequirements;
