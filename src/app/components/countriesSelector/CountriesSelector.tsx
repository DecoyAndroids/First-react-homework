'use client'
import styles from './CountriesSelector.module.css'
import * as types from "../../types.module"
import { useState } from 'react'
import Image from 'next/image'
import {StaticImageData} from  'next/image'

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
export const CountriesSelector: React.FC<CountriesSelectorProps> = (props) => {
    const {countriesInfo} = {...props}

    function ChangeCountry(){
        let i = Math.floor(Math.random() * countriesInfo.length)
        let nextCountry:types.countryInfo ={
            name:countriesInfo[i!]!.name,
            capital:countriesInfo[i!]!.capital,
            languages:countriesInfo[i!]!.languages,
            population:countriesInfo[i!]!.population,
            flag:countriesInfo[i!]!.flag,
            currency:countriesInfo[i!]!.currency,
        }
        SetCountry(nextCountry)
    }

    if (typeof window !== 'undefined'){
        var i = Math.floor(Math.random() * countriesInfo.length);
        var flagCondition = StyleCondition()
    }

    const [country,SetCountry] = useState<types.countryInfo>({
        name: countriesInfo[i!]!.name,
        capital:countriesInfo[i!]!.capital,
        languages:countriesInfo[i!]!.languages,
        population:countriesInfo[i!]!.population,
        flag:countriesInfo[i!]!.flag,
        currency:countriesInfo[i!]!.currency,
    })

    return (
        <div className = {flagCondition ? styles.CountriesSelectorBlockDark : styles.CountriesSelectorBlock}>
            <div className={flagCondition ? styles.picAndCountryNameDark : styles.picAndCountryName}>
                <Image src={country.flag} width={241}height={241}alt ='countrie`s flag' className={flagCondition ? styles.countryFlagDark : styles.countryFlag}/>
                <p className={flagCondition ? styles.countryNameInfoDark : styles.countryNameInfo}>
                    {country.name}
                </p>
            </div>
            <p className={flagCondition ? styles.countryInfoDark:styles.countryInfo}>
                <b>Capital : </b> {country.capital}
            </p>
            <p className={flagCondition ? styles.countryInfoDark:styles.countryInfo}>
                <b>Language : </b> {country.languages}
            </p>
            <p className={flagCondition ? styles.countryInfoDark:styles.countryInfo}>
                <b>Population : </b> {country.population}
            </p>
            <p className={flagCondition ? styles.countryInfoDark:styles.countryInfo}>
                <b>Currency : </b> {country.currency}
            </p>
            <button className={flagCondition ? styles.ChangeCountryButtonDark:styles.ChangeCountryButton} onClick={()=>{ChangeCountry()}}>Next Country</button>
        </div>
    );
}