import { Poster } from "./components/poster/poster"
import { JoinData } from "./components/joinData/JoinData"
import { Skills } from "./components/skills/Skills"
import * as types from "./types.module"
import avatarSrc from '../../public/avatar.jpg'
import verificatedSrc from '../../public/verificated.jpg'
import clockSrc from '../../public/clock2.png'


export const skills:Array<types.skill> = [{id:0, skill:'HTML'}, {id:1, skill:'CSS'}, {id:2, skill:'JS'},
    {id:3, skill:'React'}, {id:4, skill:'Python'}, {id:5, skill:'C#'},
    {id:6, skill:'Postrge'}, {id:7, skill:'MongoDB'}, {id:8, skill:'Blender'},
    {id:9, skill:'Fl studio'}, {id:10, skill:'Factorio'}, {id:11, skill:'War Thunder'},
    {id:12, skill:'TBoI'}, {id:13, skill:'CS2'}, {id:14, skill:'Dota 2'},
    {id:15, skill:'Yandex music'}]


export const DikovInfo:types.userInfo = {
    avatarSrc:avatarSrc,
    verificatedSrc:verificatedSrc,
    clockSrc:clockSrc,
    full_name:'STANISLAV DIKOV',
    job_title:'Junior full stack Developer',
    country:'Russia',
    skills: skills,
    data:'Dec 3, 2019',
}
export const userCardPageComponents:types.userCardComponents = {
    Poster:Poster,
    Skills:Skills,
    JoinData:JoinData,
}


