import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
  const [exits, setExits] = useState(null)

  useEffect(() => {
    fetchExits()
  }, [])

  const fetchExits = async () => {
    const res = await axios.get('http://localhost:8000/exits')
    console.log(res)
  };

  return (
    <>
        <h1>Home</h1>
    </>
  )
}

export default Home