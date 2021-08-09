import {NumberInput, NumberInputField, Td, Tr} from "@chakra-ui/react";
import {Resource} from "../../resources/resources";

const ResourceRow = ({name /*, ingredients*/}: Resource) => {
  // const ingredientsArray = ingredients && Array.from(ingredients, ([ingredient, amount]) => ({ingredient, amount}))
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>
        <NumberInput min={0}>
          <NumberInputField />
        </NumberInput>
      </Td>
      <Td>
        <NumberInput min={0}>
          <NumberInputField />
        </NumberInput>
      </Td>
      <Td>
        <NumberInput min={0} isDisabled>
          <NumberInputField />
        </NumberInput>
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
