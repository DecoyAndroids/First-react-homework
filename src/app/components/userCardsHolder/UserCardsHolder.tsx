import styles from './UserCardsHolder.module.css'
import * as types from '../../types.module'


export interface UserCardsHolderProps{
    usersData:Array<types.userInfo>;
    componentsData:types.userCardsComponents 
}
export const UserCardsHolder: React.FC<UserCardsHolderProps> = (props) => {
    const {usersData,componentsData} = {...props}
    const UserCard = componentsData.UserCard
    return (
        <div className={styles.wrapper}>
                {usersData.map((userData,acc)=>{
                    return(
                        <div key={acc} className='UserCardWrapper'>
                            <UserCard userPageInfo={userData} userCardPageComponents={componentsData.userCardComponents}/>
                        </div>
                    )   
                })}
        </div>
    );
  }