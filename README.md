# **Customizable News Aggregator**

### **Project Overview**  
A full-stack web application that aggregates news articles from various sources, allowing users to customize their feeds based on interests such as topics, keywords, or specific sources. Built using the **MERN stack**.

---

## **Features**
- Users can customize their news feed by selecting preferred topics and keywords.
- News articles are displayed with headlines, summaries, images, and publication dates.
- Responsive design for optimal viewing on mobile and desktop devices.
- Efficient content aggregation using APIs or RSS feeds, with caching strategies for improved performance.

---

## **Technology Stack**
- **Frontend**: React, Axios, React Router  
- **Backend**: Express, Node.js, Mongoose  
- **Database**: MongoDB Atlas (cloud-hosted)  
- **Deployment**: Vercel (frontend), Heroku (backend)

---

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

---

## **API Endpoints**
  - **GET /news**: Fetch latest news articles.
  - **GET /news/search?query=keyword**: Search articles by keyword.
  - **POST /user/preferences**: Save user preferences.
  - **GET /user/preferences**: Retrieves user preferences.

---

## **System Architecture Overview**
  - **Frontend** communicates with the backend via RESTful API.
  - **Backend** fetches news data from third-party APIs (NewsAPI, RSS).
  - **Database** stores user preferences and articles for caching and future access.

---

## **Feature Enhancements**
  - Infinite scrolling for the news feed.
  - User authentication for personalized feeds.
  - Offline mode to access cached articles.

---

## **Contributing**
Contributions are welcome! If you have suggestions for improvements or features, please feel free to submit an issue or pull request.

# License

Copyright (c) 2024 Leandro096

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.