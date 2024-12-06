import { UserCard } from "./components/userCard/UserCard";
import * as data from './data'
const Home = () => {
  return (
    <UserCard userPageInfo={data.DikovInfo} userCardPageComponents={data.userCardPageComponents}/>
  );
}

export default Home
