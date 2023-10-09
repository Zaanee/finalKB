import Chat from '../chat'
import Home from '../home'
import TestApi from '../test-api'
import styles from './style.module.css'
import {Switch,Route} from 'react-router-dom'

const Main = () => {
    return <div className={styles.container}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/chat' component={Chat}/>
            <Route exact path='/test' component={TestApi}/>
        </Switch>
    </div>
}

export default Main
