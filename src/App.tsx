import { Route, Routes } from 'react-router-dom';
import MainPage from './pages.tsx/MainPage';
import AIChat from './pages.tsx/AIChat';
import ArticlesPage from './pages.tsx/ArticlesPage';

function App() {
  return (
    <div dir='rtl'>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/sarvBot" element={<AIChat />} />
        <Route path="/articles" element={<ArticlesPage />} />
      </Routes>
    </div>
  )
}

export default App;