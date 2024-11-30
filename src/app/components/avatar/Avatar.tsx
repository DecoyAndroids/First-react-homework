import React from "react";

export interface AvatarProps{
    avatarSrc:string;
    styles:React.CSSProperties;
}
export const Avatar: React.FC<AvatarProps> = (props) => {
    const {avatarSrc,styles} = {...props}
    return (
    <>
        <img className={styles.avatar} src={avatarSrc}></img>
    </>
    );
  }