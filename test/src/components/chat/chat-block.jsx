import styles from './style.module.css'



const ChatBlock  = (props) => {
    return(
        <div className={styles.chat}>
            <h2>Chat</h2>
            {props.chatData.map((el, i) => {
                return (
                <div key={i}>
                    {i + 1}. {el}
                </div>)
            })}

        </div>
    )
}

export default ChatBlock