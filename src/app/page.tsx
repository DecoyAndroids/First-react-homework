import styles from './index.module.css'
import {Poster} from "./components/poster/poster"
import {Skills} from "./components/skills/Skills"
import {JoinData} from './components/joinData/JoinData'
const Home = () => {
  const avatarSrc = './avatar.jpg'
  const verificatedSrc = './verificated.jpg'
  const full_name = 'STANISLAV DIKOV'
  const job_title = 'Junior full stack Developer'
  const country = 'Russia'
  const skills = [{id:0, skill:'HTML'}, {id:1, skill:'CSS'}, {id:2, skill:'JS'},
                  {id:3, skill:'React'}, {id:4, skill:'Python'}, {id:5, skill:'C#'},
                  {id:6, skill:'Postrge'}, {id:7, skill:'MongoDB'}, {id:8, skill:'Blender'},
                  {id:9, skill:'Fl studio'}, {id:10, skill:'Factorio'}, {id:11, skill:'War Thunder'},
                  {id:12, skill:'TBoI'}, {id:13, skill:'CS2'}, {id:14, skill:'Dota 2'},
                  {id:15, skill:'Yandex music'}]
  const data = 'Dec 3, 2019'
  const clockSrc = './clock2.png'
  return (
    // <Header  h1Content={h1Content} h2Content={h2Content} h3Content={h3Content}/>
    <div className={styles.main_block}>
        <Poster avatarSrc={avatarSrc} verificatedSrc={verificatedSrc} styles={styles} 
        full_name={full_name} job_title={job_title} country={country}/>
        <Skills  skills={skills} styles={styles}/>
        <JoinData clockSrc = {clockSrc} data={data} styles={styles}/> 
    </div>
  );
}

export default Home
