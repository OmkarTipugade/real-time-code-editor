# Collab-Code

Collab-Code is a real-time collaborative code editor that allows multiple users to write and edit code together in real-time. It is built using modern web technologies like React, Vite, and Socket.IO, providing a seamless and interactive experience for coding with friends or teammates.

## Features

- **Real-Time Collaboration**: Multiple users can join a room and edit code together in real-time.
- **Room-Based Collaboration**: Users can create or join rooms using unique room IDs.
- **Code Synchronization**: Changes made by one user are instantly reflected for all connected users.
- **User Identification**: Each user is identified by their username and assigned a unique color for easy recognition.
- **Code Editor**: A feature-rich code editor powered by CodeMirror with syntax highlighting, auto-closing brackets, and tags.
- **Responsive Design**: Works seamlessly across different screen sizes.
- **Notifications**: Toast notifications for user actions like joining or leaving a room.
- **Copy Room ID**: Easily copy the room ID to share with others.

## Technologies Used

- **Frontend**: React, Vite, TailwindCSS, CodeMirror
- **Backend**: Node.js, Express, Socket.IO
- **Real-Time Communication**: Socket.IO
- **Styling**: TailwindCSS
- **State Management**: React hooks and context

## How to Run the Project

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- A modern web browser

### Steps to Run

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd Collab-Code

   ```

2. **Install Dependencies**:
   Navigate to the server and root directories and install dependencies:

# Install server dependencies

```bash
cd server
npm install
```

# Install client dependencies

````bash
cd ..
npm install
````
# Collab-Code

Collab-Code is a real-time collaborative code editor that allows multiple users to write and edit code together in real-time. It is built using modern web technologies like React, Vite, and Socket.IO, providing a seamless and interactive experience for coding with friends or teammates.

## Features

- **Real-Time Collaboration**: Multiple users can join a room and edit code together in real-time.
- **Room-Based Collaboration**: Users can create or join rooms using unique room IDs.
- **Code Synchronization**: Changes made by one user are instantly reflected for all connected users.
- **User Identification**: Each user is identified by their username and assigned a unique color for easy recognition.
- **Code Editor**: A feature-rich code editor powered by CodeMirror with syntax highlighting, auto-closing brackets, and tags.
- **Responsive Design**: Works seamlessly across different screen sizes.
- **Notifications**: Toast notifications for user actions like joining or leaving a room.
- **Copy Room ID**: Easily copy the room ID to share with others.

## Technologies Used

- **Frontend**: React, Vite, TailwindCSS, CodeMirror
- **Backend**: Node.js, Express, Socket.IO
- **Real-Time Communication**: Socket.IO
- **Styling**: TailwindCSS
- **State Management**: React hooks and context

## How to Run the Project

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- A modern web browser
````
### Steps to Run

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd Collab-Code
````

2. **Install Dependencies**:
   Navigate to the `server` and root directories and install dependencies:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ..
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the backend URL:

   ```
   VITE_BACKEND_URL=http://localhost:5000
   ```

4. **Start the Backend Server**:
   Navigate to the `server` directory and start the server:

   ```bash
   cd server
   npm run dev
   ```

5. **Start the Frontend**:
   Navigate back to the root directory and start the frontend:

   ```bash
   npm run dev
   ```

6. **Access the Application**:
   Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

7. **Collaborate**:
   - Create a new room or join an existing room using a room ID.
   - Share the room ID with others to collaborate in real-time.

## Project Structure

- **Frontend**: Located in the root directory, built with React and Vite.
- **Backend**: Located in the `server` directory, built with Node.js and Socket.IO.
- **Shared Utilities**: Functions like `getColor` for assigning unique colors to users.

## Future Enhancements

- Add support for more programming languages in the editor.
- Implement user authentication for better security.
- Add a chat feature for better communication between collaborators.
- Improve UI/UX for a more polished experience.

## Author

- **Omkar Tipugade**

Feel free to contribute to this project by submitting issues or pull requests!

