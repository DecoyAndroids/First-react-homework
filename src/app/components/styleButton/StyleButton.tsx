"use client"
import styles from './StyleButton.module.css'
import React  from 'react'

export interface StyleButtonProps{
}
function ChangeTheme(){
    let bodyHtml = document.getElementById('1')
    let htmlElemClass = bodyHtml?.getAttribute("class");
    if (bodyHtml?.getAttribute('class')?.includes("Dark")){
        bodyHtml?.setAttribute('class',htmlElemClass!.replace('Dark',''))
        localStorage.setItem('theme','Light');
    }else if (!document.getElementById('1')?.getAttribute('class')?.includes("Dark")){
        bodyHtml?.setAttribute('class',htmlElemClass!.concat('Dark'))
        localStorage.setItem('theme','Dark');
    }
}

export const StyleButton:React.FC<StyleButtonProps> = (props) => {
    const {} = {...props}
    function ChangeThemeOnloadPage(){
        let bodyHtml = document.getElementById('1')
        let htmlElemClass = bodyHtml?.getAttribute("class");
        let theme = localStorage.getItem('theme')
        if (theme == 'Dark'){
            bodyHtml?.setAttribute('class','bodyDark')
        }
    }

    if (typeof document !== 'undefined'){
        ChangeThemeOnloadPage()
    }
    
    return(
        <div className={styles.changeButtonBlock}>
            <button onClick={()=>{ChangeTheme()}} className={styles.changeButton}>
                Change theme
            </button>
        </div>
    );
}