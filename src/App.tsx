import { Route, Routes } from 'react-router-dom';
import MainPage from './pages.tsx/MainPage';
import AIChat from './pages.tsx/AIChat';
import ArticlesPage from './pages.tsx/ArticlesPage';
import BDITest from './pages.tsx/BDITest';
import ComingSoon from './pages.tsx/CommingSoon';
import TherapistsPage from './pages.tsx/TherapistsPage';
import Article from './pages.tsx/Article';
import test from "./assets/images/159.jpg"
import TestsPage from './pages.tsx/TestsPage';
import Test from './pages.tsx/Test';
import testCover from "./assets/images/GHQ.png"
import TestTemplate from './pages.tsx/TestTemplate';
import GHQPage from './pages.tsx/GHQPage';
import Login from './pages.tsx/Login';

function App() {
  return (
    <div dir='rtl'>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/sarvBot" element={<AIChat />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/bdiTest" element={<TestTemplate />} />
        <Route path="/ghqTest" element={<GHQPage />} />
        <Route path="/therapists" element={<TherapistsPage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test articleImage={testCover} heading={'عنوان تست'} subHeading={'پرسشنامه سلامت عمومی اولـین بـار توسـط گلـدبرگ تنظــیم گردیــد. در اين مجموعه  فرم ۲۸ سوالي آن ارائه گرديده است. سئوالات ۱-۷  مربوط به مقياس علائم جسماني و وضعيت سلامت عمومي مي باشد. از سوال ۸-۱۴ مربوط به مقياس اضطراب، از سئوال ۱۵-۲۱ مربوط به مقياس اختلال عملكرد اجتماعي، و سئوالات ۲۲-۲۸ نيز مربوط به مقياس افسردگي مي باشند'} questionsNumber={'28 سوال'} category={'سلامت روان'} time={'15 دقیقه'} />} />
        <Route path="/article" element={<Article articleImage={test} heading={'عنوان مقاله'} subHeading={'راهکارهای ساده اما مؤثر برای داشتن ذهنی آرام‌تر در دنیای پرمشغله امروز'} date={'1 خرداد 1404'} category={'سلامت روان'} time={'10 دقیقه'} />} />
      </Routes>
    </div>
  )
}

export default App;