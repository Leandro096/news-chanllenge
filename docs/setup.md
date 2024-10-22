# **Setup Instructions**

### **Prerequisites**
1. **Clone the Repository**
    Open your terminal and run:
    ```bash
    git clone https://github.com/Leandro096/news-chanllenge.git
    cd news-chanllenge
    ```

2. **Install Dependencies**
    Navigate to the server and client directories to install the necessary dependencies.
    - **Backend**:
        ```bash
        cd server
        npm install
        ```
    - **Frontend**:
        ```bash
        cd client
        npm install
        ```

3. **Environment Variables**
    - Create a **.env** file in the **server** directory with the following content:
        ```bash
        NEWS_API_KEY=your_news_api_key
        MONGO_URI=your_mongo_connection_string
        ```

### **Running the Application**
1. **Start the Backend Server**
    - Navigate to the server directory and run:
        ```bash
        npm run dev
        ```

2. **Start the Frontend Server**
    - Open a new terminal, navigate to the client directory, and run:
        ```bash
        npm run dev
        ```

### **Testing**
1. **Run Backend Tests**
    - Navigate to the server directory and run:
        ```bash
        npm test
        ```

2. **Run Frontend Tests**
    - Navigate to the client directory and run:
        ```bash
        npm test
        ```

### **Additional Notes**
- Ensure that you have Node.js and npm installed on your machine.
- If you encounter any issues, check the logs for error messages and ensure that all dependencies are correctly installed.