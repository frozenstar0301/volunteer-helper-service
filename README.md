# Weather Helper Service Application

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)

---

## Preview the App
![Card App Preview](screenshots/Cards.png)
![Weather Preview](screenshots/Weather.png)


## Overview
Weather Helper Service is a full-stack web application designed to display helper services with dynamic open/closed status and weather information based on location. Users can expand descriptions and check weather details via a modal popup.

---

## Features
- Display helper services with detailed descriptions, phone numbers, and open/closed status.
- Weather data retrieval using OpenWeather API.
- Expandable descriptions with a "Show More" toggle.
- Responsive and user-friendly design.
- Logging system for all API requests and errors.

---

## Technologies Used
- **Frontend**: React, Bootstrap, Axios
- **Backend**: Node.js, Express
- **API**: OpenWeather API
- **Middleware**: Custom logger for API request logging

---

## Installation

### Clone Repository
```bash
git clone https://github.com/frozenstar0301/volunteer-helper-service.git
cd volunteer-helper-service
```

### Clone Repository

```bash
npm install
cd frontend
npm install
cd ../backend
npm install
```

## Usage

### Run Backend Server

```bash
npm run dev:backend
```

### Run Frontend Server

```bash
npm run dev:frontend
```

## API Endpoints

### Helper Services API

- GET `/api/helpers`
Returns a list of all helper services

### Weather API

- POST `/api/weather`
Returns weather data for a given location

## Environment Variables

Create `.env` files in folder.

```bash
PORT=8000
API_KEY=your_api_key
```

## Folder Structure
```
[root Project]/
├── backend/
│   ├── controllers/
│   ├── config/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── logs/
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
├── .gitignore
└── README.md
```

## Future Enhancements
- Database integration for persistent storage.
- User authentication and session management.
- Weather caching for performance optimization.
- Unit testing for frontend and backend.