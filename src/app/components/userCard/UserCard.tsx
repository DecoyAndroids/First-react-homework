import styles from './UserCard.module.css'
import * as types from '../../types.module'

export interface UserCardProps{
    userPageInfo:types.userInfo;
    userCardPageComponents: types.userCardComponents 
    
}
export const UserCard: React.FC<UserCardProps> = (props) => {
    const {userPageInfo,userCardPageComponents} = {...props}
    const Poster = userCardPageComponents.Poster
    const Skills = userCardPageComponents.Skills
    const JoinData = userCardPageComponents.JoinData
    return (
        <div className={styles.main_block}>
        <Poster avatarSrc={userPageInfo.avatarSrc} verificatedSrc={userPageInfo.verificatedSrc}
        full_name={userPageInfo.full_name} job_title={userPageInfo.job_title} country={userPageInfo.country}/>
        <Skills  skills={userPageInfo.skills}/>
        <JoinData clockSrc = {userPageInfo.clockSrc} data={userPageInfo.data}/> 
        </div>
    );
  }