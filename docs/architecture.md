# **System Architecture**

### **Overview**  
The Customizable News Aggregator is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The architecture is designed to facilitate seamless communication between the frontend and backend, ensuring efficient data management and a responsive user experience.

### **Architecture Components** 
1. **Frontend (React)**
    - **User Interface**:Provides a clean and user-friendly interface for browsing and reading news articles. Users can select topics, keywords, or sources to customize their news feed.
    - **State Management**: Utilizes React state and hooks to manage user preferences and fetched articles.
2. **Backend (Node.js with Express)**
    - **API Layer**: Exposes RESTful API endpoints for the frontend to interact with.
    - **Content Aggregation**: Fetches news articles from various sources using news APIs (e.g., NewsAPI) and RSS feeds.
    - **Data Normalization**: Normalizes data from different sources into a consistent format for easier consumption by the frontend.

### **Data Flow**
1. **User Interaction**: Users interact with the frontend to customize their news feed.
2. **API Requests**: The frontend sends requests to the backend API to fetch or update user preferences and articles.
3. **Data Fetching**: The backend aggregates news articles from third-party sources and normalizes the data.
4. **Response**: The backend sends the formatted articles back to the frontend, which displays them to the user.
