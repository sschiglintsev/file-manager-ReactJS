import React from 'react';
import style from './App.module.css'
import {MenuListComposition} from "./Components/FuncBar";
import {BasicTabs} from "./Components/LabTabs";
import {FolderNavigator} from "./Components/FolderNavigator";
import {useSelector} from "react-redux";


export const App = () => {
    const explorer = useSelector(state => state.treeManager)
  return (
      <div>
        <MenuListComposition />
        <div className={style.view}>
          <div className={style.navigator}>
            <FolderNavigator explorer={explorer}/>
          </div>
          <div>
            <BasicTabs />
          </div>
        </div>
      </div>
  );
};
