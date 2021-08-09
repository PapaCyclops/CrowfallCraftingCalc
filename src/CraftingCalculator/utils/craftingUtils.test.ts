import {
  gravel,
  mulch,
  ore,
  oreConcentrate,
  soil,
  stone,
  wood
} from "../../resources/resources";
import {getCraftingSteps} from "./craftingUtils";

describe("getCraftingSteps", () => {
  test("ore", () => {
    const result = getCraftingSteps(ore);
    const expected = new Map();
    expect(result).toEqual(expected);
  });

  test("ore concentrate", () => {
    const result = getCraftingSteps(oreConcentrate);
    const expected = new Map([[ore, 20]]);
    expect(result).toEqual(expected);
  });

  test("soil test", () => {
    const result = getCraftingSteps(soil);
    const expected = new Map([
      [oreConcentrate, 8],
      [gravel, 8],
      [mulch, 8],
      [ore, 160],
      [stone, 160],
      [wood, 160]
    ]);
    expect(Array.from(result.entries())).toEqual(
      expect.arrayContaining(Array.from(expected.entries()))
    );
  });
  test("10 soil test", () => {
    const result = getCraftingSteps(soil, 10);
    const expected = new Map([
      [oreConcentrate, 80],
      [gravel, 80],
      [mulch, 80],
      [ore, 1600],
      [stone, 1600],
      [wood, 1600]
    ]);
    expect(Array.from(result.entries())).toEqual(
      expect.arrayContaining(Array.from(expected.entries()))
    );
  });
});
