import { PosterProps } from "./components/poster/poster"
import { SkillsProps } from "./components/skills/Skills"
import { JoinDataProps } from "./components/joinData/JoinData"
import { UserCardProps } from "./components/userCard/UserCard"
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
export type userCardsComponents = {
    UserCard:React.FC<UserCardProps>,
    userCardComponents : userCardComponents,
}
export type userCardComponents = {
    Poster: React.FC<PosterProps>,
    Skills: React.FC<SkillsProps>,
    JoinData: React.FC<JoinDataProps>,
}
export type topMenuComponents = {
    StyleButton: React.FC<StyleButtonProps>
}
export type countryInfo = {
    name: string,
    capital: string,
    languages : Array<string>,
    population: number,
    flag: string,
    currency: string,
}
