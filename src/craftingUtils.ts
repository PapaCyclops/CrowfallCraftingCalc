import {Resource} from "./resources/resources";

export function getCraftingSteps(resource: Resource, amount: number = 1) {
    const map: Map<Resource, number> = new Map();
    if (resource.ingredients) {
        for (const [ingredient, ingredientAmount] of resource.ingredients.entries()) {
            map.set(ingredient, ((map.get(ingredient) || 0) + ingredientAmount) * amount);
            for (const [subIngredient, subAmount] of getCraftingSteps(ingredient, amount).entries()) {
                map.set(subIngredient, ((map.get(subIngredient) || 0) + subAmount) * ingredientAmount);
            }
        }
    }
    return map;
}