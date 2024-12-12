import styles from './TopMenu.module.css'
import * as types from '../../types.module'


export interface TopMenuProps{
    topMenuComponents:types.topMenuComponents;
}
export const TopMenu: React.FC<TopMenuProps> = (props) => {
    const {topMenuComponents} = {...props}
    const StyleButton = topMenuComponents.StyleButton
    return (
        <div className={styles.topMenu}>
            <StyleButton/>
        </div>
    );
  }