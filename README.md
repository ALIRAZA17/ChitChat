# Project Setup

## Backend Setup

1. **Navigate to the Backend Directory:**
   - Open your terminal and move into the backend directory by running:
     ```bash
     cd backend
     ```
   
2. **Install Dependencies:**
   - Install the necessary Node.js dependencies:
     ```bash
     npm install
     ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the root of the backend directory.
   - Add your OpenAI API key in the `.env` file:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key
     ```

4. **Start the Development Server:**
   - Launch the NestJS backend server in development mode:
     ```bash
     npm run start:dev
     ```

## Frontend Setup

1. **Navigate to the Frontend Directory:**
   - Move into the frontend directory by running:
     ```bash
     cd chit-chat-frontend
     ```

2. **Install Dependencies:**
   - Install the required Node.js dependencies:
     ```bash
     npm install
     ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the root of the frontend directory.
   - Add the API URL in the `.env` file:
     ```plaintext
     API_URL=your_api_url
     ```

4. **Start the Development Server:**
   - Launch the Next.js frontend application in development mode:
     ```bash
     npm run dev
     ```

