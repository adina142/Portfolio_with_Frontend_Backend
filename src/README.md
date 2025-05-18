React CSS Portfolio
Portfolio Screenshot

A modern, responsive portfolio built with React and Material-UI (MUI) following component-based architecture and React 18+ best practices.

Features
Core Features
Responsive Layout Components

MUI AppBar header with profile avatar dropdown

Collapsible MUI Drawer navigation (desktop/mobile)

Fixed footer with copyright information

Dynamic main content section

Project Showcase

Animated project cards with hover effects

Technology tags for each project

GitHub and demo links

Contact Form

Form validation with Yup

Responsive input fields

Submission handling

Education Section

Timeline-style education history

Institution details and dates

Technical Highlights
React Context API for global state management

Dynamic page titles

Responsive design with CSS media queries

Component-based architecture

React Router for navigation

MUI component library integration

Technologies Used
React

Material-UI

React Router

Yup

CSS3

Installation
Clone the repository:

bash
git clone https://github.com/your-username/react-css-portfolio.git
Navigate to the project directory:

bash
cd react-css-portfolio
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
Open http://localhost:3000 to view in your browser.

Project Structure
react-css-portfolio/
├── public/
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable components
│   │   ├── Header/index.js
│   │   ├── SideNav/index.js
│   │   ├── Footer/index.js
│   │   └── ProjectCard/index.js
│   ├── context/           # Context providers
│   ├── pages/             # Page components
│   │   ├── Home/index.js
│   │   ├── Projects/index.js
│   │   ├── Education/index.js
│   │   └── Contact/index.js
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── .gitignore
└── README.md
Best Practices Implemented
Component Design

Functional components with hooks

Small, single-responsibility components

Reusable UI components

Styling

CSS modules for component-scoped styles

Global CSS variables for theming

Responsive design with media queries

Performance

Lazy-loaded routes

Optimized image assets

Memoized computations

Code Quality

Semantic HTML

Descriptive class names

Meaningful component structure