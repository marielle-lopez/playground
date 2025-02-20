import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.tsx';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage.tsx';
import PostPage from './pages/PostPage/PostPage.tsx';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import PostsContextProvider from './contexts/PostsContextProvider.tsx';

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createPost" element={<CreatePostPage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </PostsContextProvider>
  )
}

export default App;