# Assignment Management Web Application

This project is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to create, manage, and submit assignments. It includes features such as user authentication, assignment creation, viewing assignments, filtering assignments, and tracking assignment submissions.

## Live Site URL

[Assignment Management Application](https://assignment-11-401bc.web.app/)

## Features

### Home Page (Public)

- **Navbar:** Displays navigation links and changes based on user authentication status.
  - **Before Login:** Shows logo, Assignments, Login, and Register links.
  - **After Login:** Shows logo, Assignments, Create Assignments, Pending Assignments, and User Avatar. The User Avatar opens a dropdown with links to My Attempted Assignments and Logout.
  
- **Banner Section:** A themed banner area.

- **Feature Section:** Cards highlighting key features of the application.

- **FAQ Section:** Frequently Asked Questions.

- **Footer:** Contains copyright information and relevant links.

### Create Assignment Page (Private)

- Allows logged-in users to create assignments.
- **Assignment Fields:** 
  - Title
  - Description
  - Marks
  - Thumbnail Image URL
  - Difficulty Level (Dropdown: Easy, Medium, Hard)
  - Due Date (using react-datepicker)
- Displays a success message upon successful creation.

### Assignments Page (Public)

- Displays all assignments created by users.
- **Filter Functionality:** Filter assignments based on difficulty level.
- **Assignment Card:** 
  - Shows thumbnail, title, marks, difficulty level, and buttons for Delete, Update, and View.
  - **Delete Button:** Allows only the creator to delete the assignment, with a confirmation modal and success/error messages.
  - **Update Button:** Allows any user to update the assignment, with pre-filled form fields and success message.
  - **View Button:** Navigates to the Assignment Details page with a "Take Assignment" button.

### Assignment Details Page (Private)

- Displays assignment details and includes a "Take Assignment" button.
- **Take Assignment:** Opens a modal or new page with a form for submitting the assignment (PDF/doc link and a quick note text).

### My Submitted/Attempted Assignments Page (Private)

- Lists assignments submitted by the logged-in user.
- Displays title, status, marks, obtained marks, and feedback.

### Pending Assignments Page (Private)

- Lists all pending assignments submitted by users.
- Displays assignment title, marks, examinee name, and a "Give Mark" button.
- **Give Mark:** Opens a modal or new page to view submission details and input marks and feedback.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assignment-management-app.git

2. Navigate to the project directory:
       cd assignment-management-app

3. Install server dependencies:
   
       npm install
5. Install client dependencies:
   
        cd client
        npm install
7. Create a .env file in the root directory and add the following environment variables:
   
          MONGO_URI=your_mongodb_uri
         JWT_SECRET=your_jwt_secret
9. Start the development server:
    
       npm run dev
11. Start the client:
    
      cd client
    
      npm start
     
     
