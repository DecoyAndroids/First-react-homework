
import {CountriesSelector} from '../components/countriesSelector/CountriesSelector'
import * as data from '../countries'
export const  CountriesPage = () => {
  return (
    <>
      <CountriesSelector countriesInfo={data.countriesData}/>
    </>
  );
}

export default CountriesPage