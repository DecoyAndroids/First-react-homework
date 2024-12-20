import styles from './UserCardsHolder.module.css'
import * as types from '../../types.module'


export interface UserCardsHolderProps{
    usersData:Array<types.userInfo>;
    componentsData:types.userCardsComponents
    
}
export function StyleCondition(){
    if (typeof window !== "undefined") {
        let theme = localStorage.getItem('theme')
        if ( theme == 'Dark'){
            var flagCondition = true
        }else{
            var flagCondition = false
        }
        console.log(flagCondition)
        return flagCondition
        
    }
} 
export const UserCardsHolder: React.FC<UserCardsHolderProps> = (props) => {
    const {usersData,componentsData} = {...props}
    const UserCard = componentsData.UserCard
    if (typeof window !== 'undefined'){
        var flagCondition = StyleCondition()
    }
    return (
        <div className={styles.wrapper}>
                {usersData.map((userData,acc)=>{
                    return(
                        <div key={acc}>
                            <UserCard userPageInfo={userData} userCardPageComponents={componentsData.userCardComponents} flagCondition={flagCondition!}/>
                        </div>
                    )   
                })}
        </div>
    );
  }