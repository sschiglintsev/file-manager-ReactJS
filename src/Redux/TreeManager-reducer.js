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
    switch (action.type) {
        case 'REMOVE-FOLDER': {
            return {...state}
        }
        case 'REMOVE-FILE-TREE': {
            return {...state, items: state.items.filter(el=>el.name!==action.payload.name)}
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
