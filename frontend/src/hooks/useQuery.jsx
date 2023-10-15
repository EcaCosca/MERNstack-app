import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useQuery = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            setData(res.data)
            setLoading(false)
        } catch (err) {
            setError(err)
        }
    }

  return {data, loading, error}
}

export default useQuery