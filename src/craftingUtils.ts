import {Resource} from "./resources/resources";

// export function getCraftingSteps(resource: Resource) {
//     const map: Map<Resource, number> = new Map();
//     if (resource.ingredients) {
//         for (let [ingredient, amount] of resource.ingredients.entries()) {
//             map.set(ingredient, amount);
//             if(ingredient.ingredients) {
//                 for(let[subIngredient,subAmount] of ingredient.ingredients)
//                 {
//                     map.set(subIngredient, subAmount);
//                 }
//
//             }
//         }
//     }
//     return map;
// }
export function getCraftingSteps(resource: Resource) {
    const map: Map<Resource, number> = new Map(resource.ingredients || []);
    if (resource.ingredients) {
        for (const [ingredient, amount] of resource.ingredients.entries()) {
            for (const [subIngredient, subAmount] of getCraftingSteps(ingredient).entries()) {
                map.set(subIngredient, ((map.get(subIngredient) || 0) + subAmount) * amount);
            }
        }
    }
    return map;
}