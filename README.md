# AirTool

![AirTool Logo](/path/to/your/logo.png)

## Project Overview

**AirTool** is an innovative platform designed exclusively for skydivers and BASE jumpers, catering to their unique needs in the extreme sports community. This application offers a streamlined and intuitive experience, enabling enthusiasts to create personalized profiles, log their jumps with detailed information, and engage in vibrant social interactions with fellow jumpers. With a focus on simplicity and functionality, AirTool aims to enhance the way skydivers and BASE jumpers connect, share experiences, and explore new horizons in the thrilling world of aerial sports.

## Key Features

- **User Profiles:** Quickly create profiles with essential information to get started.
- **Jump Logging:** Seamlessly log jumps with precise details, including approach and exit coordinates, landing zone coordinates, altitude, and descriptions.
- **Social Interactions:** Foster community engagement through chat functionality and forum-like discussions.
- **Content Moderation:** User-generated content is self-moderated by the community, ensuring a respectful and supportive environment.

## Target Audience

AirTool is tailored for passionate skydivers and BASE jumpers who crave a user-friendly platform to document their experiences, connect with like-minded individuals, and stay updated on the latest trends and discussions within the community.

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

## Backend Routes

| HTTP Method | URL            | Request Body                                                 | Success Status | Error Status | Description                                                  |
| ----------- | -------------- | ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me`     |                                                              | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup` | {username, email, password}                                  | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`  | {username, password}                                         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout` | (empty)                                                      | 204            | 400          | Logs out the user                                            |
| POST        | `/api/jump`    | {name, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to create one jump document, using current logged in user id as a creator. |
| PUT         | `/api/jump/:id`| {name, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to update one jump document by id                        |
| GET         | `/api/jump/:id`|                                                              |                |              | Used to get one jump document by id                           |
| DELETE      | `/api/jump/:id`|                                                              |                |              | Used to delete one jump document by id                        |
| GET         | `/api/user`    |                                                              |                |              | Used to get current user's profile. Id of the user is coming from the req.session.currentUser |
| PUT         | `/api/user`    | {username, email, password}                                  |                |              | Used to update current user's profile. Id of the user is coming from the req.session.currentUser |

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

## Project Management and Documentation

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
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Nodemon Documentation](https://nodemon.io/)
- [MongoDB Documentation](https://docs.mongodb.com/)
