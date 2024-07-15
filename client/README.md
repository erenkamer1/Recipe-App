Recipes Web App

Installing
Frontend

Clone the Repository
git clone https://github.com/erenkamer1/Recipe-App.git
cd Recipe-App/client

Install Dependencies
npm install

Start the Frontend Server
npm start
This command will start the frontend server.

Backend

Install Dependencies
npm install

Start the Backend Server
nodemon
This command will start the backend server.

Running the Full Stack (Frontend + Backend)
Frontend: To start the frontend part of the project, navigate to the Recipe-App/client directory and run npm start.
Backend: To start the backend part of the project, navigate to the Recipe-App/server directory and run nodemon.

Libraries Used:
@testing-library/jest-dom: ^5.17.0
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
axios: ^1.7.2
jose: ^5.4.0
react: ^18.3.1
react-dom: ^18.3.1
react-router-dom: ^6.23.1
react-scripts: 5.0.1
web-vitals: ^2.1.4

Features
A website where you can search for recipes based on the ingredients you have or the dish you want.
Functions include Login, Register, saving user-specific favorite recipes, deleting, etc...
