import React, { createElement } from "react";
import styles from './Skills.module.css'

export interface SkillsProps{
    skills:Array<{id:number,skill:string}>;
}


export const Skills: React.FC<SkillsProps> = (props) => {
    const {skills} = {...props}
    return (
        <div>
            <div className={styles.skills_title}>
                SKILLS
            </div>
            <br/>
            <div className={styles.skills}>
                {skills.map((skill)=>{
                    return(
                        <div key={skill.id} className={styles.skill}>
                            {skill.skill}
                        </div>
                    )   
                })}
            </div>
        </div>
    );
  }