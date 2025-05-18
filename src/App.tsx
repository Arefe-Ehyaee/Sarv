import { Route, Routes } from 'react-router-dom';
import MainPage from './pages.tsx/MainPage';
import AIChat from './pages.tsx/AIChat';
import ArticlesPage from './pages.tsx/ArticlesPage';
import BDITest from './pages.tsx/BDITest';
import ComingSoon from './pages.tsx/CommingSoon';
import TherapistsPage from './pages.tsx/TherapistsPage';
import Article from './pages.tsx/Article';
import test from "./assets/images/159.jpg"

function App() {
  return (
    <div dir='rtl'>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/sarvBot" element={<AIChat />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/bdiTest" element={<BDITest />} />
        <Route path="/therapists" element={<TherapistsPage />} />
        <Route path="/article" element={<Article articleImage={test} heading={'عنوان مقاله'} subHeading={'راهکارهای ساده اما مؤثر برای داشتن ذهنی آرام‌تر در دنیای پرمشغله امروز'} date={'1 خرداد 1404'} category={'سلامت روان'} time={'10 دقیقه'} />} />
      </Routes>
    </div>
  )
}

export default App;