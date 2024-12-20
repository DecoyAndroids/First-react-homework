import styles from './TopMenu.module.css'
import * as types from '../../types.module'
import Link from 'next/link';

export interface TopMenuProps{
    topMenuComponents:types.topMenuComponents;
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
export const TopMenu: React.FC<TopMenuProps> = (props) => {
    const {topMenuComponents} = {...props}
    const StyleButton = topMenuComponents.StyleButton
    if (typeof window !== 'undefined'){
        var flagCondition = StyleCondition()
    }   
    return (
        <div className={flagCondition ? styles.topMenuDark : styles.topMenu}>
            <div className={flagCondition ? styles.linksDark:styles.links}>
                <Link href='/' >
                    <button className={flagCondition ? styles.linkDark : styles.link}>
                        Users
                    </button>
                </Link>
                <Link href='/countries'>    
                    <button className={flagCondition ? styles.linkDark : styles.link}>    
                        Countries
                    </button>
                </Link>
            </div>
            <StyleButton flagCondition={flagCondition!}/>
        </div>
    );
  }