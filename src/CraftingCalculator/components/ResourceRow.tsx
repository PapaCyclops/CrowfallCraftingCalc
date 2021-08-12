import {
  NumberInput,
  NumberInputField,
  Td,
  Tr,
  NumberInputProps
} from "@chakra-ui/react";
import {FC} from "react";
import useResourceData from "../../hooks/useResourceData";
import {Resource} from "../../resources/resources";

const ResourceNumberInput: FC<NumberInputProps> = (props) => (
  <NumberInput maxW={48} min={0} {...props}>
    <NumberInputField paddingInlineEnd={4} textAlign="right" />
  </NumberInput>
);

const ResourceRow: FC<Resource> = ({
  name
  /*, ingredients*/
}) => {
  const [{have, want, need}, onChange] = useResourceData(name);
  // const ingredientsArray = ingredients && Array.from(ingredients, ([ingredient, amount]) => ({ingredient, amount}))
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>
        <ResourceNumberInput
          value={have}
          onChange={(valueAsString, valueAsNumber) =>
            onChange({have: valueAsNumber || 0})
          }
        />
      </Td>
      <Td>
        <ResourceNumberInput
          value={want}
          onChange={(valueAsString, valueAsNumber) =>
            onChange({want: valueAsNumber || 0})
          }
        />
      </Td>
      <Td>
        <ResourceNumberInput value={need} isDisabled />
      </Td>
      <Td>
        {/*{ingredientsArray && <table>*/}
        {/*    <tbody>*/}
        {/*    {ingredientsArray.map(({ingredient, amount}) =>*/}
        {/*        <>*/}
        {/*            <tr>*/}
        {/*                <td>*/}
        {/*                    {ingredient.name}*/}
        {/*                </td>*/}
        {/*                <td>*/}
        {/*                    {amount}*/}
        {/*                </td>*/}

        {/*            </tr>*/}
        {/*            {ingredient.ingredients && <ResourceRow {...ingredient}/>}*/}
        {/*        </>*/}
        {/*    )}*/}
        {/*    </tbody>*/}
        {/*</table>}*/}
      </Td>
    </Tr>
  );
};

export default ResourceRow;
