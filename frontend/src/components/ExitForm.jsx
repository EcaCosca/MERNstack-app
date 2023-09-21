import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import { get } from 'express/lib/response';

// const ExitForm = () => {
//     const [exitData, setExitData] = useState({
//         name: '',
//         location: '',
//         altitude: null,
//         description: null,
//         coordinates: {
//           type: "Point",
//           coordinates: [0, 0]
//         },
//         type: "earth",
//         jumps: 0,
//         parking: {
//           type: "Point",
//           coordinates: [0, 0]
//         },
//         landing: {
//           type: "Point",
//           coordinates: [0, 0],
//           altitude: 0
//         },
//         exitType: ["slider down", "slider up"]
//     });
        
//     const handleChange = (e) => {

//     };

//   return (
//     <form className='create'>
//         <h3>Add an Exit Point</h3>

//         <labl

//     </form>
//   )
// }

// export default ExitForm

const ExitForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      location: '',
      altitude: '',
      description: '',
      latitude: '',
      longitude: '',
      type: '',
      jumps: 0,
    });
  
    const [exitTypes, setExitTypes] = useState([]);
    const [type, setType] = useState(["building", "antenna", "span", "earth"]);
    const [trackingSuits, setTrackingSuits] = useState(['slick', 'two-piece tracking suit', 'mono-piece tracking suit', 'wingsuit']);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleExitTypeChange = (e) => {
      const { value, checked } = e.target;
      if (checked) {
        setExitTypes([...exitTypes, value]);
      } else {
        setExitTypes(exitTypes.filter((type) => type !== value));
      }
    };
  
    const handleTrackingSuitChange = (e) => {
      const { value, checked } = e.target;
      if (checked) {
        setTrackingSuits([...trackingSuits, value]);
      } else {
        setTrackingSuits(trackingSuits.filter((suit) => suit !== value));
      }
    };

    const getCoordinates = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            setFormData({
                ...formData,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        });
    };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // You can send the form data to your server here to save it to the MongoDB database
    //   const fullFormData = { ...formData, exitTypes, trackingSuits };
    //   console.log(fullFormData); // For testing purposes
    //   // Send fullFormData to your server using a fetch or axios
    //   // Example:
    //   // fetch('/api/exitpoints', {
    //   //   method: 'POST',
    //   //   body: JSON.stringify(fullFormData),
    //   //   headers: {
    //   //     'Content-Type': 'application/json',
    //   //   },
    //   // })
    //   //   .then((response) => response.json())
    //   //   .then((data) => {
    //   //     console.log(data);
    //   //     // Handle the response from the server
    //   //   })
    //   //   .catch((error) => {
    //   //     console.error('Error:', error);
    //   //   });
    // };
  
    return (
      <div>
        <h2>Create New Exit Point</h2>
        <form 
        // onSubmit={handleSubmit}
        >
          {/* Add input fields for each exit point property */}
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Altitude:</label>
            <input
              type="number"
              name="altitude"
              value={formData.altitude}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Coordinates:</label>
            <label>Latitude:</label>
            <input
              type="number"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              required
            />
            <label>Longitude:</label>
            <input
              type="number"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              required
            />
            <button 
                type="button"
                onClick={() => {getCoordinates()}}
            >
                Get your current coordinates
            </button>
          </div>
          
          {/* Add checkboxes for exit types */}
          <div>
            <label>Exit Types:</label>
            <label>
              <input
                type="checkbox"
                name="exitType"
                value="slider down"
                checked={exitTypes.includes('slider down')}
                onChange={handleExitTypeChange}
              />
              Slider Down
            </label>
            <label>
              <input
                type="checkbox"
                name="exitType"
                value="slider up"
                checked={exitTypes.includes('slider up')}
                onChange={handleExitTypeChange}
              />
              Slider Up
            </label>
          </div>
          
          {/* Add checkboxes for tracking suits */}
          <div>
            <label>Tracking Suits:</label>
            <label>
              <input
                type="checkbox"
                name="trackingSuits"
                value="slick"
                checked={trackingSuits.includes('slick')}
                onChange={handleTrackingSuitChange}
              />
              Slick
            </label>
            <label>
              <input
                type="checkbox"
                name="trackingSuits"
                value="two-piece tracking suit"
                checked={trackingSuits.includes('two-piece tracking suit')}
                onChange={handleTrackingSuitChange}
              />
              Two-Piece Tracking Suit
            </label>
            <label>
              <input
                type="checkbox"
                name="trackingSuits"
                value="mono-piece tracking suit"
                checked={trackingSuits.includes('mono-piece tracking suit')}
                onChange={handleTrackingSuitChange}
              />
              Mono-Piece Tracking Suit
            </label>
            {/* Add checkboxes for other tracking suit options */}
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ExitForm;

//   {
//     "name": "High Cliff",
//     "location": "Mountain Peak",
//     "altitude": 2400,
//     "description": "A popular exit point with stunning views.",
//     "coordinates": {
//       "type": "Point",
//       "coordinates": [-118.789012, 34.123456]
//     },
// DONE 
//     "type": "earth",
//     "difficulty": "Intermediate",
//     "jumps": 0,
//     "parking": {
//       "type": "Point",
//       "coordinates": [-118.790000, 34.120000]
//     },
//     "landing": {
//       "type": "Point",
//       "coordinates": [-118.787000, 34.125000],
//       "altitude": 1600
//     },
//     "exitType": ["slider down", "slider up"]
//   }