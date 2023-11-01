# AirTool

![AirTool Logo](/Users/enriquecoscarelli/Downloads/minilogo.png)

## Project Overview

**AirTool** is a specialized platform designed exclusively for skydivers and BASE jumpers. This application provides essential features tailored to these extreme sports enthusiasts, allowing them to create profiles, log their jumps, and engage in social interactions with fellow jumpers. The platform emphasizes simplicity, focusing on the core needs of the skydiving and BASE jumping communities.

## Table of Contents
- [User Stories](#user-stories)
- [Features](#features)
- [Technological Stack](#technological-stack)
- [Backend Routes](#backend-routes)
- [Server/Backend](#serverbackend)
- [Project Management and Documentation](#project-management-and-documentation)

## User Stories
- **Signup:** Anonymous users can sign up to create profiles and participate in the community.
- **Login:** Registered users can log in to access their profiles and track their jumps.
- **Logout:** Users can log out securely from the platform.
- **Add, Edit, and Delete Jumps:** Users can add, edit, and delete jump locations with specific details.
- **Social Interactions:** Users can engage in social interactions, including chat and forum-like discussions.
- **View Jump Details:** Users can view detailed information about each jump, including approach coordinates, exit coordinates, landing zone coordinates, altitude, and descriptions.
- **Edit User Profile:** Users can edit their profiles and manage their jump records.

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

### Git Repositories

- [Client Repository Link](https://github.com/screeeen/project-client)
- [Server Repository Link](https://github.com/screeeen/project-server)

### Deployment

- [Deployed App Link](http://heroku.com/)

### Presentation Slides

- [Slides Link](http://slides.com/)

### Wireframe

[Figma Link](http://www.figma.com/file/GNvDVBD1NPTydU2PJy4DDM/dataBASE?node-id=0%3A88)
