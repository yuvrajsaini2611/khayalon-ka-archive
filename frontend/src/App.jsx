import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostList from "./components/PostList";
import { Routes, Route } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import AboutPage from "./pages/AboutPage"
import Footer from "./components/Footer";

function App(){
  return(
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;