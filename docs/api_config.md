# **API Configuration**

### **Overview**
This project relies on external APIs to fetch and display news articles. Proper configuration of API keys and endpoints is essential to ensure the application works correctly.

### **News API Configuration**
1. **Create a NewsAPI Account**
    - Visit NewsAPI and sign up for a free account.
    - Once registered, generate an API key.
2. **Add the API Key to Environment Variables**
    - Open the server directory and create a .env file if it doesn’t exist.
    - Add the following key-value pair:
        ```bash
            NEWS_API_KEY=your_news_api_key
3. **Usage in the Backend**
    - In your backend code, you can import and use the API key as follows:
        ```bash
            const apiKey = process.env.NEWS_API_KEY;
            const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

---

### **MongoDB Configuration**
1. **Create a MongoDB Atlas Account**
    - Visit [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and create a free cluster.
2. In the **Cluster Dashboard**, generate a connection string (replace <mark><username></mark>, <mark><password></mark>, and <mark><dbname></mark> accordingly).
2. **Add MongoDB URI to Environment Variables**

    - Add the following to the .env file:
        ```bash
            MONGO_URI=your_mongo_connection_string
3. **Usage in the Backend**
    - Use the <mark>MONGO_URI</mark> variable to connect to MongoDB:
        ```bash
            mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

---

### **Testing API Calls**
Ensure the API key and MongoDB URI are correctly configured by running:

        npm run dev
- If there are any issues, ensure that environment variables are correctly loaded, and the APIs are accessible.
    
