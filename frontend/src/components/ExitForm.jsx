import React, { useState, useEffect } from "react";
import axios from "axios";

const ExitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    altitude: 0,
    description: "",
    sliderConfiguration: "",
    jumps: 0,
  });
  const [sliderConfiguration, setSliderConfiguration] = useState([]);
  const [type, setType] = useState([]);
  const [suitRequired, setTrackingSuits] = useState([]);
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });
  const [landing, setLanding] = useState({
    latitude: "",
    longitude: "",
    altitude: 0,
  });
  const [parking, setParking] = useState({
    latitude: "",
    longitude: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLandingChange = (e) => {
    const { name, value } = e.target;
    setLanding({
      ...landing,
      [name]: value,
    });
  };

  const handleParkingChange = (e) => {
    const { name, value } = e.target;
    setParking({
      ...parking,
      [name]: value,
    });
  };

  const handleSliderConfigurationChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSliderConfiguration([...sliderConfiguration, value]);
    } else {
      setSliderConfiguration(
        sliderConfiguration.filter((type) => type !== value)
      );
    }
  };

  const handleSuitChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setTrackingSuits([...suitRequired, value]);
    } else {
      setTrackingSuits(suitRequired.filter((suit) => suit !== value));
    }
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setType([...type, value]);
    } else {
      setType(type.filter((type) => type !== value));
    }
  };

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setCoordinates({
        ...coordinates,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const getLandingCoordinates = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setLanding({
        ...landing,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const getParkingCoordinates = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
      setParking({
        ...parking,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullFormData = {
      ...formData,
      coordinates: {
        type: "Point",
        coordinates: [coordinates.latitude, coordinates.longitude],
      },
      // TODO the type should be a string and not an array only can be one option
      type: type[0],
      landing: {
        type: "Point",
        coordinates: [landing.latitude, landing.longitude],
        altitude: landing.altitude,
      },
      parking: {
        type: "Point",
        coordinates: [parking.latitude, parking.longitude],
      },
      sliderConfiguration,
      suitRequired,
    };
    console.log(fullFormData); // For testing purposes

    try {
      const response = await axios.post(
        "http://localhost:8000/api/exits",
        JSON.stringify(fullFormData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      console.log(response);
      if (response.status == 200) {
        setError(null);
        console.log("New exit point created!");
        setFormData({
          name: "",
          location: "",
          altitude: "",
          description: "",
          sliderConfiguration: "",
          jumps: 0,
        });
        setSliderConfiguration([]);
        setType([]);
        setTrackingSuits([]);
        setLanding({
          latitude: "",
          longitude: "",
          altitude: "",
        });
        setParking({
          latitude: "",
          longitude: "",
        });
        setCoordinates({
          latitude: "",
          longitude: "",
        });
      } else {
        console.log("Error creating exit point.");
        setError("Error creating exit point.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred while creating the exit point.");
    }
  };

  return (
    <div>
      <h2>Create New Exit Point</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Jumps:</label>
          <input
            type="number"
            name="jumps"
            value={formData.jumps}
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
          <h4>Coordinates:</h4>
          <label>Latitude:</label>
          <input
            type="number"
            name="latitude"
            value={coordinates.latitude}
            onChange={handleChange}
            required
          />
          <label>Longitude:</label>
          <input
            type="number"
            name="longitude"
            value={coordinates.longitude}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => {
              getCoordinates();
            }}
          >
            Get your current coordinates
          </button>
        </div>
        <div>
          <h4>Landing:</h4>
          <label>Latitude:</label>
          <input
            type="number"
            name="latitude"
            value={landing.latitude}
            onChange={handleLandingChange}
          />
          <label>Longitude:</label>
          <input
            type="number"
            name="longitude"
            value={landing.longitude}
            onChange={handleLandingChange}
          />
          <button
            type="button"
            onClick={() => {
              getLandingCoordinates();
            }}
          >
            Get your current coordinates
          </button>
          <label>Altitude:</label>
          <input
            type="number"
            name="altitude"
            value={landing.altitude}
            onChange={handleLandingChange}
          />
        </div>
        <div>
          <h4>Parking:</h4>
          <label>Latitude:</label>
          <input
            type="number"
            name="latitude"
            value={parking.latitude}
            onChange={handleParkingChange}
          />
          <label>Longitude:</label>
          <input
            type="number"
            name="longitude"
            value={parking.longitude}
            onChange={handleParkingChange}
          />
          <button
            type="button"
            onClick={() => {
              getParkingCoordinates();
            }}
          >
            Get your current coordinates
          </button>
        </div>
        <div>
          <h4>Exit Types:</h4>
          <label>
            <input
              type="checkbox"
              name="sliderConfiguration"
              value="down"
              checked={sliderConfiguration.includes("down")}
              onChange={handleSliderConfigurationChange}
            />
            Down
          </label>
          <label>
            <input
              type="checkbox"
              name="sliderConfiguration"
              value="up"
              checked={sliderConfiguration.includes("up")}
              onChange={handleSliderConfigurationChange}
            />
            Slider Up
          </label>
        </div>
        <div>
          <h4>Suits:</h4>
          <label>
            <input
              type="checkbox"
              name="suitRequired"
              value="slick"
              checked={suitRequired.includes("slick")}
              onChange={handleSuitChange}
            />
            Slick
          </label>
          <label>
            <input
              type="checkbox"
              name="suitRequired"
              value="two-piece"
              checked={suitRequired.includes("two-piece")}
              onChange={handleSuitChange}
            />
            Two-Piece Tracking Suit
          </label>
          <label>
            <input
              type="checkbox"
              name="suitRequired"
              value="mono-piece"
              checked={suitRequired.includes("mono-piece")}
              onChange={handleSuitChange}
            />
            Mono-Piece Tracking Suit
          </label>
          <label>
            <input
              type="checkbox"
              name="suitRequired"
              value="wingsuit"
              checked={suitRequired.includes("wingsuit")}
              onChange={handleSuitChange}
            />
            Wingsuit
          </label>
        </div>

        <div>
          <h4>Type:</h4>
          <label>
            <input
              type="checkbox"
              name="type"
              value="building"
              checked={type.includes("building")}
              onChange={handleTypeChange}
            />
            Building
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="antenna"
              checked={type.includes("antenna")}
              onChange={handleTypeChange}
            />
            Antenna
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="span"
              checked={type.includes("span")}
              onChange={handleTypeChange}
            />
            Span
          </label>
          <label>
            <input
              type="checkbox"
              name="type"
              value="earth"
              checked={type.includes("earth")}
              onChange={handleTypeChange}
            />
            Earth
          </label>
        </div>
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ExitForm;
