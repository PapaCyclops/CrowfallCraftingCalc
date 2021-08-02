import {resources} from "./resources/resources";
import ResourceRow from "./ResourceRow";

export default function ResourceTable() {
    const resourcesByGroup = resources.reduce((map, resource) => {
        map[resource.group] = map[resource.group] || [];
        map[resource.group].push(resource);
        return map;
    }, {})
    return <>
        <h2>Items</h2>
        <table style={{margin: "0 auto"}}>
            <tbody>
            {Object.entries(resourcesByGroup).map(([group, groupResources]) => <>
                <tr>
                    <th colSpan={2}>
                        {group}
                    </th>
                </tr>
                {groupResources.map(resource => <ResourceRow {...resource}/>)}
            </>)}
            </tbody>
        </table>
    </>;
}