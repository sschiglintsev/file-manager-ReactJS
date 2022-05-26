import React from 'react';
import style from './OpenFile.module.css'
import MenuItem from "@mui/material/MenuItem";
import {useDispatch} from "react-redux";
import {loadFileAC} from "../Redux/files-reducer";

export const OpenFile = () => {

    const dispatch = useDispatch()
    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        const name = e.target.files[0].name
        reader.onload = async (e) => {
            const text = (e.target.result)
            dispatch(loadFileAC(name, text))
        };
        reader.readAsText(e.target.files[0])


    }
    return (
        <>
            <input id="input__file" type="file" onChange={(e) => showFile(e)} className={style.input__file}/>
            <label htmlFor="input__file">Загрузить файл</label>
        </>
    );
};

