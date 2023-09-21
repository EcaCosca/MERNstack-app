import React, {useEffect, useState} from 'react'
import axios from 'axios'

const AllExits = () => {
  const [exits, setExits] = useState(null)

  useEffect(() => {
    fetchExits()
  }, [])

  const fetchExits = async () => {
    const res = await axios.get('http://localhost:8000/api/exits')

    if (res.status === 200) {
      setExits(res.data)
    }
  };
  return (
    <>
        <div className="exits">
        {exits && exits.map((exit) => (
            <ExitCard exit={exit} key={exit._id} />
        ))}
        </div>
    </>
  )
}

export default AllExits