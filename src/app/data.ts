import { Poster } from "./components/poster/poster"
import { JoinData } from "./components/joinData/JoinData"
import { Skills } from "./components/skills/Skills"
import { StyleButton } from "./components/styleButton/StyleButton"
import { UserCard } from "./components/userCard/UserCard"
import * as types from "./types.module"
import avatarDikovSrc from '../../public/avatar.jpg'
import avatarDanilovSrc from '../../public/avatar2.jpg'
import avatarKonovalovSrc from '../../public/avatar3.jpg'
import verificatedSrc from '../../public/verificated.jpg'
import clockSrc from '../../public/clock2.png'


export const skillsDikov:Array<types.skill> = [{id:0, skill:'HTML'}, {id:1, skill:'CSS'}, {id:2, skill:'JS'},
    {id:3, skill:'React'}, {id:4, skill:'Python'}, {id:5, skill:'C#'},
    {id:6, skill:'Postrge'}, {id:7, skill:'MongoDB'}, {id:8, skill:'Blender'},
    {id:9, skill:'Fl studio'}, {id:10, skill:'Factorio'}, {id:11, skill:'War Thunder'},
    {id:12, skill:'TBoI'}, {id:13, skill:'CS2'}, {id:14, skill:'Dota 2'},
    {id:15, skill:'Yandex music'}]


export const DikovInfo:types.userInfo = {
    avatarSrc:avatarDikovSrc,
    verificatedSrc:verificatedSrc,
    clockSrc:clockSrc,
    full_name:'STANISLAV DIKOV',
    job_title:'Junior full stack Developer',
    country:'Russia',
    skills: skillsDikov,
    data:'Dec 3, 2019',
}

export const skillsDanilov:Array<types.skill> = [{id:0, skill:'HTML'}, {id:1, skill:'CSS'}, {id:2, skill:'JS'},
    {id:3, skill:'React'}, {id:4, skill:'Python'},{id:5, skill:'Postrge'}, 
    {id:6, skill:'MongoDB'}, {id:7, skill:'Blender'}, {id:8, skill:'War Thunder'},
    {id:9, skill:'TBoI'}, {id:10, skill:'CS2'}, {id:11, skill:'Dota 2'},
    {id:12, skill:'Yandex music'},{id:13, skill:'Ms Word'},{id:14, skill:'Ms PowerPoint'},
    {id:15, skill:'Ms Excel'}]


export const DanilovInfo:types.userInfo = {
    avatarSrc:avatarDanilovSrc,
    verificatedSrc:verificatedSrc,
    clockSrc:clockSrc,
    full_name:'TIMUR DANILOV',
    job_title:'Junior frontend Developer',
    country:'Kazakistan',
    skills: skillsDanilov,
    data:'Jan 1, 2020',
}

export const skillsKonovalov:Array<types.skill> = [
    {id:1, skill:'Factorio'}, {id:2, skill:'TBoI'}, {id:3, skill:'CS2'}, 
    {id:4, skill:'Dota 2'}, {id:5, skill:'Yandex music'}]


export const KonovalovInfo:types.userInfo = {
    avatarSrc:avatarKonovalovSrc,
    verificatedSrc:verificatedSrc,
    clockSrc:clockSrc,
    full_name:'MATVEI KONOVALOV',
    job_title:'Gamer',
    country:'Belorus',
    skills: skillsKonovalov,
    data:'Jun 3, 2022',
}

export const userCardPageComponents:types.userCardComponents = {
    Poster:Poster,
    Skills:Skills,
    JoinData:JoinData,
}

export const topMenuComponents:types.topMenuComponents = {
    StyleButton : StyleButton
}

export const usersData:Array<types.userInfo> = [
    DikovInfo,DanilovInfo,KonovalovInfo,

]

export const userCardsComponents:types.userCardsComponents = {
    UserCard: UserCard,
    userCardComponents: userCardPageComponents,
}
// export function StyleCondition(){
//     if (typeof window !== "undefined") {
//         let theme = localStorage.getItem('theme')
//         if ( theme == 'Dark'){
//             var flagCondition = true
//         }else{
//             var flagCondition = false
//         }
//         console.log(flagCondition)
//         return flagCondition
        
//     }
// } 
