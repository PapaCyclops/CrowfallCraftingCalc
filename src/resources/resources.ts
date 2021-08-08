export interface Resource {
  name: string;
  group: string;
  ingredients?: Map<Resource, number>;
}

export const resources: Resource[] = [];

function createResource(
  group: string,
  name: string,
  ingredients?: [Resource, number][]
): Resource {
  const resource: Resource = {group, name};
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

//<editor-fold desc "Alchemy Craft">
const alchemyCraft = "Alchemy Craft";
export const powderedStone = createResource(alchemyCraft, "Powdered Stone", [
  [stone, 8]
]);
//</editor-fold>

//<editor-fold desc="Purchased">
export const waterFlask = createResource("Purchase", "Water Flask", [
  [gold, 20 /*todo update price*/]
]);
//</editor-fold>

//<editor-fold desc="Geomancy Components">
export const geomancyComponent = "Geomancy Component";
export const mulch = createResource(geomancyComponent, "Mulch", [[wood, 20]]);
export const oreConcentrate = createResource(
  geomancyComponent,
  "Ore Concentrate",
  [[ore, 20]]
);
export const gravel = createResource(geomancyComponent, "Gravel", [
  [stone, 20]
]);
export const soil = createResource(geomancyComponent, "Soil", [
  [gravel, 8],
  [mulch, 8],
  [oreConcentrate, 8]
]);
//</editor-fold>

//<editor-fold desc = "Stonemasonry Components">
export const stonemasonryComponent = "Stonemasonry Component";
export const brick = createResource(stonemasonryComponent, "Brick", [
  [stone, 75],
  [etherealDust, 5]
]);
export const carpentryNail = createResource(
  stonemasonryComponent,
  "Carpentry Nail",
  [
    [ore, 60],
    [etherealDust, 5]
  ]
);
export const diamondCuttingBlade = createResource(
  stonemasonryComponent,
  "Diamond Cutting Blade",
  [
    [ore, 6],
    [cuttingGrit, 2]
  ]
);
export const floorTiles = createResource(stonemasonryComponent, "Floor Tiles", [
  [stone, 75],
  [etherealDust, 5]
]);
export const grindingWheel = createResource(
  stonemasonryComponent,
  "Grinding Wheel",
  [[stone, 12]]
);
export const polishingPaste = createResource(
  stonemasonryComponent,
  "Polishing Paste",
  [
    [waterFlask, 2],
    [powderedStone, 8]
  ]
);
export const qualityAssuranceControlKit = createResource(
  stonemasonryComponent,
  "Quality Assurance Control Kit",
  [
    [ore, 25],
    [wood, 25],
    [stone, 25],
    [hide, 25],
    [etherealDust, 5]
  ]
);
export const woodShingles = createResource(
  stonemasonryComponent,
  "Wood Shingles",
  [
    [wood, 80],
    [carpentryNail, 2]
  ]
);
export const woodStakes = createResource(stonemasonryComponent, "Wood Stakes", [
  [wood, 75],
  [etherealDust, 5]
]);
//</editor-fold>

//<editor-fold desc " Architecture Components">
const architecturalComponents = "Architectural Components";
export const frame = createResource(architecturalComponents, "Frame", [
  [wood, 80],
  [carpentryNail, 2]
]);
export const architecturalArches = createResource(
  architecturalComponents,
  "Architectural Arches",
  [
    [brick, 2],
    [frame, 2],
    [carpentryNail, 1]
  ]
);
export const wallInsulation = createResource(
  architecturalComponents,
  "Wall Insulation",
  [
    [hide, 10],
    [mulch, 4]
  ]
);
export const architecturalWall = createResource(
  architecturalComponents,
  "Architectural Wall",
  [
    [brick, 2],
    [frame, 4],
    [carpentryNail, 1],
    [wallInsulation, 2]
  ]
);
export const foundationSegment = createResource(
  architecturalComponents,
  "Foundation Segment",
  [
    [brick, 4],
    [gravel, 2]
  ]
);
export const roofSegment = createResource(
  architecturalComponents,
  "Roof Segment",
  [
    [woodShingles, 4],
    [carpentryNail, 4]
  ]
);
export const wallSection = createResource(
  architecturalComponents,
  "Wall Section",
  [
    [woodStakes, 8],
    [frame, 2]
  ]
);
//</editor-fold>

//<editor-fold desc "Attatchables">
const attatchable = "Attachables";
export const buttressAndFin = createResource(attatchable, "Buttress and Fin", [
  [foundationSegment, 1],
  [floorTiles, 2],
  [etherealDust, 5],
  [qualityAssuranceControlKit, 1]
]);
export const craftingDeck = createResource(attatchable, "Crafting Deck", [
  [architecturalArches, 1],
  [foundationSegment, 1],
  [floorTiles, 1],
  [etherealDust, 5],
  [qualityAssuranceControlKit, 1]
]);
export const hangingBanner = createResource(attatchable, "Hanging Banner", [
  [woodStakes, 2],
  [foundationSegment, 2],
  [etherealDust, 5],
  [qualityAssuranceControlKit, 1]
]);
export const merlon = createResource(attatchable, "Merlon", [
  [foundationSegment, 3],
  [floorTiles, 1],
  [etherealDust, 5],
  [qualityAssuranceControlKit, 1]
]);
export const rampart = createResource(attatchable, "Rampart", [
  [foundationSegment, 4],
  [floorTiles, 3],
  [etherealDust, 5],
  [qualityAssuranceControlKit, 1]
]);
export const standingBanner = createResource(attatchable, "Standing Banner", [
  [foundationSegment, 2],
  [woodStakes, 2],
  [etherealDust, 5],
  [qualityAssuranceControlKit, 1]
]);
//</editor-fold>

//<editor-fold desc "Buildings"
const buildings = "Buildings";
export const cottage = createResource(buildings, "Cottage", [
  [architecturalWall, 8],
  [architecturalArches, 8],
  [foundationSegment, 8],
  [carpentryNail, 4],
  [floorTiles, 8],
  [roofSegment, 8],
  [chaosEmber, 2]
]);
export const villa = createResource(buildings, "Villa", [
  [cottage, 1],
  [architecturalWall, 8],
  [architecturalArches, 8],
  [foundationSegment, 8],
  [carpentryNail, 6],
  [floorTiles, 8],
  [roofSegment, 8],
  [chaosEmber, 3]
]);
export const guildHall = createResource(buildings, "Guild Hall", [
  [villa, 1],
  [architecturalWall, 16],
  [architecturalArches, 16],
  [foundationSegment, 16],
  [carpentryNail, 12],
  [floorTiles, 16],
  [roofSegment, 16],
  [chaosEmber, 6]
]);
export const throneLodge = createResource(buildings, "Throne Lodge", [
  [villa, 1],
  [architecturalWall, 16],
  [architecturalArches, 16],
  [foundationSegment, 16],
  [carpentryNail, 12],
  [floorTiles, 16],
  [roofSegment, 16],
  [chaosEmber, 6]
]);
export const keep = createResource(buildings, "Keep", [
  [throneLodge, 1],
  [architecturalWall, 12],
  [architecturalArches, 20],
  [foundationSegment, 20],
  [carpentryNail, 14],
  [floorTiles, 20],
  [roofSegment, 2],
  [chaosEmber, 10]
]);
export const manor = createResource(buildings, "Manor", [
  [villa, 1],
  [architecturalWall, 16],
  [architecturalArches, 16],
  [foundationSegment, 16],
  [carpentryNail, 12],
  [floorTiles, 16],
  [roofSegment, 16],
  [chaosEmber, 4]
]);
export const trainingCamp = createResource(buildings, "Training Camp", [
  [foundationSegment, 4],
  [carpentryNail, 4],
  [etherealDust, 35],
  [architecturalWall, 2],
  [floorTiles, 4]
]);
//</editor-fold>

//<editor-fold desc "Crafting Stations>
const craftingStations = "Crafting Stations";
export const alchemyCraftingStation = createResource(
  craftingStations,
  "Alchemy Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const blacksmithingCraftingStation = createResource(
  craftingStations,
  "Blacksmithing Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const cookingCraftingStation = createResource(
  craftingStations,
  "Cooking Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const factoryCraftingStation = createResource(
  craftingStations,
  "Factory Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const generalCraftingStation = createResource(
  craftingStations,
  "General Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const jewelryCraftingStation = createResource(
  craftingStations,
  "Jewelry Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const leatherworkingCraftingStation = createResource(
  craftingStations,
  "Leatherworking Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const necromancyCraftingStation = createResource(
  craftingStations,
  "Necromancy Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const runemakingCraftingStation = createResource(
  craftingStations,
  "Runemaking Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const stonemasonryCraftingStation = createResource(
  craftingStations,
  "Stonemasonry Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
export const woodworkingCraftingStation = createResource(
  craftingStations,
  "Woodworking Crafting Station",
  [
    [ore, 36],
    [stone, 36],
    [wood, 36],
    [etherealDust, 15]
  ]
);
//</editor-fold>

//<editor-fold desc "Geomancy">
const geomancy = "Geomancy";
export const grasslandParcel = createResource(geomancy, "Grassland Parcel", [
  [soil, 10]
]);
export const woodlandGroveParcel = createResource(
  geomancy,
  "Woodland Grove Parcel",
  [
    [grasslandParcel, 3],
    [gold, 5_000]
  ]
);
export const homesteadParcel = createResource(geomancy, "Homestead Parcel", [
  [grasslandParcel, 3],
  [gold, 5_000]
]);
export const woodlandHillsParcel = createResource(
  geomancy,
  "Woodland Hills Parcel",
  [
    [homesteadParcel, 1],
    [woodlandGroveParcel, 1],
    [soil, 1],
    [gold, 10_000]
  ]
);
export const estateParcel = createResource(geomancy, "Estate Parcel", [
  [woodlandHillsParcel, 1],
  [woodlandGroveParcel, 1],
  [soil, 1],
  [gold, 15_000]
]);
export const woodlandCreekParcel = createResource(
  geomancy,
  "Woodland Creek Parcel",
  [
    [estateParcel, 1],
    [woodlandGroveParcel, 1],
    [soil, 2],
    [gold, 20_000]
  ]
);
export const hamletParcel = createResource(geomancy, "Hamlet Parcel", [
  [estateParcel, 1],
  [woodlandHillsParcel, 1],
  [soil, 2],
  [gold, 25_000]
]);
export const shireParcel = createResource(geomancy, "Shire Parcel", [
  [hamletParcel, 2],
  [soil, 2],
  [gold, 30_000]
]);
export const villageParcel = createResource(geomancy, "Village Parcel", [
  [shireParcel, 1],
  [hamletParcel, 1],
  [soil, 3],
  [gold, 35_000]
]);
export const townParcel = createResource(geomancy, "Town Parcel", [
  [villageParcel, 1],
  [hamletParcel, 1],
  [soil, 3],
  [gold, 40_000]
]);
export const fiefParcel = createResource(geomancy, "Fief Parcel", [
  [townParcel, 1],
  [shireParcel, 1],
  [soil, 3],
  [gold, 45_000]
]);
export const cityParcel = createResource(geomancy, "City Parcel", [
  [fiefParcel, 2],
  [soil, 2],
  [gold, 50_000]
]);
export const capitalParcel = createResource(geomancy, "Capital Parcel", [
  [cityParcel, 2],
  [soil, 4],
  [gold, 55_000]
]);
export const calderaParcel = createResource(geomancy, "Caldera Parcel", [
  [capitalParcel, 3],
  [gold, 60_000]
]);
export const mountainCitadelParcel = createResource(
  geomancy,
  "Mountain Citadel Parcel",
  [
    [capitalParcel, 3],
    [gold, 60_000]
  ]
);

//</editor-fold>
//<editor-fold desc "Vendors and Stalls">
const vendorStalls = "Vendor Stalls";
//export const  alchemyStall = createResource(vendorStalls,"Alchemy Stall",[[ambrosiaSolution,1],[foundationSegment,1],[architecturalArches,1],[wood, 15],[frame,2],[etherealDust,10]]);
export const generalStall = createResource(vendorStalls, "General Stall", [
  [architecturalArches, 1],
  [foundationSegment, 1],
  [wood, 15],
  [frame, 2],
  [etherealDust, 10]
]);
export const jewelryStall = createResource(vendorStalls, "Jewelry Stall", [
  [architecturalArches, 1],
  [foundationSegment, 1],
  [wood, 15],
  [frame, 2],
  [etherealDust, 10]
]);
export const leatherArmorStall = createResource(
  vendorStalls,
  "Leather Armor Stall",
  [
    [architecturalArches, 1],
    [foundationSegment, 1],
    [wood, 15],
    [frame, 2],
    [etherealDust, 10]
  ]
);
export const mailArmorStall = createResource(vendorStalls, "Mail Armor Stall", [
  [architecturalArches, 1],
  [foundationSegment, 1],
  [wood, 15],
  [frame, 2],
  [etherealDust, 10]
]);
export const plateArmorStall = createResource(
  vendorStalls,
  "Plate Armor Stall",
  [
    [architecturalArches, 1],
    [foundationSegment, 1],
    [wood, 15],
    [frame, 2],
    [etherealDust, 10]
  ]
);
export const meleeStall = createResource(vendorStalls, "Melee Stall", [
  [architecturalArches, 1],
  [foundationSegment, 1],
  [wood, 15],
  [frame, 2],
  [etherealDust, 10]
]);
export const rangeStall = createResource(vendorStalls, "Range Stall", [
  [architecturalArches, 1],
  [foundationSegment, 1],
  [wood, 15],
  [frame, 2],
  [etherealDust, 10]
]);
export const necromancyStall = createResource(
  vendorStalls,
  "Necromancy Stall",
  [
    [architecturalArches, 1],
    [foundationSegment, 1],
    [wood, 15],
    [frame, 2],
    [etherealDust, 10]
  ]
);
export const runeStall = createResource(vendorStalls, "Rune Stall", [
  [architecturalArches, 1],
  [foundationSegment, 1],
  [wood, 15],
  [frame, 2],
  [etherealDust, 10]
]);
export const stoneMasonStall = createResource(
  vendorStalls,
  "Stonemason Stall",
  [
    [brick, 2],
    [architecturalArches, 1],
    [foundationSegment, 1],
    [wood, 15],
    [frame, 2],
    [etherealDust, 10]
  ]
);
//</editor-fold>
