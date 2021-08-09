import {Heading, Table, Tbody, Th, Tr} from "@chakra-ui/react";
import {FC, Fragment} from "react";
import {Resource, resources} from "../../resources/resources";
import ResourceRow from "./ResourceRow";

const ResourceTable: FC = () => {
  const resourcesByGroup = resources.reduce((map, resource) => {
    map[resource.group] = map[resource.group] || [];
    map[resource.group].push(resource);
    return map;
  }, {} as Record<string, Resource[]>);
  return (
    <section>
      <Heading as="h2" size="xl">
        Items
      </Heading>
      <Table size="sm">
        <Tbody>
          {Object.entries(resourcesByGroup).map(([group, groupResources]) => (
            <Fragment key={group}>
              <Tr>
                <Th colSpan={5} fontSize="xl" paddingY={4}>
                  {group}
                </Th>
              </Tr>
              <Tr>
                <Th fontSize="lg" paddingY={2}>
                  Item
                </Th>
                <Th fontSize="lg" paddingY={2}>
                  Have
                </Th>
                <Th fontSize="lg" paddingY={2}>
                  Want
                </Th>
                <Th fontSize="lg" paddingY={2}>
                  Need
                </Th>
                <Th fontSize="lg" paddingY={2}>
                  Ingredients
                </Th>
              </Tr>
              {groupResources.map((resource) => (
                <ResourceRow key={resource.name} {...resource} />
              ))}
            </Fragment>
          ))}
        </Tbody>
      </Table>
    </section>
  );
};

export default ResourceTable;
