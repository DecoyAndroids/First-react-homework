import {UserCardsHolder} from './components/userCardsHolder/UserCardsHolder'
import * as data from './data'
const Home = () => {
  return (
    <>
      <UserCardsHolder usersData={data.usersData} componentsData={data.userCardsComponents}/>
    </>
  );
}

export default Home
