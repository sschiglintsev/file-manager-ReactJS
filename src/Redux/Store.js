import {combineReducers, legacy_createStore} from "redux";
import {TreeManagerReducer} from "./TreeManager-reducer";
import {FilesManagerReducer} from "./files-reducer";

const rootReducer = combineReducers({
    treeManager: TreeManagerReducer,
    filesManager: FilesManagerReducer
    }
)

export const store = legacy_createStore(rootReducer)
