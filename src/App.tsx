// App.jsx
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AIChat from './pages/AIChat';
import ArticlesPage from './pages/ArticlesPage';
import TestTemplate from './pages/TestTemplate';
import GHQPage from './pages/GHQPage';
import TherapistsPage from './pages/TherapistsPage';
import TestsPage from './pages/TestsPage';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import SignUp from './pages/SignUp';
import TestLanding from './pages/TestLanding';
import Article from './pages/Article';
import Test from './pages/Test';
import testCover from "./assets/images/GHQ.png";
import testImage from "./assets/images/159.jpg";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div dir='rtl'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sarvBot" element={<AIChat />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/bdiTest" element={<TestTemplate />} />
            <Route path="/test/:id" element={<TestTemplate />} />
            <Route path="/ghqTest" element={<GHQPage />} />
            <Route path="/therapists" element={<TherapistsPage />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/testLanding" element={<TestLanding />} />
            <Route path="/test" element={
              <Test
                articleImage={testCover}
                heading={'عنوان تست'}
                subHeading={'پرسشنامه سلامت عمومی...'}
                questionsNumber={'28 سوال'}
                category={'سلامت روان'}
                time={'15 دقیقه'}
              />
            } />
<Route path="/articles/:slug" element={<Article />} />



            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;