"use client"
import styles from './StyleButton.module.css'

export interface StyleButtonProps{
}

function GeneringIdForAllDivs(FlagParent:boolean,someParents:Array<any>,IdPull:Array<string>){
    const body = document.getElementById('1');
    let someParentsActual = someParents;
    if (FlagParent){
        someParents = [];
    }
    let counter = 0;
    const bodyChild = body?.children;
    if (bodyChild && !FlagParent){
        IdPull.push('1')
        for (let i = 0; i < bodyChild?.length; i++){
            if (bodyChild[i]?.getAttribute('class') != null){
                counter++;
                let bodyChildDiv = bodyChild[i];
                let IdForBodyChildDiv = String(bodyChildDiv?.parentElement?.getAttribute('id'))+'.' + String(counter);
                if (IdForBodyChildDiv.length){
                    bodyChildDiv?.setAttribute('id',IdForBodyChildDiv);
                    IdPull.push(String(IdForBodyChildDiv))
                    if (bodyChildDiv?.hasChildNodes){
                        someParents?.push(bodyChildDiv);
                    }
                }
            }
        }
    }else{
        for (let i = 0; i < someParentsActual.length; i++){
            let childrens = someParentsActual[i].children;
            for (let j = 0; j<childrens.length; j++){
                counter++;
                let IdForChildrens = String(someParentsActual[i].getAttribute('id'))+'.' + String(counter);
                IdPull.push(String(IdForChildrens))
                childrens[j].setAttribute('id',IdForChildrens);
                if (childrens[j].hasChildNodes){
                    someParents?.push(childrens[j]);
                }
            }
            counter = 0
        }
    }
    if (someParents?.length != 0){
        GeneringIdForAllDivs(true,someParents,IdPull);
    }
    return IdPull
    
}

function ChangeTheme(key:string){
    var someParent:Array<any> = []
    var IdPull:Array<string> = []
    IdPull = GeneringIdForAllDivs(false,someParent,IdPull)
    for (let i=0; i < IdPull.length; i++){
        let htmlElem = document.getElementById(String(IdPull[i]));
        let htmlElemClass = htmlElem?.getAttribute("class");
        if (htmlElemClass?.includes("Dark") || key == 'Light' && htmlElemClass?.includes("Dark")){
            htmlElem?.setAttribute('class',htmlElemClass.replace('Dark',''))
        }else if(!htmlElemClass?.includes("Dark") && htmlElemClass?.length || key == 'Dark' && htmlElemClass?.length){
            htmlElem?.setAttribute('class',htmlElemClass.concat('Dark'))
        }
    }
}

export const StyleButton:React.FC<StyleButtonProps> = (props) => {
    const {} = {...props} 
    return(
        <div className={styles.changeButtonBlock}>
            <button onClick={()=>{ChangeTheme('')}} className={styles.changeButton}>
                Change theme
            </button>
        </div>
    );
}