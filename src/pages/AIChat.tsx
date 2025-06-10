import React, { useState } from 'react';
import AITopBar from '../components/AITopBar';
import AISideNavbar from '../components/AISideNavbar';
import ChatSection from '../components/ChatSection';

const AIChat: React.FC = () => {
  const [bgColor, setBgColor] = useState('green');
  const [collapsed, setCollapsed] = useState(true); // New state

  const bgColorMap: Record<string, string> = {
    blue: 'bg-[#DBECEA]',
    brown: 'bg-[#F2E6D3]',
    red: 'bg-[#FCE4E4]',
    yellow: 'bg-[#F8F4CD]',
    purple: 'bg-[#F8E9FE]',
    green: 'bg-[#E0ECDF]',
  };

  return (
    <div className={`min-h-screen flex flex-col overflow-hidden ${bgColorMap[bgColor] || 'bg-[#E0ECDF]'}`}>
      <div className="fixed top-0 left-0 right-0 z-0">
        <AITopBar />
      </div>

      <div className="flex flex-1">
        <div className="hidden tablet:block">
          <AISideNavbar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <div className="flex-1 overflow-y-auto transition-all duration-300">
          <div className="h-full w-full flex justify-center">
            <ChatSection setBgColor={setBgColor} collapsed={collapsed} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default AIChat;
