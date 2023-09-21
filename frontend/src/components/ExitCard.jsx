import React from 'react'

const ExitCard = ({exit, key}) => {
  return (
    <div className="exit-details" key={exit._id}>
        <h2>{exit.name}</h2>
        {/* <p>{exit.location}</p> */}
        <p>Altitude: {exit.altitude}</p>
        <p>Description: {exit.description}</p>
        {/* <p>{exit.coordinates}</p> */}
        <p>Type of jump: {exit.type.toUpperCase()}</p>
        {/* <p>{exit.parking}</p> */}
        {/* <p>{exit.landing}</p> */}
        {/* <p>Slider Configuration: {exit.exitType}</p> */}
        {/* <p>{exit.suitRequired}</p> */}
    </div>
  )
}

export default ExitCard