import React, { createElement } from "react";


export interface SkillsProps{
    styles:React.CSSProperties;
    skills:Array<object>;
}


export const Skills: React.FC<SkillsProps> = (props) => {
    const {skills,styles} = {...props}
    return (
        <div>
            <div className={styles.skills_title}>
                SKILLS
            </div>
            <br/>
            <div className={styles.skills}>
                {skills.map(function(skill){
                    return(
                        <div className={styles.skill}>
                            {skill.skill}
                        </div>
                    )   
                })}
            </div>
        </div>
    );
  }