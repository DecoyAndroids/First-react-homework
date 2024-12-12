import { PosterProps } from "./components/poster/poster"
import { SkillsProps } from "./components/skills/Skills"
import { JoinDataProps } from "./components/joinData/JoinData"
import { StaticImageData } from "next/image"
import { StyleButtonProps } from "./components/styleButton/StyleButton"
export type skill = {
        id:number,
        skill:string

}
export type userInfo = {
    avatarSrc:StaticImageData,
    verificatedSrc:StaticImageData,
    clockSrc:StaticImageData,
    full_name:string,
    job_title:string,
    country:string,
    skills:Array<skill>
    data:string,
}
export type userCardComponents = {
    Poster: React.FC<PosterProps>,
    Skills: React.FC<SkillsProps>,
    JoinData: React.FC<JoinDataProps>,
}
export type topMenuComponents = {
    StyleButton: React.FC<StyleButtonProps>
}