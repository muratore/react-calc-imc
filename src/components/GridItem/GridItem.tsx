import {Level} from '../../helpers/imc'
import styles from './GridItem.module.css';
import downImg from '../../assets/thumbs-down-solid.svg'
import upImg from '../../assets/thumbs-up-solid.svg'

type Props = {
    item: Level
}
export const GridItem = ({item}:Props )=>{
    
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridItem}>
                <img src={item.icon === 'up' ? upImg : downImg} alt="" width={30}></img>
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            
            {item.yourImc && 
                <div className={styles.gridYourImg}>Seu imc é: {item.yourImc} kg/m2</div>
            }
            <div className={styles.gridInfo}>
                <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}