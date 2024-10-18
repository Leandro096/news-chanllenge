# **Backend**

## **Setup Instructions**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Leandro096/news-chanllenge.git
   cd news-chanllenge
2. **Install dependecies**:
  - **Backend**:
    ```bash
    cd server
    npm install
  - **Frontend**:
    ```bash
    cd client
    npm install
3. **Enviroment Variables**:
   - Create a **.env** file in the **server** directory with:
   ```bash
   MONGO_URI=your_mongo_connection_string
   NEWS_API_KEY=your_news_api_key
   PORT=5000
4. **Run the application**:
  - **Backend**:
    ```bash
    cd server
    npm run dev
  - **Frontend**:
    ```bash
    cd client
    npm run dev