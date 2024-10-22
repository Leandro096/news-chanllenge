# Customizable News Aggregator App - Server

## Overview
This is the server-side application for the Customizable News Aggregator App. It handles API requests, data processing, and serves news content to the client-side application.

## Features
- Fetches news from various international sources
- Provides endpoints for different news categories
- Caches news data for improved performance
- Handles user authentication and authorization

## Requirements
- Node.js
- Express.js
- MongoDB

## Installation
1. Clone the repository:
  ```bash
  git clone https://github.com/Leandro096/news-chanllenge.git
  ```
2. Navigate to the server directory:
  ```bash
  cd news-challenge/server
  ```
3. Install dependencies:
  ```bash
  npm install
  ```

## Configuration
1. Create a `.env` file in the server directory and add the following environment variables:
  ```env
  PORT=5555
  MONGODB_URI=your_mongodb_uri
  NEWS_API_KEY=your_news_api_key
  REDIS_URL=your_redis_url
  ```

2. Ensure Redis is installed and running on your machine. You can install Redis by following the instructions on the [official Redis website](https://redis.io/download). (For this project I used local Redis)

3. If you are using a cloud-based Redis service, update the `REDIS_URL` in your `.env` file with the provided connection string.

## Running the Server
Start the server with the following command:
```bash
npm run dev
```
The server will be running on `http://localhost:5555`.

## API Endpoints
- `GET /api/news/everything` - Fetch all news.
- `GET /api/news/top-headlines` - Fetch top-headlines news.
- `POST /api/users/login` - User login
- `POST /api/users` - User registration

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please contact [the.leo113@gmail.com].