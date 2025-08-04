import React, { useState } from 'react';
import ChatChatSection from './ChatChatSection';
import ChatTopBar from './ChatTopBar';
import ChatSideNavbar from './ChatSideNavbar';

const Chat: React.FC = () => {
  const [bgColor, setBgColor] = useState('green');
  const [collapsed, setCollapsed] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);


  return (
    <div className={`min-h-screen flex flex-col overflow-hidden bg-[#ECFAE5]`}>
      <div className="fixed top-0 left-0 right-0 z-10">
        <ChatTopBar 
          mobileNavOpen={mobileNavOpen} 
          setMobileNavOpen={setMobileNavOpen} 
        />
      </div>

      <div className="flex flex-1 pt-0">
        {/* Desktop sidebar - always visible on tablet+ */}
        <div className="hidden tablet:block">
          <ChatSideNavbar 
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
              <ChatSideNavbar 
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
            <ChatChatSection setBgColor={setBgColor} collapsed={collapsed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;