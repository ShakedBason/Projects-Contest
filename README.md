# projects_contest_2024

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Contact](#contact)

## Project Overview

This project is a **grading system** designed for managing projects, assigning judges, and allowing judges to submit grades for assigned projects. The system provides a user-friendly interface for judges to grade projects based on multiple criteria such as **complexity, usability, innovation, presentation, and proficiency**.

> **Note:** The project was developed by [Or Elkabetz], [Roy Sagi], and [Name 3].

## Technologies Used

- **Frontend:**
  - React
  - Styled Components
  - Material UI
  - SweetAlert2
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Other Tools:**
  - MobX (state management)
  - Docker (optional)
  - CSV Parsing (for bulk uploads)
  - Canvas Confetti

## Setup Instructions

To set up and run this project locally, follow these steps:

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud-based)
- Docker (optional)

### Step-by-Step Guide

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/project-repo.git
   cd project-repo
   ```

2. **Install dependencies:**

   Run the following commands to install the required dependencies:

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file at the root of the project with the following variables:

   ```
   MONGO_URI=<your-mongodb-uri>
   BACKEND_URL=<your-backend-url>
   ```

4. **Start the development server:**

   For frontend:
   ```bash
   npm start
   ```

   For backend:
   ```bash
   cd backend
   npm start
   ```

5. **Access the application:**

   Open your browser and visit `http://localhost:3000` to use the grading system.

## Usage

- **Login:** Users (judges) can log in using their assigned credentials.
- **Grading Projects:** Judges can view a list of assigned projects, open a project, and submit grades.
- **Admin Functionality:** Admins can manage projects, upload project data via CSV, assign judges to projects, and view submitted grades.

## Features

- **Project Management:** Add, edit, and remove projects.
- **Judge Management:** Assign and manage judges for each project.
- **Grading System:** Allows judges to grade projects across five criteria.
- **Real-Time Validation:** Prevents the submission of duplicate grades for the same project by the same judge.
- **Confetti Effect:** Adds a playful confetti animation when hovering over graded projects.

## API Endpoints

Here are some key API endpoints used in this project:

- **POST** `/gradeProject`: Submit a grade for a project.
- **GET** `/projectsForJudge/projectList`: Fetch the list of projects assigned to a judge.
- **POST** `/admin/projects/upload`: Upload project data via CSV.
- **POST** `/admin/judges/assign`: Assign judges to projects.
- **GET** `/admin/podium`: Fetch top 3 projects in various categories for podium view.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new feature branch.
3. Submit a pull request for review.

## Contact

If you have any questions or suggestions, feel free to reach out to:

- **Or Elkabetz** - [orelkabetz@gmail.com](orelkabetz@gmail.com)
- **Roy Sagi** - [roy.roysagi@gmail.com](mailto:roy.roysagi@gmail.com)
- **Shaked Bason** - [Shakedba17@gmail.com](mailto:Shakedba17@gmail.com)

