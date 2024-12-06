import React, { createElement } from "react";
import styles from './JoinData.module.css'
import {StaticImageData} from 'next/image'
import Image from  'next/image'


export interface JoinDataProps{
    data:string;
    clockSrc:StaticImageData;
}


export const JoinData: React.FC<JoinDataProps> = (props) => {
    const {data,clockSrc} = {...props}
    return (
        <div className={styles.joinDataInfo}>
        <Image src={clockSrc} width={26} alt='icon of clock'/>
            <p className={styles.joinData}>
            Joined on {data}
            </p>
        </div>
    );
  }