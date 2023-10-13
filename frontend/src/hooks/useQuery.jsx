import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useQuery = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

    }, [])

  return (
    <div>useQuery</div>
  )
}

export default useQuery