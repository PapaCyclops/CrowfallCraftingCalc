export const resources = [];

function createResource(group, name, ingredients) {
    const resource = {group, name};
    if (ingredients) {
        resource.ingredients = new Map(ingredients);
    }
    resources.push(resource);
    return resource;
}

//<editor-fold desc="Base Resources">
const base = "Base";
const wood = createResource(base, "Wood");
const stone = createResource(base, "Stone");
const ore = createResource(base, "Ore");
const hide = createResource(base, "Hide");
const gold = createResource(base, "Gold");
const etherealDust = createResource(base, "Ethereal Dust");
const cuttingGrit = createResource(base, "Cutting Grit");
const chaosEmber = createResource(base, "Chaos Ember");
const animalBlood = createResource(base, "Animal Blood");
const animalBone = createResource(base, "Animal Bone");
//</editor-fold>

//<editor-fold desc="Purchased">
const waterFlask = createResource("Purchase", "Water Flask", [[gold, 20/*todo update price*/]]);
//</editor-fold>

//<editor-fold desc="Geomancy Components">
const geomancyComponent = "Geomancy Component";
const mulch = createResource(geomancyComponent, "Mulch", [[wood, 20]])
const oreConcentrate = createResource(geomancyComponent, "Ore Concentrate", [[ore, 20]]);
const gravel = createResource(geomancyComponent, "Gravel", [[stone, 20]]);
const soil = createResource(geomancyComponent, "Soil", [[gravel, 8], [mulch, 8], [oreConcentrate, 8]])
//</editor-fold>

