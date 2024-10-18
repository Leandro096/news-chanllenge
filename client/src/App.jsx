import { Route, Routes } from 'react-router-dom'

// Routes
import Navigation from './routes/navigation/navigation.route'
import Home from './routes/home/home.route'
import NewsSection from './routes/news-section/news-section.route'

// Styles
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { checkUserSession } from './store/user/user.action'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/categories/*" element={<NewsSection />} />
      </Route>
    </Routes>
  )
}

export default App
