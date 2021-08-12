import Dexie from "dexie";
import ResourceData from "./types/ResourceData";

const dbName = "crowfall-crafting-calc";

class CrowfallCraftingCalcDB extends Dexie {
  resources: Dexie.Table<ResourceData, string>;

  constructor() {
    super(dbName);

    this.version(1).stores({
      resources: "name,have,want,need"
    });
    this.resources = this.table("resources");
  }
}

const db = new CrowfallCraftingCalcDB();

export default db;
