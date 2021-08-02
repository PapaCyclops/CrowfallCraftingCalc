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
export const wood = createResource(base, "Wood");
export const stone = createResource(base, "Stone");
export const ore = createResource(base, "Ore");
export const hide = createResource(base, "Hide");
export const gold = createResource(base, "Gold");
export const etherealDust = createResource(base, "Ethereal Dust");
export const cuttingGrit = createResource(base, "Cutting Grit");
export const chaosEmber = createResource(base, "Chaos Ember");
export const animalBlood = createResource(base, "Animal Blood");
export const animalBone = createResource(base, "Animal Bone");
//</editor-fold>

//<editor-fold desc="Purchased">
export const waterFlask = createResource("Purchase", "Water Flask", [[gold, 20/*todo update price*/]]);
//</editor-fold>

//<editor-fold desc="Geomancy Components">
export const geomancyComponent = "Geomancy Component";
export const mulch = createResource(geomancyComponent, "Mulch", [[wood, 20]])
export const oreConcentrate = createResource(geomancyComponent, "Ore Concentrate", [[ore, 20]]);
export const gravel = createResource(geomancyComponent, "Gravel", [[stone, 20]]);
export const soil = createResource(geomancyComponent, "Soil", [[gravel, 8], [mulch, 8], [oreConcentrate, 8]])
//</editor-fold>


export const craftedResources = [
    //StoneMasonry Components
    {
        name: "Brick",
        ingredients: [
            {ingredient: "Stone", amount: 75},
            {ingredient: "Ethereal Dust", amount: 5}
        ]
    },
    {
        name: "Carpentry Nail",
        ingredients: [
            {ingredient: "Ore", amount: 60},
            {ingredient: "Ethereal Dust", amount: 5}
        ]
    },
    {
        name: "Diamond Cutting Blade",
        ingredients: [
            {ingredient: "Ore", amount: 6},
            {ingredient: "Cutting Grit", amount: 2}
        ]
    },
    {
        name: "Floor Tiles",
        ingredients: [
            {ingredient: "Stone", amount: 75},
            {ingredient: "Ethereal Dust", amount: 5}
        ]
    },
    {
        name: "Grinding Wheel",
        ingredients: [
            {ingredient: "Stone", amount: 12},
        ]
    },
    {
        name: "Polishing Paste",
        ingredients: [
            {ingredient: "Water Flask", amount: 2},
            {ingredient: "Powdered Stone", amount: 8},
        ]
    },
    {
        name: "Quality Assurance Control Kit",
        ingredients: [
            {ingredient: "Ore", amount: 25},
            {ingredient: "Wood", amount: 25},
            {ingredient: "Stone", amount: 25},
            {ingredient: "Hide", amount: 25},
            {ingredient: "Ethereal Dust", amount: 5},

        ]
    },
    {
        name: "Wood Shingles",
        ingredients: [
            {ingredient: "Wood", amount: 80},
            {ingredient: "Carpentry Nail", amount: 2}
        ]
    },
    {
        name: "Wood Stakes",
        ingredients: [
            {ingredient: "Wood", amount: 75},
            {ingredient: "Ethereal Dust", amount: 5}
        ]
    },
    // Architecture Components
    {
        name: "Architectural Arches",
        ingredients: [
            {ingredient: "Brick", amount: 2},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Carpentry Nail", amount: 1}
        ]
    },
    {
        name: "Architectural Wall",
        ingredients: [
            {ingredient: "Brick", amount: 2},
            {ingredient: "Frame", amount: 4},
            {ingredient: "Carpentry Nail", amount: 1},
            {ingredient: "Wall Insulation", amount: 2}
        ]
    },
    {
        name: "Foundation Segment",
        ingredients: [
            {ingredient: "Brick", amount: 4},
            {ingredient: "Gravel", amount: 2}
        ]
    },
    {
        name: "Frame",
        ingredients: [
            {ingredient: "Wood", amount: 80},
            {ingredient: "Carpentry Nail", amount: 2}
        ]
    },
    {
        name: "Roof Segment",
        ingredients: [
            {ingredient: "Wood Shingles", amount: 4},
            {ingredient: "Carpentry Nail", amount: 4}
        ]
    },
    {
        name: "Wall Insulation",
        ingredients: [
            {ingredient: "Hide", amount: 10},
            {ingredient: "Mulch", amount: 4}
        ]
    },
    {
        name: "Wall Section",
        ingredients: [
            {ingredient: "Stakes", amount: 8},
            {ingredient: "Frame", amount: 2}
        ]
    },
    //Attatchables
    {
        name: "Buttress and Fin",
        ingredients: [
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Floor Tiles", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Crafting Deck",
        ingredients: [
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Floor Tiles", amount: 1},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Hanging Banner",
        ingredients: [
            {ingredient: "Stakes", amount: 2},
            {ingredient: "Foundation Segment", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Merlon",
        ingredients: [
            {ingredient: "Foundation Segment", amount: 3},
            {ingredient: "Floor Tiles", amount: 1},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Rampart",
        ingredients: [
            {ingredient: "Foundation Segment", amount: 4},
            {ingredient: "Floor Tiles", amount: 3},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Standing Banner",
        ingredients: [
            {ingredient: "Foundation Segment", amount: 2},
            {ingredient: "Stakes", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    //Buildings
    {
        name: "Cottage",
        ingredients: [
            {ingredient: "Architectural Arches", amount: 8},
            {ingredient: "Architectural Wall", amount: 8},
            {ingredient: "Foundation Segment", amount: 8},
            {ingredient: "Carpentry Nail", amount: 4},
            {ingredient: "Floor Tiles", amount: 8},
            {ingredient: "Roof Segment", amount: 8},
            {ingredient: "Chaos Ember", amount: 2},
        ]
    },
    {
        name: "Guild Hall",
        ingredients: [
            {ingredient: "Villa", amount: 1},
            {ingredient: "Architectural Arches", amount: 16},
            {ingredient: "Architectural Wall", amount: 16},
            {ingredient: "Foundation Segment", amount: 16},
            {ingredient: "Carpentry Nail", amount: 12},
            {ingredient: "Floor Tiles", amount: 16},
            {ingredient: "Roof Segment", amount: 16},
            {ingredient: "Chaos Ember", amount: 6},
        ]
    },
    {
        name: "Keep",
        ingredients: [
            {ingredient: "Throne Lodge", amount: 1},
            {ingredient: "Architectural Arches", amount: 20},
            {ingredient: "Architectural Wall", amount: 12},
            {ingredient: "Foundation Segment", amount: 20},
            {ingredient: "Carpentry Nail", amount: 14},
            {ingredient: "Floor Tiles", amount: 20},
            {ingredient: "Roof Segment", amount: 2},
            {ingredient: "Chaos Ember", amount: 10},
        ]
    },
    {
        name: "Manor",
        ingredients: [
            {ingredient: "Villa", amount: 1},
            {ingredient: "Architectural Arches", amount: 16},
            {ingredient: "Architectural Wall", amount: 16},
            {ingredient: "Foundation Segment", amount: 16},
            {ingredient: "Carpentry Nail", amount: 12},
            {ingredient: "Floor Tiles", amount: 16},
            {ingredient: "Roof Segment", amount: 16},
            {ingredient: "Chaos Ember", amount: 4},
        ]
    },
    {
        name: "Throne Lodge",
        ingredients: [
            {ingredient: "Villa", amount: 1},
            {ingredient: "Architectural Arches", amount: 16},
            {ingredient: "Architectural Wall", amount: 16},
            {ingredient: "Foundation Segment", amount: 16},
            {ingredient: "Carpentry Nail", amount: 12},
            {ingredient: "Floor Tiles", amount: 16},
            {ingredient: "Roof Segment", amount: 16},
            {ingredient: "Chaos Ember", amount: 6},
        ]
    },
    {
        name: "Training Camp",
        ingredients: [
            {ingredient: "Foundation Segment", amount: 4},
            {ingredient: "Carpentry Nail", amount: 4},
            {ingredient: "Ethereal Dust", amount: 35},
            {ingredient: "Architectural Wall", amount: 2},
            {ingredient: "Floor Tiles", amount: 4}
        ]
    },
    {
        name: "Villa",
        ingredients: [
            {ingredient: "Cottage", amount: 1},
            {ingredient: "Architectural Arches", amount: 8},
            {ingredient: "Architectural Wall", amount: 8},
            {ingredient: "Foundation Segment", amount: 8},
            {ingredient: "Carpentry Nail", amount: 6},
            {ingredient: "Floor Tiles", amount: 8},
            {ingredient: "Roof Segment", amount: 8},
            {ingredient: "Chaos Ember", amount: 3},
        ]
    },
    //chests
    {
        name: "Noble Chest",
        ingredients: [
            {ingredient: "Wood", amount: 72},
            {ingredient: "Ore", amount: 36},
            {ingredient: "Ethereal Dust", amount: 5},
        ]

    },
    {
        name: "Personal Chest",
        ingredients: [
            {ingredient: "Wood", amount: 72},
            {ingredient: "Ore", amount: 36},
            {ingredient: "Ethereal Dust", amount: 5},
        ]

    },
    {
        name: "Public Chest",
        ingredients: [
            {ingredient: "Wood", amount: 72},
            {ingredient: "Ore", amount: 36},
            {ingredient: "Ethereal Dust", amount: 5},
        ]

    },
    {
        name: "Vassal Chest",
        ingredients: [
            {ingredient: "Wood", amount: 72},
            {ingredient: "Ore", amount: 36},
            {ingredient: "Ethereal Dust", amount: 5},
        ]

    },
    //crafting stations
    {
        name: "Crafting Station: Alchemy",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: Blacksmithing",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: Cooking",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: Factory",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: General",
        ingredients: [
            {ingredient: "Ore", amount: 18},
            {ingredient: "Stone", amount: 18},
            {ingredient: "Wood", amount: 18},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: Jewelcrafting",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: Leatherworking",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: Necromancy",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: Runemaking",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: StoneMasonry",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    {
        name: "Crafting Station: Woodworking",
        ingredients: [
            {ingredient: "Ore", amount: 36},
            {ingredient: "Stone", amount: 36},
            {ingredient: "Wood", amount: 36},
            {ingredient: "Ethereal Dust", amount: 15},
        ]

    },
    //Geomancy
    {
        name: "Caldera Parcel",
        ingredients: [
            {ingredient: "Capital Parcel", amount: 3},
            {ingredient: "Gold", amount: 60_000},

        ]
    },
    {
        name: "Capital Parcel",
        ingredients: [
            {ingredient: "City Parcel", amount: 2},
            {ingredient: "Soil", amount: 4},
            {ingredient: "Gold", amount: 55_000},

        ]
    },
    {
        name: "City Parcel",
        ingredients: [
            {ingredient: "Fief Parcel", amount: 2},
            {ingredient: "Soil", amount: 4},
            {ingredient: "Gold", amount: 50_000},

        ]
    },
    {
        name: "Estate Parcel",
        ingredients: [
            {ingredient: "Woodland Hills Parcel", amount: 1},
            {ingredient: "Woodland Grove Parcel", amount: 1},
            {ingredient: "Soil", amount: 1},
            {ingredient: "Gold", amount: 15_000},

        ]
    },
    {
        name: "Fief Parcel",
        ingredients: [
            {ingredient: "Town Parcel", amount: 1},
            {ingredient: "Shire Parcel", amount: 1},
            {ingredient: "Soil", amount: 3},
            {ingredient: "Gold", amount: 45_000},
        ]
    },
    {
        name: "Grassland Parcel",
        ingredients: [
            {ingredient: "Soil", amount: 10},
        ]
    },
    {
        name: "Hamlet Parcel",
        ingredients: [
            {ingredient: "Estate Parcel", amount: 1},
            {ingredient: "Woodland Hills Parcel", amount: 1},
            {ingredient: "Soil", amount: 2},
            {ingredient: "Gold", amount: 25_000},
        ]
    },
    {
        name: "Homestead Parcel",
        ingredients: [
            {ingredient: "Grassland Parcel", amount: 3},
            {ingredient: "Gold", amount: 5_000},
        ]
    },
    {
        name: "Mountain Citadel Parcel",
        ingredients: [
            {ingredient: "Capital Parcel", amount: 3},
            {ingredient: "Gold", amount: 60_000},

        ]
    },
    {
        name: "Shire Parcel",
        ingredients: [
            {ingredient: "Hamlet Parcel", amount: 2},
            {ingredient: "Soil", amount: 2},
            {ingredient: "Gold", amount: 30_000},
        ]
    },
    {
        name: "Town Parcel",
        ingredients: [
            {ingredient: "Village Parcel", amount: 1},
            {ingredient: "Hamlet Parcel", amount: 1},
            {ingredient: "Soil", amount: 3},
            {ingredient: "Gold", amount: 40_000},

        ]
    },
    {
        name: "Village Parcel",
        ingredients: [
            {ingredient: "Shire Parcel", amount: 1},
            {ingredient: "Hamlet Parcel", amount: 1},
            {ingredient: "Soil", amount: 3},
            {ingredient: "Gold", amount: 35_000},
        ]
    },
    {
        name: "Woodland Creek Parcel",
        ingredients: [
            {ingredient: "Estate Parcel", amount: 1},
            {ingredient: "Woodland Groove Parcel", amount: 1},
            {ingredient: "Soil", amount: 2},
            {ingredient: "Gold", amount: 20_000},
        ]
    },
    {
        name: "Woodland Grove Parcel",
        ingredients: [
            {ingredient: "Grassland Parcel", amount: 3},
            {ingredient: "Gold", amount: 5_000},
        ]
    },
    {
        name: "Woodland Hills Parcel",
        ingredients: [
            {ingredient: "Homestead Parcel", amount: 1},
            {ingredient: "Woodland Grove Parcel", amount: 1},
            {ingredient: "Soil", amount: 1},
            {ingredient: "Gold", amount: 10_000},
        ]
    },
    //Stone Walls and Defenses
    {
        name: "Battlement Panel: Stone",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 2},
            {ingredient: "Carpentry Nail", amount: 3},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Battlement Panel: Wood",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 1},
            {ingredient: "Carpentry Nail", amount: 3},
            {ingredient: "Wood Wall Section", amount: 1},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Bridge and Ramp",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 3},
            {ingredient: "Floor Tiles", amount: 2},
            {ingredient: "Architectural Arches", amount: 2},
            {ingredient: "Foundation Segment", amount: 3},
            {ingredient: "Carpentry Nail", amount: 1},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Corner and Tower",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 6},
            {ingredient: "Floor Tiles", amount: 6},
            {ingredient: "Architectural Arches", amount: 4},
            {ingredient: "Foundation Segment", amount: 4},
            {ingredient: "Roof Segment", amount: 1},
            {ingredient: "Carpentry Nail", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Gatehouse",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 2},
            {ingredient: "Floor Tiles", amount: 8},
            {ingredient: "Architectural Arches", amount: 6},
            {ingredient: "Foundation Segment", amount: 6},
            {ingredient: "Roof Segment", amount: 6},
            {ingredient: "Carpentry Nail", amount: 6},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Octagon Tower",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 16},
            {ingredient: "Floor Tiles", amount: 8},
            {ingredient: "Architectural Arches", amount: 8},
            {ingredient: "Foundation Segment", amount: 8},
            {ingredient: "Roof Segment", amount: 10},
            {ingredient: "Carpentry Nail", amount: 10},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Round Tower",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 14},
            {ingredient: "Floor Tiles", amount: 6},
            {ingredient: "Architectural Arches", amount: 6},
            {ingredient: "Foundation Segment", amount: 6},
            {ingredient: "Roof Segment", amount: 8},
            {ingredient: "Carpentry Nail", amount: 8},
            {ingredient: "Ethereal Dust", amount: 5},

        ]
    },
    {
        name: "Square Tower",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 6},
            {ingredient: "Floor Tiles", amount: 4},
            {ingredient: "Architectural Arches", amount: 4},
            {ingredient: "Foundation Segment", amount: 4},
            {ingredient: "Roof Segment", amount: 6},
            {ingredient: "Carpentry Nail", amount: 4},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Wall 1x1",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 2},
            {ingredient: "Floor Tiles", amount: 3},
            {ingredient: "Architectural Arches", amount: 3},
            {ingredient: "Foundation Segment", amount: 3},
            {ingredient: "Carpentry Nail", amount: 3},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Wall 2x1",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 4},
            {ingredient: "Floor Tiles", amount: 3},
            {ingredient: "Architectural Arches", amount: 4},
            {ingredient: "Foundation Segment", amount: 4},
            {ingredient: "Carpentry Nail", amount: 4},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Wall 3x1",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 6},
            {ingredient: "Floor Tiles", amount: 3},
            {ingredient: "Architectural Arches", amount: 4},
            {ingredient: "Foundation Segment", amount: 6},
            {ingredient: "Carpentry Nail", amount: 4},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Wall Panel: Door",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Carpentry Nail", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Wall Panel: Fence",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Carpentry Nail", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Wall Panel: Solid",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Carpentry Nail", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Wall Panel: Window",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Carpentry Nail", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    {
        name: "Wedge Wall 3x1",
        ingredients: [
            {ingredient: "Stone Wall Section", amount: 6},
            {ingredient: "Floor Tiles", amount: 4},
            {ingredient: "Architectural Arches", amount: 4},
            {ingredient: "Foundation Segment", amount: 6},
            {ingredient: "Carpentry Nail", amount: 2},
            {ingredient: "Ethereal Dust", amount: 5},
            {ingredient: "Quality Assurance Control Kit", amount: 1}
        ]
    },
    //Vendors and Stalls
    {
        name: " Alchemy Themed Stall",
        ingredients: [
            {ingredient: "Ambrosia Solution", amount: 1},//needs ambrosia implemented
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "General Vendor Stall",
        ingredients: [
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Jewelry Themed Stall",
        ingredients: [
            {ingredient: "Rough Gem", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Leather Armor Themed Stall",
        ingredients: [
            {ingredient: "Peice of Armor", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Mail Armor Themed Stall",
        ingredients: [
            {ingredient: "Peice of Armor", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Melee Themed Stall",
        ingredients: [
            {ingredient: "Primary Melee Weapon", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Necromancy Themed Stall",
        ingredients: [
            {ingredient: "Desiccated Arm", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Plate Armor Themed Stall",
        ingredients: [
            {ingredient: "Piece of Armor", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Ranged Themed Stall",
        ingredients: [
            {ingredient: "Ranged Weapon", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Rune Themed Stall",
        ingredients: [
            {ingredient: "Runestone: Harvesting Tool", amount: 1},
            {ingredient: "Architectural Arches", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Themed Stall",
        ingredients: [
            {ingredient: "", amount: 1},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Stonemasonry Themed Stall",
        ingredients: [
            {ingredient: "Brick", amount: 2},
            {ingredient: "Foundation Segment", amount: 1},
            {ingredient: "Wood", amount: 15},
            {ingredient: "Frame", amount: 2},
            {ingredient: "Ethereal Dust", amount: 10},
        ]
    },
    {
        name: "Vendor NPC",
        ingredients: [
            {ingredient: "Crafted Vessel: Human", amount: 1},
            {ingredient: "Ethereal Dust", amount: 75},
        ]
    },


]