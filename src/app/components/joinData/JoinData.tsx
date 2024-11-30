import React, { createElement } from "react";
import { string } from "zod";


export interface JoinDataProps{
    styles:React.CSSProperties;
    data:string;
    clockSrc:string;
}


export const JoinData: React.FC<JoinDataProps> = (props) => {
    const {data,styles,clockSrc} = {...props}
    return (
        <div className={styles.joinDataInfo}>
        <img className={styles.joinDataClock} src={clockSrc}/>
        <div className={styles.joinData}>
            
            Joined on {data}
        </div>
        </div>
    );
  }