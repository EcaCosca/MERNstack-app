import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useExitPointsContext } from '../hooks/useExitPointsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const ExitCard = ({ exit }) => {
  const { dispatch } = useExitPointsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      // Handle user not authenticated scenario here if needed
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:8000/api/exits/${exit._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.status === 200) {
        dispatch({ type: 'DELETE_EXITPOINT', payload: exit._id });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-4">
      <Link to={`/exit/${exit._id}`}>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{exit.name.toUpperCase()}</h4>
      </Link>
      <p className="text-gray-600 mb-2">Altitude: {exit.altitude}</p>
      <p className="text-gray-600 mb-2">Description: {exit.description}</p>
      <p className="text-gray-600 mb-2">Type of jump: {exit.type.toUpperCase()}</p>
      {user && (
        <button className="text-red-500 hover:text-red-700 cursor-pointer" onClick={handleClick}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ExitCard;
