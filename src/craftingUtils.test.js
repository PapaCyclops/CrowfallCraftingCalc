import {getCraftingSteps} from "./craftingUtils";
import {gravel, mulch, ore, oreConcentrate, soil, stone, wood} from "./resources/resources";

describe("getCraftingSteps",() =>{
    test('ore', () => {
        const result = getCraftingSteps(ore);
        const expected = new Map();
        expect(result).toEqual(expected);
    });

    test('ore concentrate', () => {
        const result = getCraftingSteps(oreConcentrate);
        const expected = new Map([
            [ore, 20]
        ])
        expect(result).toEqual(expected);
    });

    test('soil test', () => {
        const result = getCraftingSteps(soil);
        const expected = new Map([
            [oreConcentrate, 8],
            [gravel, 8],
            [mulch, 8],
            [ore, 160],
            [stone, 160],
            [wood, 160]
        ]);
        expect(result).toEqual(expected);
    });
});
