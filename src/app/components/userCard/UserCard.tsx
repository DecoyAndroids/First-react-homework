import styles from './UserCard.module.css'
import * as types from '../../types.module'


export interface UserCardProps{
    userPageInfo:types.userInfo;
    userCardPageComponents: types.userCardComponents;
    flagCondition:boolean; 
    
}
export const UserCard: React.FC<UserCardProps> = (props) => {
    const {userPageInfo,userCardPageComponents,flagCondition} = {...props}
    const Poster = userCardPageComponents.Poster
    const Skills = userCardPageComponents.Skills
    const JoinData = userCardPageComponents.JoinData

    return (
        <div className={flagCondition ? styles.main_blockDark : styles.main_block}>
        <Poster avatarSrc={userPageInfo.avatarSrc} verificatedSrc={userPageInfo.verificatedSrc}
        full_name={userPageInfo.full_name} job_title={userPageInfo.job_title} country={userPageInfo.country}
        flagCondition = {flagCondition}/>
        <Skills  skills={userPageInfo.skills} flagCondition = {flagCondition}/>
        <JoinData clockSrc = {userPageInfo.clockSrc} data={userPageInfo.data} flagCondition = {flagCondition}/>
        </div>
    );
  }