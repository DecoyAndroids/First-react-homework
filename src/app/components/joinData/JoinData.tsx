import React, { createElement } from "react";
import styles from './JoinData.module.css'
import {StaticImageData} from 'next/image'
import Image from  'next/image'



export interface JoinDataProps{
    data:string;
    clockSrc:StaticImageData;
    flagCondition:boolean;
}


export const JoinData: React.FC<JoinDataProps> = (props) => {
    const {data,clockSrc,flagCondition} = {...props}

    return (
        <div className={flagCondition ? styles.joinDataInfoDark : styles.joinDataInfo}>
        <Image src={clockSrc} width={26} alt='icon of clock'/>
            <p className={flagCondition ? styles.joinDataDark : styles.joinData}>
            Joined on {data}
            </p>
        </div>
    );
  }