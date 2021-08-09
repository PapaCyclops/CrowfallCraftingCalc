import {Heading, Table, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {Resource} from "../../resources/resources";
import {getCraftingSteps} from "../utils/craftingUtils";

export function CraftingRequirements({
  resource,
  amount
}: {
  resource: Resource;
  amount: number;
}) {
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
              <Tr>
                <Td>{resource.name}</Td>
                <Td isNumeric>{amount.toLocaleString()}</Td>
              </Tr>
            ))}
        </tbody>
      </Table>
    </section>
  );
}
