import React from 'react';

const ResourceRow = ({name, ingredients}) => {
    const ingredientsArray = ingredients && Array.from(ingredients, ([ingredient, amount]) => ({ingredient, amount}))
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {ingredientsArray && <table>
                    <tbody>
                    {ingredientsArray.map(ingredient =>
                        <>
                            <tr>
                                <td>
                                    {ingredient.ingredient.name}
                                </td>
                                <td>
                                    {ingredient.amount}
                                </td>

                            </tr>
                            {ingredient.ingredients && <ResourceRow {...ingredient}/>}
                        </>
                    )}
                    </tbody>
                </table>}
            </td>
        </tr>
    );
};

export default ResourceRow;