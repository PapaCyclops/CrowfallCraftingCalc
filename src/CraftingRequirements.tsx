import {getCraftingSteps} from "./craftingUtils";
import {Resource} from "./resources/resources";
import {Heading, Text} from "@chakra-ui/react";

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
      <Text>
        {resource.name} - {amount}
      </Text>
      <table style={{margin: "0 auto"}}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(steps.entries())
            .sort(([, amountA], [, amountB]) => amountB - amountA)
            .map(([resource, amount]) => (
              <tr>
                <td>{resource.name}</td>
                <td>{amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
