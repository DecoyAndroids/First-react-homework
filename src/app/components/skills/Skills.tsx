import React, { createElement } from "react";
import styles from './Skills.module.css'


export interface SkillsProps{
    skills:Array<{id:number,skill:string}>;
    flagCondition:boolean
}


export const Skills: React.FC<SkillsProps> = (props) => {
    const {skills,flagCondition} = {...props}
    return (
        <div className={flagCondition ? styles.skills_blockDark :  styles.skills_block}>
            <div className={flagCondition ? styles.skills_titleDark:styles.skills_title}>
                SKILLS
            </div>
            <div className={flagCondition ? styles.skillsDark:styles.skills }>
                {skills.map((skill)=>{
                    return(
                        <div key={skill.id} className={flagCondition ? styles.skillDark : styles.skill}>
                            {skill.skill}
                        </div>
                    )   
                })}
            </div>
        </div>
    );
  }