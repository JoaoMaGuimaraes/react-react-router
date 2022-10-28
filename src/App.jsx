import { React } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

// Import Components
import NavBar from "./shared/components/Navbar/NavBar"

// Import Pages
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";
import NotFound from "./pages/404/404";

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          {/* Set Page Routes */}
          <Route path="home" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />

          {/* Set default page route - home*/}
          <Route path="/" element={<Navigate to ="home" />} />

          {/* Set 404 not found page route */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
