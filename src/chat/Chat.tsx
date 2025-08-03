import React, { useState } from 'react';
import AITopBar from '../components/AITopBar';
import AISideNavbar from '../components/AISideNavbar';
import ChatSection from '../components/ChatSection';

const Chat: React.FC = () => {
  const [bgColor, setBgColor] = useState('green');
  const [collapsed, setCollapsed] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
      <div className="fixed top-0 left-0 right-0 z-10">
        <AITopBar 
          mobileNavOpen={mobileNavOpen} 
          setMobileNavOpen={setMobileNavOpen} 
        />
      </div>

      <div className="flex flex-1 pt-0">
        {/* Desktop sidebar - always visible on tablet+ */}
        <div className="hidden tablet:block">
          <AISideNavbar 
            collapsed={collapsed} 
            setCollapsed={setCollapsed}
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
        </div>

        {/* Mobile sidebar - overlay on mobile/tablet when menu is clicked */}
        {mobileNavOpen && (
          <>
            {/* Overlay backdrop for mobile */}
            <div 
              className="tablet:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={() => setMobileNavOpen(false)}
            />
            
            {/* Mobile sidebar */}
            <div className="tablet:hidden fixed inset-y-0 left-0 z-40 w-[340px]">
              <AISideNavbar 
                collapsed={false} 
                setCollapsed={() => {}}
                mobileNavOpen={mobileNavOpen}
                setMobileNavOpen={setMobileNavOpen}
              />
            </div>
          </>
        )}

        {/* Main content area that adjusts based on sidebar */}
        <div 
          className={`flex-1 flex justify-center transition-all duration-300 ${
            collapsed 
              ? 'tablet:mr-[80px]' 
              : 'tablet:mr-[340px]'
          }`}
        >
          <div className="w-full max-w-4xl">
            <ChatSection setBgColor={setBgColor} collapsed={collapsed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;