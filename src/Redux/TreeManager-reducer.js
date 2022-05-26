import {v1} from 'uuid';
const REMOVE_FILE_TREE = 'REMOVE-FILE-TREE'

const initState = {
    id: v1(),
    name: "Проект_1",
    isFolder: true,
    items: [
        {
            id: v1(),
            name: "folderData.js",
            isFolder: false,
            items: []

        },
        {
            id: v1(),
            name: "package.json",
            isFolder: false,
            items: []
        }

    ]
};

export const TreeManagerReducer = (state = initState, action) => {
    //debugger
    switch (action.type) {
        case 'REMOVE-FOLDER': {
            return {...state}
        }
        case 'REMOVE-FILE-TREE': {
            return {...state, items: state.items.filter(el=>el.name!==action.payload.name)}
        }
        case 'LOAD-FILE': {
            const newFile = {
                id: v1(),
                name: action.payload.name,
                isFolder: false,
                items: []
            }
            return {...state, items:[...state.items, newFile]}
        }
        default:
            return state
    }

}

export const removeFolder = (taskId, folderId) => {
    return {type: 'REMOVE-FOLDER', folderId: folderId}
}

export const RemoveFileTreeAC = (name) => {
    return {type: REMOVE_FILE_TREE,
        payload :{
            name
        }}
}

export const LoadFileTreeAC = (name) => {
    return {type: REMOVE_FILE_TREE,
        payload :{
            name
        }}
}
