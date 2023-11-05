# AirTool

![AirTool Logo](/path/to/your/logo.png)

## Project Overview

**AirTool** is an innovative platform designed exclusively for skydivers and BASE jumpers, catering to their unique needs in the extreme sports community. This application offers a streamlined and intuitive experience, enabling enthusiasts to create personalized profiles, log their jumps with detailed information, and engage in vibrant social interactions with fellow jumpers. With a focus on simplicity and functionality, AirTool aims to enhance the way skydivers and BASE jumpers connect, share experiences, and explore new horizons in the thrilling world of aerial sports.

## Target Audience

AirTool is tailored for passionate skydivers and BASE jumpers who crave a user-friendly platform to document their experiences, connect with like-minded individuals, and stay updated on the latest trends and discussions within the community.

## Key Features

- **User Profiles:** Quickly create profiles with essential information to get started.
- **Jump Logging:** Seamlessly log jumps with precise details, including approach and exit coordinates, landing zone coordinates, altitude, and descriptions.
- **Social Interactions:** Foster community engagement through chat functionality and forum-like discussions. Share experiences, tips, and stories with fellow jumpers.
- **Content Moderation:** User-generated content is self-moderated by the community, ensuring a respectful and supportive environment.
- **Third-Party Authentication:** Users can sign up and log in using their email or third-party authentication services like Google and Apple, facilitated through Clerk.
- **Track Management:** Add, edit, and delete individual jump tracks with specific details. Each track represents a unique jump experience, capturing approach and exit coordinates, landing zone coordinates, altitude, and descriptions.
- **Exit Point Management:** Manage exit points representing different locations (such as cliffs, buildings, or other stationary structures) from which jumps can be made. Plan jumps effectively with curated information.
- **Drop Zone Exploration:** Explore drop zones representing locations where jumps are made from aircraft or helicopters. Choose a suitable jumping experience based on curated information within the application.
- **Weather Information:** Access real-time weather information about exit points and drop zones. Make informed decisions about jumps and ensure safety with up-to-date weather data.
- **FlySight Integration:** Upload tracks collected by the GPS tracking device FlySight. Analyze and store jump data conveniently within the application for further review and planning.

## Why AirTool?

- **Simplified Experience:** AirTool focuses on the core needs of skydivers and BASE jumpers, eliminating clutter and providing a straightforward interface.
- **Community-Centric:** Foster a sense of belonging by enabling users to interact, share stories, and learn from one another.
- **Data Precision:** Log jumps with precision and accuracy, allowing jumpers to maintain a comprehensive record of their aerial adventures.

## Table of Contents
- [User Stories](#user-stories)
- [Features](#features)
- [Technological Stack](#technological-stack)
- [Backend Routes](#backend-routes)
- [Server/Backend](#serverbackend)
- [Project Management and Documentation](#project-management-and-documentation)
- [Stack Documentation](#stack-documentation)

### User Stories

- **Signup:** 
  - *As an anonymous user, I want to sign up using my email or third-party authentication services like Google and Apple through Clerk so that I can create a profile and participate in the community.*
- **Login:** 
  - *As a registered user, I want to log in securely using my registered credentials or third-party authentication methods so that I can access my profile and track my jumps.*
- **Logout:** 
  - *As a user, I want to log out securely from the platform to ensure the security of my accounts and information.*
- **Add, Edit, and Delete Tracks:** 
  - *As a user, I want to add, edit, and delete individual jump tracks with specific details (including approach and exit coordinates, landing zone coordinates, altitude, and descriptions) so that I can document my unique jump experiences.*
- **Manage Exit Points:** 
  - *As a user, I want to add, edit, and delete exit points representing different locations (such as cliffs, buildings, or other stationary structures) from which jumps can be made. This allows me to plan my jumps effectively.*
- **Explore Drop Zones:** 
  - *As a user, I want to explore drop zones representing locations where jumps are made from aircraft or helicopters. I need this information to choose a suitable jumping experience.*
- **Access Weather Information:** 
  - *As a user, I want to access weather information about exit points and drop zones. Having access to real-time weather data helps me make informed decisions about my jumps and ensures my safety.*
- **Upload Tracks from FlySight Device:** 
  - *As a user, I want to upload tracks collected by my GPS tracking device, FlySight, so that I can analyze and store my jump data conveniently within the application.*
- **Social Interactions:** 
  - *As a user, I want to engage in vibrant social interactions, including chat functionality and forum-like discussions. This enables me to connect with the community, share experiences, and learn from fellow jumpers.*
- **View Jump Details:** 
  - *As a user, I want to access comprehensive information about each jump, including approach coordinates, exit coordinates, landing zone coordinates, altitude, detailed descriptions, and real-time weather conditions. This data is crucial for analyzing my experiences and planning future jumps effectively.*
- **Edit User Profile:** 
  - *As a user, I want to have the flexibility to edit my profile, managing personal information, jump records, and GPS tracks. This ensures that my profile is up-to-date and reflective of my jumping experiences.*

## Features
- **User Profiles:** Users can create profiles with minimal information for quick setup.
- **Jump Logging:** Users can log their jumps, specifying approach and exit coordinates, landing zone coordinates, altitude, and descriptions.
- **Social Interactions:** Chat functionality and forum-like discussions for community engagement.
- **Content Moderation:** User-generated content is self-moderated by the community.

## Technological Stack
- **Frontend:** React.js, React Router for navigation, Tailwind CSS for responsive designs.
- **Backend:** Node.js, Express.js, MongoDB for database management.

## Server/Backend

### Models

#### User

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  activities: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
}
```

#### Activity

```javascript
{
  type: {type: String, required: true}, // 'skydiving', 'baseJumping', or 'paragliding'
  name: {type: String, required: true},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  device: {type: String, required: true},
  description: {type: String},
  status: {type: String},
  weather: {type: String},
  creator: {type: Schema.Types.ObjectId, ref: 'User'}
}
```

#### Track

```javascript
{
  // Define track properties here
}
```

#### Drop Zone

```javascript
{
  name: {type: String, required: true, trim: true},
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  description: {type: String, trim: true},
  type: {type: String, enum: ['aircraft', 'helicopter'], required: true},
  // Define other drop zone properties here
}
```
## Backend Routes

### Users

| HTTP Method | URL                   | Request Body                                                                                                 | Success Status | Error Status | Description                                                                                          |
| ----------- | --------------------- | -------------------------------------------------------------------------------------------------------------- | -------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| POST        | `/auth/signup`        | `{ username, email, password }`                                                                                 | 201            | 422, 409     | Validate if the required fields are not empty (422). Check if the user with provided username or email already exists (409). If not, create a new user and return a success message. |
| POST        | `/auth/login`         | `{ username, password }`                                                                                        | 200            | 401, 404     | Validate if the required fields are not empty (422). Check if the user with the provided username exists (404). If user exists, compare the provided password with stored password. If they match, return user details. If not, return a 401 error. |
| POST        | `/auth/logout`        | `(empty)`                                                                                                      | 204            | 400          | Log out the current user by destroying the session. If successful, return a 204 status. If no active session exists, return a 400 error.                    |
| GET         | `/api/user/:id`       |                                                                                                                | 200            | 404          | Check if the user with the given ID exists (404). If it does, retrieve the user details and return them to the client. If not, return a 404 error.               |
| PUT         | `/api/user/:id`       | `{ username, email, password }`                                                                                 | 200            | 404, 422     | Validate if the required fields are not empty (422). Check if the user with the given ID exists (404). If it does, update the user details and return a success message. If not, return a 404 error. |
| DELETE      | `/api/user/:id`       |                                                                                                                | 204            | 404          | Check if the user with the given ID exists (404). If it does, delete the user and associated data. Return a 204 status upon successful deletion. If the user does not exist, return a 404 error. |

### Tracks

| HTTP Method | URL                   | Request Body                                                                                                                              | Success Status | Error Status | Description                                                                                          |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| POST        | `/api/tracks`         | `{ name, approachLat, approachLong, approachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude, userId }` | 201            | 422, 401     | Validate if the required fields are not empty (422). Check if the user is logged in (401). Create a new track document with the provided details and associate it with the user. Return a success message along with the created track document. |
| PUT         | `/api/tracks/:id`     | `{ name, approachLat, approachLong, approachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude }`            | 200            | 400, 401     | Validate if the required fields are not empty (422). Check if the user is logged in (401). Check if the track with the given ID exists (404). If it does, update the track document with the provided details. Return the updated track document. If the track does not exist, return a 404 error. |
| GET         | `/api/tracks/:id`     |                                                                                                                                          | 200            | 404          | Check if the track with the given ID exists (404). If it does, retrieve the track details and return them to the client. If not, return a 404 error.               |
| DELETE      | `/api/tracks/:id`     |                                                                                                                                          | 204            | 404, 401     | Check if the track with the given ID exists (404). Check if the user is logged in (401). If both conditions are met, delete the track document with the provided ID. Return a 204 status upon successful deletion. If the track does not exist, return a 404 error. |

### Exit Points

| HTTP Method | URL                   | Request Body                                                                                                         | Success Status | Error Status | Description                                                                                          |
| ----------- | --------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| POST        | `/api/exitpoints`     | `{ name, latitude, longitude, description, type, userId }`                                                           | 201            | 422, 401     | Validate if the required fields are not empty (422). Check if the user is logged in (401). Create a new exit point document with the provided details and associate it with the user. Return a success message along with the created exit point document. |
| PUT         | `/api/exitpoints/:id` | `{ name, latitude, longitude, description, type }`                                                                   | 200            | 400, 401     | Validate if the required fields are not empty (422). Check if the user is logged in (401). Check if the exit point with the given ID exists (404). If it does, update the exit point document with the provided details. Return the updated exit point document. If the exit point does not exist, return a 404 error. |
| GET         | `/api/exitpoints/:id` |                                                                                                                       | 200            | 404          | Check if the exit point with the given ID exists (404). If it does, retrieve the exit point details and return them to the client. If not, return a 404 error.     |
| DELETE      | `/api/exitpoints/:id` |                                                                                                                       | 204            | 404, 401     | Check if the exit point with the given ID exists (404). Check if the user is logged in (401). If both conditions are met, delete the exit point document with the provided ID. Return a 204 status upon successful deletion. If the exit point does not exist, return a 404 error. |

## Drop Zones

| HTTP Method | URL                   | Request Body                                                                                           | Success Status | Error Status | Description                                                                                          |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------------- | -------------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| POST        | `/api/dropzones`      | `{ name, latitude, longitude, description, type, userId }`                                                | 201            | 422, 401     | Validate if the required fields are not empty (422). Check if the user is logged in (401). Create a new drop zone document with the provided details and associate it with the user. Return a success message along with the created drop zone document. |
| PUT         | `/api/dropzones/:id`  | `{ name, latitude, longitude, description, type }`                                                        | 200            | 400, 401     | Validate if the required fields are not empty (422). Check if the user is logged in (401). Check if the drop zone with the given ID exists (404). If it does, update the drop zone document with the provided details. Return the updated drop zone document. If the drop zone does not exist, return a 404 error. |
| GET         | `/api/dropzones/:id`  |                                                                                                       | 200            | 404          | Check if the drop zone with the given ID exists (404). If it does, retrieve the drop zone details and return them to the client. If not, return a 404 error.     |
| DELETE      | `/api/dropzones/:id`  |                                                                                                       | 204            | 404, 401     | Check if the drop zone with the given ID exists (404). Check if the user is logged in (401). If both conditions are met, delete the drop zone document with the provided ID. Return a 204 status upon successful deletion. If the drop zone does not exist, return a 404 error. |

### Trello/Kanban

[Link to your Trello board](https://trello.com/b/PBqtkUFX/curasan) or picture of your physical board.

### GitHub Repository

- [Repository Link](https://github.com/EcaCosca/MERNstack-app)

### Deployment

- [Deployed App Link](http://heroku.com/)

### Presentation Slides

- [Slides Link](http://slides.com/)

### Wireframe

- [Figma Link](http://www.figma.com/file/GNvDVBD1NPTydU2PJy4DDM/dataBASE?node-id=0%3A88)

### External API Documentation

- [Windy API Documentation](https://api.windy.com/)

### Stack Documentation

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/en/main)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [ShadcnUI Documentation for Components](https://ui.shadcn.com/)
- [Clerk Documentation for Auth Services](https://clerk.com/)
- [Mapbox Documentation for React](https://visgl.github.io/react-map-gl/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Nodemon Documentation](https://nodemon.io/)
- [MongoDB Documentation](https://docs.mongodb.com/)
