# **API Configuration**

### **Overview**
This project relies on external APIs to fetch and display news articles. Proper configuration of API keys and endpoints is essential to ensure the application works correctly.

### **News API Configuration**
1. **Create a NewsAPI Account**
    - Visit [NewsAPI](https://newsapi.org) and sign up for a free account.
    - Once registered, generate an API key.
2. **Add the API Key to Environment Variables**
    - Open the server directory and create a `.env` file if it doesn’t exist.
    - Add the following key-value pair:
        ```bash
        NEWS_API_KEY=your_news_api_key
        ```
3. **Usage in the Backend**
    - In your backend code, you can import and use the API key as follows:
        ```js
        const apiKey = process.env.NEWS_API_KEY;
        const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        ```

### **MongoDB Configuration**
1. **Create a MongoDB Atlas Account**
    - Visit [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and create a free cluster.
2. **Generate a Connection String**
    - In the Cluster Dashboard, generate a connection string (replace `<username>`, `<password>`, and `<dbname>` accordingly).
3. **Add MongoDB URI to Environment Variables**
    - Add the following to the `.env` file:
        ```bash
        MONGO_URI=your_mongo_connection_string
        ```
4. **Usage in the Backend**
    - Use the `MONGO_URI` variable to connect to MongoDB:
        ```js
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        ```

### **Testing API Calls**
Ensure the API key and MongoDB URI are correctly configured by running:
    ```bash
    npm run dev
    ```
- If there are any issues, ensure that environment variables are correctly loaded, and the APIs are accessible.

### **Loading Environment Variables**
To load the environment variables in your development environment, you can use the `dotenv` package. Install it using:
```bash
npm install dotenv
```
Then, add the following line at the top of your entry file (e.g., `index.js`):
```js
require('dotenv').config();
```