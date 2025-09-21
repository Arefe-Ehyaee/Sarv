import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
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
import TestResult from './pages/TestResult';
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useUserStore from './store/UserStore';
import Chat from './chat/Chat';
import TestChatSection from './chat/TestChatSection';
import DashboardLayout from './components/DashboardLayout';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const queryClient = new QueryClient();
  const [hydrated, setHydrated] = useState(false);

  // ✅ Zustand hydration check
  useEffect(() => {
    const unsub = useUserStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    if (useUserStore.persist.hasHydrated()) {
      setHydrated(true);
    }

    return () => unsub?.();
  }, []);

  if (!hydrated) {
    return <div className="text-center p-10 font-myVazirSemibold">در حال آماده‌سازی برنامه...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div dir="rtl">
        <BrowserRouter>

          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/sarvBot" element={<AIChat />} /> */}
            {/* 🔁 Nested layout with <Outlet> */}
            <Route path="/Bot" element={<Navigate to="/dashboard/Bot" replace />} />

            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="Bot" element={<Chat />} />
              <Route path="ChatTests" element={<TestChatSection />} />
            </Route>

            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/bdiTest" element={<TestTemplate />} />
            <Route path="/ghqTest" element={<GHQPage />} />
            <Route path="/therapists" element={<TherapistsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/articles/:slug" element={<Article />} />
            <Route path="/tests" element={<TestsPage />} />
            <Route path="/tests/:testName" element={<Test />} />
            {/* ✅ Protected Routes */}
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/test/:testName/questions" element={<TestLanding />} />
            <Route path="/test/:testName/result" element={<TestResult />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
