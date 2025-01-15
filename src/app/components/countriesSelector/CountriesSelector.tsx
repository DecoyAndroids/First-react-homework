'use client'
import styles from './CountriesSelector.module.css'
import * as types from "../../types.module"
import { useState } from 'react'
import Image from 'next/image'
import { useRef } from 'react';
import {StaticImageData} from  'next/image'

export interface CountriesSelectorProps{
    countriesInfo:Array<types.countryInfo>
}

export const CountriesSelector: React.FC<CountriesSelectorProps> = (props) => {
    const {countriesInfo} = {...props}
    let temperyCountriesInfo = useRef([...countriesInfo])
    var i = Math.floor(Math.random() * countriesInfo.length);
    const [country,SetCountry] = useState<types.countryInfo>({
        name: countriesInfo[i!]!.name,
        capital:countriesInfo[i!]!.capital,
        languages:countriesInfo[i!]!.languages,
        population:countriesInfo[i!]!.population,
        flag:countriesInfo[i!]!.flag,
        currency:countriesInfo[i!]!.currency,
    })
    function ChangeCountry(){
        if (temperyCountriesInfo.current.length == 1){
            temperyCountriesInfo.current = [...countriesInfo]
        }
        let i = Math.floor(Math.random() * temperyCountriesInfo.current.length)
        let nextCountry:types.countryInfo ={
            name:temperyCountriesInfo.current[i!]!.name,
            capital:temperyCountriesInfo.current[i!]!.capital,
            languages:temperyCountriesInfo.current[i!]!.languages,
            population:temperyCountriesInfo.current[i!]!.population,
            flag:temperyCountriesInfo.current[i!]!.flag,
            currency:temperyCountriesInfo.current[i!]!.currency,
        }
        SetCountry(nextCountry)
        temperyCountriesInfo.current.splice(i , 1)
        
    }

    

    return (
        <div className = {styles.CountriesSelectorBlock}>
            <div className={styles.picAndCountryName}>
                <Image src={country.flag} width={512}height={300}alt ='countrie`s flag' className={styles.countryFlag}/>
                <p className={styles.countryNameInfo}>
                    {country.name}
                </p>
            </div>
            <p className={styles.countryInfo}>
                <b>Capital : </b> {country.capital}
            </p>
            <p className={styles.countryInfo}>
                <b>Language : </b> {country.languages}
            </p>
            <p className={styles.countryInfo}>
                <b>Population : </b> {country.population}
            </p>
            <p className={styles.countryInfo}>
                <b>Currency : </b> {country.currency}
            </p>
            <button className={styles.ChangeCountryButton} onClick={()=>{ChangeCountry()}}>Next Country</button>
        </div>
    );
}