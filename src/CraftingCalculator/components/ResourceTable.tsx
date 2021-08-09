import {Table, Tbody, Th, Tr} from "@chakra-ui/react";
import {Resource, resources} from "../../resources/resources";
import ResourceRow from "./ResourceRow";

export default function ResourceTable() {
  const resourcesByGroup = resources.reduce((map, resource) => {
    map[resource.group] = map[resource.group] || [];
    map[resource.group].push(resource);
    return map;
  }, {} as Record<string, Resource[]>);
  return (
    <>
      <h2>Items</h2>
      <Table size="sm">
        <Tbody>
          {Object.entries(resourcesByGroup).map(([group, groupResources]) => (
            <>
              <Tr>
                <Th colSpan={5}>{group}</Th>
              </Tr>
              <Tr>
                <Th>Item</Th>
                <Th>Have</Th>
                <Th>Want</Th>
                <Th>Need</Th>
                <Th>Ingredients</Th>
              </Tr>
              {groupResources.map((resource) => (
                <ResourceRow {...resource} />
              ))}
            </>
          ))}
        </Tbody>
      </Table>
    </>
  );
}
