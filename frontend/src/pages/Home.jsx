import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ExitCard from '../components/ExitCard.jsx'
import ExitForm from '../components/ExitForm.jsx'
import { useExitPointsContext } from '../hooks/useExitPointsContext.jsx'

const Home = () => {
  // const [exits, setExits] = useState(null)
  const { exitPoints, dispatch } = useExitPointsContext()

  useEffect(() => {
    fetchExits()
  }, [])

  const fetchExits = async () => {
    const res = await axios.get('http://localhost:8000/api/exits')

    if (res.status === 200) {
      dispatch({type: 'SET_EXITPOINTS', payload:res.data})
      console.log(res.data);
      console.log(exitPoints);
    }
  };

  return (
    <div className="home">
        <div className="exits">
        <h1>Closest Exits</h1>
        {exitPoints && exitPoints.map((exit) => (
            <ExitCard exit={exit} key={exit._id} />
        ))}
        <ExitForm />
        </div>
    </div>
  )
}

export default Home