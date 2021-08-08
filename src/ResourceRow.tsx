import React from 'react';
import {Resource} from "./resources/resources";

const ResourceRow = ({name, ingredients}: Resource) => {
    const ingredientsArray = ingredients && Array.from(ingredients, ([ingredient, amount]) => ({ingredient, amount}))
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                <input type="number"/>
            </td>
            <td>
                <input type="number"/>
            </td>
            <td>
                <input type="number" disabled/>
            </td>
            <td>
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
            </td>
        </tr>
    );
};

export default ResourceRow;