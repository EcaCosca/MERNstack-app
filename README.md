# AirTool

<img src="/Users/enriquecoscarelli/Downloads/minilogo.png" alt="minilogo" style="zoom:75%;" />

## Project Overview

**AirTool** is an information site with social networking features specifically designed for skydivers and BASE jumpers. This platform allows users to create profiles, access a public database of jumps, track their jumps using a flysight, and engage in social interactions similar to Facebook groups. Users can upload pictures and embed videos from YouTube. The website incorporates 3D maps using Mapbox for visualization.

## Key Features

### User Profiles

- Users can create profiles with pictures and videos.
- Users can track and manage their jumps, both public and private, using a flysight device.
- Users can engage in social interactions, including chat and forum-like discussions.

### Jump Database

- Public database of jumps accessible to all users.
- Users can create private jumps for personal use.

### Content Moderation

- User-generated content will be self-moderated by the community.

### Integration of Third-party Services

- Embedding videos from YouTube.
- 3D maps using Mapbox for visualizing jump locations.

## Technological Stack

- **Frontend:** React.js for dynamic and interactive user interfaces.
- **Backend:** Node.js with Express.js for server-side development.
- **Database:** MongoDB for storing user data and jump information.
- **CSS Framework:** Tailwind CSS for efficient and responsive designs.

## Design and User Experience

- Modern, professional, and simple design.
- User interface similar to Discord for chat features and display.
- Blog and social interaction features similar to LinkedIn and Facebook.
- Unique dashboard design for jump tracking and other functionalities.

## Mobile Responsiveness

- The website will be fully accessible and optimized for mobile devices.

## Development Timeline

- **MVP Deadline:** Within the next 2 months.

## Budget and Resources

- **Budget:** $100 per month for hosting and other expenses.
- **Development Time:** 4 hours daily contributed by you.

## Backend Routes

| HTTP Method | URL            | Request Body                                                 | Success Status | Error Status | Description                                                  |
| ----------- | -------------- | ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me`     |                                                              | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup` | {name, email, password}                                      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`  | {username, password}                                         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout` | (empty)                                                      | 204            | 400          | Logs out the user                                            |
| POST        | `/api/exit`    | {name, img, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to create one exit point document, using current logged in user id as a creator. |
| PUT         | `/api/exit/:id`| {name, img, aproachLat, aproachLong, aproachDescription, exitLat, exitLong, exitDescription, landingZoneLat, landingZoneLong, landingZoneDescription, altitude} |                |              | Used to update one exit point document by id                 |
| GET         | `/api/exit/:id`|                                                              |                |              | Used to get one exit point document by id                    |
| DELETE      | `/api/exit/:id`|                                                              |                |              | Used to delete one exit point document by id                 |
| GET         | `/api/user`    |                                                              |                |              | Used to get current user's profile. Id of the user is coming from the req.session.currentUser |
| PUT         | `/api/user`    | {username, email, password}                                  |                |              | Used to update current user's profile. Id of the user is coming from the req.session.currentUser |

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

---

Feel free to customize and expand this template further based on your project's needs. If you have any specific questions or need further assistance, please let me know!
