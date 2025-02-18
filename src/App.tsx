import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.tsx';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage.tsx';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';

function App() {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createPost" element={<CreatePostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;