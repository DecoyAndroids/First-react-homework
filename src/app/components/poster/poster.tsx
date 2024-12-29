import React from "react";
import styles from './Poster.module.css'
import Image from 'next/image'
import {StaticImageData} from  'next/image'

export interface PosterProps{
    avatarSrc:StaticImageData;
    verificatedSrc:StaticImageData;
    full_name:string;
    job_title:string;
    country:string;
    flagCondition:boolean;
}
export const Poster: React.FC<PosterProps> = (props) => {
    const {avatarSrc,verificatedSrc,full_name,job_title,country,flagCondition} = {...props}
    return (
        <div className = {flagCondition ? styles.posterDark : styles.poster }>
            <Image src={avatarSrc} 
                width={241}
                alt ='avatar of user' 
                className={flagCondition ? styles.avatarDark : styles.avatar } />
            <div className={flagCondition ? styles.full_nameDark : styles.full_name}>  
                {full_name} <Image src={verificatedSrc} width={24} alt ='point of verificate' className={styles.verificatedSrc} />
            </div>
            <div className={flagCondition ? styles.job_title_and_countryDark : styles.job_title_and_country}>
                {job_title}, {country}
            </div>
        </div>
    );
  }