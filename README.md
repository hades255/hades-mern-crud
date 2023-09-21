# Crud App with mongodb

This repository contains a simple CRUD (Create, Read, Update, Delete) application using MongoDB as the database.

## Folder Structure:

- **controllers**: This folder contains the controllers for the application which handle incoming requests from the client and communicate with the models to retrieve and update data.
- **models**: This folder contains the MongoDB schema and models for the application.
- **routes**: This folder contains the routes for the application which handle the routing of incoming requests to the correct controller.
- **services**: This folder contains any additional services used by the application.
- **test**: This folder contains the test files for the application.
- **.gitignore**: This file specifies the files and directories to be ignored by Git during commits and pushes.
- **README.md**: This file contains information about the application and how to use it.
- **app.js**: This file is the entry point for the application and sets up the server and middleware.
- **package-lock.json**: This file is automatically generated for any operations where npm modifies either the node_modules tree or package.json.
- **package.json**: This file specifies the dependencies and scripts for the application.

## Run the Application
To run the application, clone the repository:

    git clone https://github.com/hades255/hades-mern-crud.git

Then navigate to the root directory and Run `npm install` to install the necessary dependencies. 

    cd hades-mern-crud
    npm install

Then, run `npm start` to start the server.
    
    npm start
    
## Roadmap / TODO:

- Update the README with more detailed information about the application and how to use it.
- Add more robust error handling.
- Implement user authentication and authorization.
- Create a frontend for the application.

<img src="./ss/react.png" width="100%">
<p align="center">
    <img src="./public/Screenshot_2.png" width="49%" style="display: inline" float="left">
    <img src="./public/Screenshot_3.png" width="49%" style="display: inline" float="right">
</p>