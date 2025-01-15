import styles from './TopMenu.module.css'
import * as types from '../../types.module'
import Link from 'next/link';

export interface TopMenuProps{
    topMenuComponents:types.topMenuComponents;
}

export const TopMenu: React.FC<TopMenuProps> = (props) => {
    const {topMenuComponents} = {...props}
    const StyleButton = topMenuComponents.StyleButton
    return (
        <div className='TopMenu'>
        <div className={styles.topMenu}>
            <div className={styles.links}>
                <Link href='/' >
                    <button className={styles.link}>
                        Users
                    </button>
                </Link>
                <Link href='/countries'>    
                    <button className={styles.link}>    
                        Countries
                    </button>
                </Link>
            </div>
            <StyleButton/>
        </div>
        </div>
    );
  }