import React from "react";
import {Avatar} from "../avatar/Avatar"

export interface PosterProps{
    avatarSrc:string;
    verificatedSrc:string;
    styles:React.CSSProperties;
    full_name:string;
    job_title:string;
    country:string;
}
export const Poster: React.FC<PosterProps> = (props) => {
    const {avatarSrc,verificatedSrc,styles,full_name,job_title,country} = {...props}
    return (
        <div className = {styles.poster}>
            <Avatar avatarSrc={avatarSrc} styles={styles}/>
            <div className={styles.full_name}> 
                {full_name} <img src={verificatedSrc} className={styles.verificated}/>
            </div>
            <br/>
            <div className={styles.job_title_and_country}>
                {job_title}, {country}
            </div>
            <br/>
        </div>
    );
  }