import React from 'react'
import axios from 'axios'
import { useExitPointsContext } from "../hooks/useExitPointsContext"

const ExitCard = ({exit, key}) => {
  const {dispatch} = useExitPointsContext()

  const handleClick = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/exits/${exit._id}`)
      console.log(response);
      if(response.status === 200) {
        // console.log(response.data._id);
        dispatch({type: 'DELETE_EXITPOINT', payload: exit._id})
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="exit-details" key={exit._id}>
        <h4>{exit.name.toUpperCase()}</h4>
        {/* <p>{exit.location}</p> */}
        <p>Altitude: {exit.altitude}</p>
        <p>Description: {exit.description}</p>
        {/* <p>{exit.coordinates}</p> */}
        <p>Type of jump: {exit.type.toUpperCase()}</p>
        {/* <p>{exit.parking}</p> */}
        {/* <p>{exit.landing}</p> */}
        {/* <p>Slider Configuration: {exit.exitType}</p> */}
        {/* <p>{exit.suitRequired}</p> */}
        <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default ExitCard