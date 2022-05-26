import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {OpenFile} from "./OpenFile";
import {useDispatch, useSelector} from "react-redux";
import {RemoveFileAC} from "../Redux/files-reducer";
import {RemoveFileTreeAC} from "../Redux/TreeManager-reducer";

export const MenuListComposition = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const dispatch = useDispatch()

    // const handleToggle = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // };
    //
    // const handleClose = (event) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //         return;
    //     }
    //
    //     setOpen(false);
    // };
    //
    // function handleListKeyDown(event) {
    //     if (event.key === 'Tab') {
    //         event.preventDefault();
    //         setOpen(false);
    //     } else if (event.key === 'Escape') {
    //         setOpen(false);
    //     }
    // }

    const addFolder = () => {

    }
    const removeFolder = () => {

    }

    const nameClickFile = useSelector(state => state.filesManager.clikFile)
    const removeFile = () => {
        dispatch(RemoveFileAC(nameClickFile))
        dispatch(RemoveFileTreeAC(nameClickFile))
    }


    const saveFile = (filename, data) => {
        const blob = new Blob([data], {type: 'text'});
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, filename);
        } else {
            const elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = filename;
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }

    const file = useSelector(state => state.filesManager.activFile)

    const saveFileHandler = () => {
        if (file.name !== '') {
            saveFile(file.name, file.content)
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <Paper>
                <MenuList style={{color: 'black', display: 'flex'}}>
                    <MenuItem onClick={() => addFolder()}>Создать папку</MenuItem>
                    <MenuItem onClick={() => removeFolder()}>Удалить папку</MenuItem>
                    <MenuItem><OpenFile/></MenuItem>
                    <MenuItem onClick={saveFileHandler}>Скачать файл</MenuItem>
                    <MenuItem onClick={() => removeFile()}>Удалить файл</MenuItem>
                    <MenuItem>Переименовать</MenuItem>
                </MenuList>
            </Paper>
        </Stack>
    );
}

