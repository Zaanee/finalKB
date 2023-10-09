import { Link } from "react-router-dom"
import styles from './style.module.css'


const Comment = (props) => {
    return(
        <div className={styles.wrapper}>
            <label style={{fontSize: '25px', marginTop: '10px'}}>Write your comment</label>
            <input value={props.inputValue} onChange={(eve) => props.setInputValue(eve.target.value)}/>
            <button onClick={props.sendChat} style={{margin: "5px"}}>Send</button>
            <button onClick={() => props.setChatData([])}>Delete</button>
            {props.showDialogReg && (
                <div className={styles.log}>You are not logged in, follow this <Link to='/'>link</Link></div>
            )}
        </div>
    )
}

export default Comment