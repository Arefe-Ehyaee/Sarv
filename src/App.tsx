import { Route, Routes } from 'react-router-dom';
import MainPage from './pages.tsx/MainPage';
import AIChat from './components/AIChat';

function App() {
  return (
    <div dir='rtl'>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/sarvBot" element={<AIChat />} />
        </Routes>
    </div>
  )
}

export default App;