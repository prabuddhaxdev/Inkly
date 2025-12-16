import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostListPage from "./pages/PostList";
import WritePage from "./pages/Write";
import SinglePostPage from "./pages/SinglePost";
import MainLayout from "./layouts/MainLayout";


function App() {
  return (
    <div className="px-4 md:px-4 lg:px-7 xl:px-10 2xl:px-20">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/:slug" element={<SinglePostPage />} />
          <Route path="/write" element={<WritePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
