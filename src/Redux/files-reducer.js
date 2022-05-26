import {v1} from 'uuid';

const LOAD_FILE = 'LOAD-FILE'
const CHANGE_ACTIVE_FILE = 'CHANGE-ACTIVE-FILE'
const CHANGE_CLICK_FILE = 'CHANGE-CLICK-FILE'
const REMOVE_FILE = 'REMOVE-FILE'

const initState = {
    clickFile: '',
    activFile: {
        name:'',
        content:''
    },
    files:[
        {
            "name": "package.json",
            "content": "{\n  \"name\": \"portfolio\",\n  \"version\": \"0.1.0\",\n  \"private\": true,\n  \"homepage\": \"https://sschiglintsev.github.io/portfolio\",\n  \"dependencies\": {\n    \"@testing-library/jest-dom\": \"^5.16.4\",\n    \"@testing-library/react\": \"^13.1.1\",\n    \"@testing-library/user-event\": \"^13.5.0\", \n    \"@types/react-router-dom\": \"^5.3.3\",\n    \"gh-pages\": \"^4.0.0\",\n    \"react\": \"^18.1.0\",\n    \"react-dom\": \"^18.1.0\",\n    \"react-router-dom\": \"^6.3.0\",\n    \"react-scripts\": \"5.0.1\",\n    \"web-vitals\": \"^2.1.4\"\n  },\n  \"scripts\": {\n    \"start\": \"react-scripts start\",\n    \"build\": \"react-scripts build\",\n    \"test\": \"react-scripts test\",\n    \"eject\": \"react-scripts eject\",\n    \"predeploy\": \"npm run build\",\n    \"deploy\": \"gh-pages -d build\"\n  },\n  \"eslintConfig\": {\n    \"extends\": [\n      \"react-app\",\n      \"react-app/jest\"\n    ]\n  },\n  \"browserslist\": {\n    \"production\": [\n      \">0.2%\",\n      \"not dead\",\n      \"not op_mini all\"\n    ],\n    \"development\": [\n      \"last 1 chrome version\",\n      \"last 1 firefox version\",\n      \"last 1 safari version\"\n    ]\n  }\n}\n"
        },
        {
            "name": "folderData.js",
            "content": "Data: true" +
                "Text:false" +
                "Value:10"
        }
    ]};

export const FilesManagerReducer = (state = initState, action) => {
    //debugger
    switch (action.type) {
        case 'LOAD-FILE': {
            const newFile = {
                name:action.payload.name,
                content:action.payload.content
            }
            return {...state, files:[...state.files, newFile]}
        }
        case 'CHANGE-ACTIVE-FILE':
        {
            const file = state.files.filter(el => el.name===action.payload.name)
            return {...state, activFile: file[0] }
        }
        case 'CHANGE-CLICK-FILE': {
            return {...state, clickFile: action.payload.name}
        }
        case 'REMOVE-FILE': {
            return {...state, files: state.files.filter(el=>el.name!==action.payload.name)}
        }
        default:
            return state
    }

}

export const loadFileAC = (name, content) => {
    return {type: LOAD_FILE,
    payload :{
        name,
        content
    }}
}

export const ChangeActivFileAC = (name) => {
    return {type: CHANGE_ACTIVE_FILE,
        payload :{
            name
        }}
}

export const ChangeClickFileAC = (name) => {
    return {type: CHANGE_CLICK_FILE,
        payload :{
            name
        }}
}

export const RemoveFileAC = (name) => {
    return {type: REMOVE_FILE,
        payload :{
            name
        }}
}

