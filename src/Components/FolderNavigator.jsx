import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {ChangeActivFileAC, ChangeClickFileAC} from "../Redux/files-reducer";

export const FolderNavigator = (props) => {
    const [expand, setExpand] = useState(false);
    const dispatch = useDispatch()

    const onDoubleClickHandler = (name) => {
        dispatch(ChangeActivFileAC(name))
    }

    const onClickHandler = () => {
        setExpand(!expand)
        dispatch(ChangeClickFileAC(props.explorer.name))

    }

    return (
        <div >
            <div >
                <label onDoubleClick={()=>onDoubleClickHandler(props.explorer.name)}
                       onClick={onClickHandler}
                       style={{border:props.explorer.isFolder===true ? '1px solid':'0px' }}>
                    {props.explorer.name}
                </label>
            </div>
            <br/>
            <div style={{display: expand ? "block" : "none", paddingLeft: 15}}>
                {props.explorer.items.map((explore) => (
                    <FolderNavigator key={explore.name} explorer={explore}/>
                ))}
            </div>
        </div>
    );
}
