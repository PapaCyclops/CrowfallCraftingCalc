import './App.css';
import ResourceTable from "./ResourceTable";
import {CraftingRequirements} from "./CraftingRequirements";
import {woodlandHillsParcel} from "./resources/resources";

function App() {
    return (
        <div className="App">
            <h1>Crowfall Crafting Calc</h1>
            <CraftingRequirements resource={woodlandHillsParcel} amount={5}/>
            <ResourceTable/>
        </div>
    );
}


export default App;
