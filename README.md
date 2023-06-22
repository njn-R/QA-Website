# QA Website Documentation

## Introduction
The QA Website is a question-and-answer platform developed using the MEAN tech stack (Angular for the frontend, NodeJS, Express and MongoDB for the backend). It allows interviewers to create interview prep questions and candidates to take those questions. This documentation provides an overview of the QA Website repository, its structure, and how to set it up and use it.

## Repository Structure
The repository consists of the following main components:

1. **`qa-website/server/`**: This is the backend server folder.
    - **`server.js`**: Entry point for the server
        - **`qa-website/server/controller`**: Logic for the frontend API routes are described in this file 
        - **`qa-website/server/middleware`**: Auth and Error middleware are provided here
        - **`qa-website/server/models`**: Defines the user, question and course models and related functionalities.
        - **`qa-website/server/routes`**: All the API routes are listed here
  
2. **`qa-website/client/`**: This is the frontend server folder.
    - **`qa-website/client/src/app`**: Contains all the angular components
        - **`admin-panel`**: Display and edit login details from this page
        - **`cart`**: Added courses to purchase will be displayed here
        - **`courses`**: Browse various courses and add them to cart 
        - **`question-authoring`**: Add questions to the database
        - **`interview-prep`**: Take mock interview quiz from this page
        - **`service`**: Includes all the API call logic to communicate with the backend

## Setup Instructions
To set up the QA Website locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/njn-R/QA-Website.git
   ```
2. Navigate to the project directory:
   ```
   cd QA-Website
   ```
3. Go to the frontend folder
   ```
   cd client
   ```
4. Start Angular app
     ```
     ng serve -o
     ```
5. Go back and go to server folder
   ```
    cd ..
    cd server
   ```
6. Run the NodeJS server
   ```
   node server.js
   ```
7. Open a web browser and visit `http://localhost:4200` to access the QA Website.


## Usage
Once the QA Website is set up, you can perform the following actions:

- Register a new user account or log in with an existing account.
- Add questions by clicking on the "Add Question" button and providing the necessary details.
- Browse existing questions and answers on the homepage.
- View a specific question and its answers by clicking on the question title.
- Edit or delete your own questions.
- Take an interview prep quiz with the added questions.
- Buy courses to learn about various web development related topics.

## Contributing
If you wish to contribute to the QA Website project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch from the `main` branch for your feature or bug fix.
3. Make the necessary changes and additions in your branch.
4. Test your changes thoroughly.
5. Commit your changes with descriptive commit messages.
6. Push your branch to your forked repository.
7. Submit a pull request from your branch to the main repository.
8. Provide a clear description of your changes and why they should be merged.

## Conclusion
The QA Website repository provides a ready-to-use question-and-answer platform developed with the MEAN stack. By following the setup instructions and utilizing the provided features, it should be easy to set it up.
 
