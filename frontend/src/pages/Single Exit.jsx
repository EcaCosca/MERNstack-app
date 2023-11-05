import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleExit = () => {
  const { id } = useParams();
  const [exit, setExit] = useState(null);

  useEffect(() => {
    fetchExit();
  }, [id]);

  const fetchExit = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/exits/${id}`);
      if (res.status === 200) {
        setExit(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!exit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">{exit.name}</h1>
      <p className="text-gray-600 mb-2">Location: {exit.location}</p>
      <p className="text-gray-600 mb-2">Altitude: {exit.altitude} meters</p>
      <p className="text-gray-600 mb-2">Description: {exit.description}</p>
      <p className="text-gray-600 mb-2">Type of jump: {exit.type}</p>
      <p className="text-gray-600 mb-2">Number of jumps: {exit.jumps}</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Coordinates:</h2>
        <p className="text-gray-600">
          Latitude: {exit.coordinates.coordinates[1]}, Longitude: {exit.coordinates.coordinates[0]}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Parking Coordinates:</h2>
        <p className="text-gray-600">
          Latitude: {exit.parking.coordinates[1]}, Longitude: {exit.parking.coordinates[0]}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Landing Coordinates:</h2>
        <p className="text-gray-600">
          Latitude: {exit.landing.coordinates[1]}, Longitude: {exit.landing.coordinates[0]}, Altitude: {exit.landing.altitude} meters
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Slider Configuration:</h2>
        <p className="text-gray-600">{exit.sliderConfiguration.join(', ')}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Suit Required:</h2>
        <p className="text-gray-600">{exit.suitRequired.join(', ')}</p>
      </div>
    </div>
  );
};

export default SingleExit;
