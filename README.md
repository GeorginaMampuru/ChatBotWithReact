
# Chat Bot with React 

## Overview
![MicrosoftTeams-image (8)](https://github.com/GeorginaMampuru/ChatBotWithReact/assets/66384787/d449ab5f-a71e-4486-baf2-0e802c79d808)
![MicrosoftTeams-image (9)](https://github.com/GeorginaMampuru/ChatBotWithReact/assets/66384787/67f9293a-3906-4c51-b9e6-66b903f53ef0)


This is a chat bot created using React, Node.js, and Chat Engine.

## Overview

The Chat Bot is an interactive application that allows users to engage in conversations with an AI-powered chat bot. It utilizes React for the front-end user interface, Node.js for the server-side logic, and Chat Engine for real-time messaging functionality.


## Features

- Real-time messaging: Users can send and receive messages in real-time with the chat bot.
- AI-powered responses: The chat bot is equipped with AI capabilities to generate intelligent responses based on user inputs.
- User authentication: Users can create accounts, log in, and securely access the chat bot.
- User profiles: Users can customize their profiles and manage their preferences.
- Chat history: The chat bot keeps a record of previous conversations for users to refer back to.
- Error handling: The application is designed to handle errors gracefully and provide helpful error messages when necessary.

## Installation



1. Clone the repository:
```
git clone https://github.com/your-username/chat-bot.git
Navigate to the project directory:
cd chat-bot
Install the dependencies for the server:

express is the HTTP server framework we’ll be using
cors allows us to process requests from other hosts (for our ReactJS app)
axios allows us to send HTTP requests to other servers (for Chat Engine APIs)
nodemon allows us to run the server in dev-mode

46)


cd server

npm install ```
Start the server:

npm start
Open a new terminal window, navigate to the project directory, and install the dependencies for the client:

cd ../client
npm install
Start the client:

```npm start```
Access the Chat Bot in your web browser at http://localhost:3000.

### install a few dependencies to run a propr nodejs for this chat app
npm i express cors axios
npm i --save-dev nodemon ```

Within frontend install this component with the following command:

npm install react-chat-engine-pretty

# Configuration
Before running the Chat Bot, make sure to configure the necessary environment variables. Create a .env file in the server directory and add the following variables:


- CHAT_ENGINE_PROJECT_ID=your_project_id
- CHAT_ENGINE_PRIVATE_KEY=your_private_key
- CHAT_ENGINE_PUBLIC_KEY=your_public_key
### Replace your_project_id, your_private_key, and your_public_key with your actual Chat Engine project credentials. You can obtain these credentials by creating an account on the Chat Engine platform.
```
# Usage
Once the Chat Bot is up and running, users can interact with it by sending messages through the chat interface. The chat bot will respond with AI-generated replies based on the user's input. Users can also perform various actions such as creating an account, logging in, and managing their profiles.

# Contributing
If you would like to contribute to the development of the Chat Bot, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make the necessary changes in your branch.
Commit and push your changes.
Submit a pull request.
Please ensure that your code adheres to the project's coding conventions and includes appropriate tests.

# License
The Chat Bot is open-source software licensed under the MIT License.


