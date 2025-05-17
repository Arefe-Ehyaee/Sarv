import { Route, Routes } from 'react-router-dom';
import MainPage from './pages.tsx/MainPage';
import AIChat from './pages.tsx/AIChat';
import ArticlesPage from './pages.tsx/ArticlesPage';
import BDITest from './pages.tsx/BDITest';
import ComingSoon from './pages.tsx/CommingSoon';
import TherapistsPage from './pages.tsx/TherapistsPage';

function App() {
  return (
    <div dir='rtl'>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/sarvBot" element={<AIChat />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/bdiTest" element={<BDITest />} />
        <Route path="/therapists" element={<TherapistsPage />} />

      </Routes>
    </div>
  )
}

export default App;