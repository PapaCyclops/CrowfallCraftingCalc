import {getCraftingSteps} from "./craftingUtils";
import {Resource} from "./resources/resources";

export function CraftingRequirements({resource, amount}: { resource: Resource, amount: number }) {
    const steps = getCraftingSteps(resource, amount);
    return <section>
        <h2>Crafting Requirements</h2>
        <p>
            {resource.name} - {amount}
        </p>
        <table style={{margin: "0 auto"}}>
            <thead>
            <tr>
                <th>Item</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {Array.from(steps.entries()).sort(([, amountA], [, amountB]) => amountB - amountA).map(([resource, amount]) =>
                <tr>
                    <td>{resource.name}</td>
                    <td>{amount}</td>
                </tr>)}
            </tbody>
        </table>
    </section>;
}