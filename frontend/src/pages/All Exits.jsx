import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useExitPointsContext } from '../hooks/useExitPointsContext.jsx'
import { useAuthContext } from '../hooks/useAuthContext.jsx'

import ExitCard from '../components/ExitCard.jsx'


const AllExits = () => {
  const { exitPoints, dispatch } = useExitPointsContext()
  const {user} = useAuthContext();

  useEffect(() => {
    if(user){
      fetchExits()
    }
  }, [dispatch, user])

  const fetchExits = async () => {
    const res = await axios.get('http://localhost:8000/api/exits', {
      headers: {
        "Authorization": `Bearer ${user.token}`,
      },
    })

    if (res.status === 200) {
      dispatch({type: 'SET_EXITPOINTS', payload:res.data})
    }
  };

  return (
    <div className="home">
        <div className="exits">
        <h1>Closest Exits</h1>
        {exitPoints && exitPoints.map((exit) => (
            <ExitCard exit={exit} key={exit._id} />
        ))}
        </div>
    </div>
  )
}

export default AllExits