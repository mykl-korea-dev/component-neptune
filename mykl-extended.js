import {returnComponent} from "./mykl-default.js";
import AbilityList from "./extended-component/ability/DutyList.js";

const MyklExtended = {
    AbilityList: returnComponent(AbilityList),
}

window.MYKL = {...window.MYKL, ...MyklExtended};