import * as types from "./types.module"
import Japan from 'public/countries_flags/japan.png'
import China from 'public/countries_flags/china.png'
import France from 'public/countries_flags/france.png'
import Germany from 'public/countries_flags/germany.png'
import India from 'public/countries_flags/india.png'
import Russia from 'public/countries_flags/russia.png'
import Korea from 'public/countries_flags/souht_korea.png'
import Uk from 'public/countries_flags/uk.png'
import USA from 'public/countries_flags/usa.png'

export const countriesData:Array<types.countryInfo> = [
  {
    name: 'China',
    capital: 'Beijing',
    languages: ['Chinese'],
    population: 1377422166,
    flag: China,
    currency: 'Chinese yuan',
  },
  {
    name: 'France',
    capital: 'Paris',
    languages: ['French'],
    population: 66710000,
    flag: France,
    currency: 'Euro',
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    languages: ['German'],
    population: 81770900,
    flag: Germany,
    currency: 'Euro',
  },
  {
    name: 'India',
    capital: 'New Delhi',
    languages: ['Hindi', 'English'],
    population: 1295210000,
    flag: India,
    currency: 'Indian rupee',
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    languages: ['Japanese'],
    population: 126960000,
    flag: Japan,
    currency: 'Japanese yen',
  },
  {
    name: 'Russian Federation',
    capital: 'Moscow',
    languages: ['Russian'],
    population: 146599183,
    flag: Russia,
    currency: 'Russian ruble',
  },
  {
    name: 'Korea (Republic of)',
    capital: 'Seoul',
    languages: ['Korean'],
    population: 50801405,
    flag: Korea,
    currency: 'South Korean won',
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    languages: ['English'],
    population: 65110000,
    flag: Uk,
    currency: 'British pound',
  },
  {
    name: 'United States of America',
    capital: 'Washington, D.C.',
    languages: ['English'],
    population: 323947000,
    flag: USA,
    currency: 'United States dollar',
  },]