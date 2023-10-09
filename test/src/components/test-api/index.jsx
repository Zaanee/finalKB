import { useEffect, useState } from 'react'
import styles from './style.module.css'

const TestApi = () => {
    const [teamData, setTeamData] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '863abdbfc6msha614011caeab561p1f2c34jsnbe8fe8b045d4',
		        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
	        }
        };

        fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
            setTeamData(res.data)
            setIsLoad(false)
        });
    },[])
    return(
        <div className={styles.teams}>
            <div>Teams</div>
            {isLoad && <div>Loading data...</div>}
            {teamData.map((el) => {
                return(
                    <div key={el.id}>
                        {el.id}. {el.abbreviation} {el.city}
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/003/241/364/small/trash-bin-icon-line-vector.jpg'
                        style={{width: '15px', height: '15px'}}
                        onClick={() => {
                            setTeamData(teamData.filter((filterElement) => el.id !== filterElement.id))
                        }}
                        />
                    </div>
                )
            })}
        </div>
    ) 
}

export default TestApi
