// src/chat/TestChatSection.tsx
import React from 'react';
import ProfileTestCard from '../components/ProfileTestCard';
import { useOutletContext } from 'react-router-dom';

type ContextType = {
  setBgColor: (color: string) => void;
  collapsed: boolean;
};

const TestChatSection: React.FC = () => {
  const { setBgColor, collapsed } = useOutletContext<ContextType>();

  return (
    <div className={`flex flex-col h-screen max-w-4xl w-full mx-auto px-4 transition-all duration-300 ${collapsed ? 'mx-auto' : ' ml-[80px]'}`}>
      <div className="overflow-y-auto pt-[150px] hide-scrollbar">
        <ProfileTestCard
          testName={'نلم'}
          description={'یثسیبشثسیب'}
          score={0}
          slug={''}
          test_en_name={''} image={''} onViewResult={function (): void {
            throw new Error('Function not implemented.');
          } }        />
      </div>
    </div>
  );
};

export default TestChatSection;
