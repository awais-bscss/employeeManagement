# Employee Management Web App

A responsive React-based web application for managing employee tasks with role-based dashboards for admins and employees. Built using React, Context API, and localStorage for state management.

## Features

- **Role-Based Dashboards**: Separate interfaces for admins (task creation and overview) and employees (task management).
- **Task Management**: Admins can create and assign tasks; employees can accept, mark as completed, or mark as failed.
- **Responsive Design**: Optimized for mobile and desktop using Tailwind CSS.
- **State Management**: Uses Context API and localStorage for persistent data storage.
- **Task Status Tracking**: Tracks tasks as New, Active, Completed, or Failed with real-time updates.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: Context API, localStorage
- **Tools**: Vite, Node.js

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/employee-management-web-app.git

## Navigate to the project directory:

cd employee-management-web-app

## Install dependencies:

npm install

## Start the development server:

npm run dev

## Usage

Admin Login: Use email: awais@mail.com, password: 1234 to access the admin dashboard.
Employee Login: Use email: ahmad@mail.com, password: 1234
omar@mail.com, password: 1234
aisha@mail.com, password: 1234
yusuf@mail.com, password: 1234
fatima@mail.com, password: 1234
Admin Features: Create tasks, assign to employees, and view all employee task statuses in the AllTask section.
Employee Features: View assigned tasks, accept new tasks, and mark tasks as completed or failed.

## Folder Structure

Copy
├── src
│ ├── components
│ │ ├── Auth
│ │ │ └── Login.jsx
│ │ ├── Dashboard
│ │ │ ├── AdminDashboard.jsx
│ │ │ └── EmployeeDashboard.jsx
│ │ └── TaskList
│ │ ├── AcceptTask.jsx
│ │ ├── CompleteTask.jsx
│ │ ├── FailedTask.jsx
│ │ ├── NewTask.jsx
│ │ └── TaskList.jsx
│ ├── context
│ │ └── AuthProvider.jsx
│ ├── layouts
│ │ ├── AllTask.jsx
│ │ ├── CreateTasks.jsx
│ │ ├── Header.jsx
│ │ └── TaskListNum.jsx
│ ├── utils
│ │ └── localStorage.js
│ ├── App.jsx
│ ├── index.js
│ └── index.css
├── public
└── README.md

## Deployment

GitHub Repository: GitHub

## Future Improvements

Add backend with MongoDB for persistent storage.
Implement user authentication with JWT.
Enhance UI with animations and advanced filtering.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License:
This project is licensed under the MIT License.
