import { useState } from 'react'
import styles from './style.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage'

const Home = () => {
    //const [user,setUser] = useState("")
    const [user,setUser] = useLocalStorage('USER', '')
    const [inputValue,setInputValue] = useState("")
    return <div className={styles.home}>
        {user && (
            <div>
                <div>Hello {user}</div>
                <button onClick={() => {setUser("")}} style={{marginTop: '5px'}}>Exit</button>
            </div>
        )}

        {!user && (
            <div className={styles.register}>
                <label style={{marginRight: "5px"}}>Enter your name</label>
                <input value={inputValue} onChange={(eve) => setInputValue(eve.target.value)}/>
                <button onClick={() => setUser(inputValue)} style={{marginLeft: '5px'}}>Save</button>
            </div>
        )}
    </div>
}

export default Home
