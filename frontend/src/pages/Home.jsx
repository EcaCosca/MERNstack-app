import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ExitCard from '../components/ExitCard.jsx'
import ExitForm from '../components/ExitForm.jsx'

const Home = () => {
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
    <div className="home">
        <div className="exits">
        <ExitForm />
        <h1>Closest Exits</h1>
        {/* {exits && exits.map((exit) => (
            <ExitCard exit={exit} key={exit._id} />
        ))} */}
        </div>
    </div>
  )
}

export default Home