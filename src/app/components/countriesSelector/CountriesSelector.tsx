'use client'
import styles from './CountriesSelector.module.css'
import * as types from "../../types.module"

export interface CountriesSelectorProps{
    countriesInfo:Array<types.countryInfo>
}

function StyleCondition(){
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
function ChangeCountry(countriesInfo:Array<types.countryInfo>){
    let keyWord = ['','Capital','language','Population','Currency']
    let i = Math.floor(Math.random() * countriesInfo.length)
    var countryInfoText = [countriesInfo[i]!.capital,countriesInfo[i]!.languages,countriesInfo[i]!.population,countriesInfo[i]!.currency]  
    let countryInfo = document.getElementsByClassName('CountriesSelector-module__PjTAqW__CountriesSelectorBlock')
    let Childrens = countryInfo[0]?.children
    if (countryInfo.length == 0){
        countryInfo = document.getElementsByClassName('CountriesSelector-module__PjTAqW__CountriesSelectorBlockDark')
        Childrens = countryInfo[0]?.children
    }
    if (Childrens?.length){
        for (let j = 0; j < Childrens.length; j++){
            if (j==0){
                let picAndCountryImg = Childrens[j]?.children
                    picAndCountryImg![0]!.setAttribute('src',String(countriesInfo[i]?.flag))
                    let countryName = picAndCountryImg![1]
                    countryName!.innerHTML = `${countriesInfo[i]?.name}`
                    
            }else if (j!==5){
                let a = Childrens[j]
                a!.innerHTML = `<b>${keyWord[j]}:</b>  ${countryInfoText[j-1]}` 
                  
            }   
        }
    }
}

export const CountriesSelector: React.FC<CountriesSelectorProps> = (props) => {
    const {countriesInfo} = {...props}
    if (typeof window !== 'undefined'){
        var i = Math.floor(Math.random() * countriesInfo.length);
        var flagCondition = StyleCondition()
    }
    
    return (
        <div className = {flagCondition ? styles.CountriesSelectorBlockDark : styles.CountriesSelectorBlock}>
            <div className={flagCondition ? styles.picAndCountryNameDark : styles.picAndCountryName}>
                <img src={countriesInfo[i!]!.flag} width={241}height={241}alt ='countries flag' />
                <p className={flagCondition ? styles.countryNameInfoDark : styles.countryNameInfo}>
                    {countriesInfo[i!]!.name}
                </p>
            </div>
            <p className={flagCondition ? styles.countryInfoDark:styles.countryInfo}>
                <b>Capital:</b> {countriesInfo[i!]!.capital}
            </p>
            <p className={flagCondition ? styles.countryInfoDark:styles.countryInfo}>
                <b>Language:</b> {countriesInfo[i!]!.languages}
            </p>
            <p className={flagCondition ? styles.countryInfoDark:styles.countryInfo}>
                <b>Population:</b> {countriesInfo[i!]!.population}
            </p>
            <p className={flagCondition ? styles.countryInfoDark:styles.countryInfo}>
                <b>Currency:</b> {countriesInfo[i!]!.currency}
            </p>
            <button className={flagCondition ? styles.ChangeCountryButtonDark:styles.ChangeCountryButton} onClick={()=>{ChangeCountry(countriesInfo)}}>Next Country</button>
        </div>
    );
}