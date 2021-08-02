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
                            <tr>{ingredient.ingredient.name} {ingredient.amount}</tr>
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