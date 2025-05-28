import React, { useState } from 'react';
import { Send, Mic, Calendar, Music, MessageSquare, FileText, BrainCircuit, ChevronDown, LogOut, User } from 'lucide-react';
import AITopBar from '../components/AITopBar';
import AISideNavbar from '../components/AISideNavbar';
import ChatSection from '../components/ChatSection';

// TypeScript interface for suggested questions
interface SuggestedQuestion {
  id: number;
  text: string;
}

// TypeScript interface for menu items
interface MenuItem {
  id: number;
  text: string;
  icon: React.ReactNode;
}

const AIChat: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary-50 overflow-hidden">
      {/* Fixed AITopBar */}
      <div className="fixed top-0 left-0 right-0 z-0 bg-secondary-50">
        <AITopBar />
      </div>

      <div className="flex flex-1"> {/* Add padding to avoid AITopBar overlap */}
        {/* Side Navbar */}
        <div className="hidden tablet:block">
          <AISideNavbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 tablet:pr-[340px] overflow-y-auto">
          <div className="h-full w-full flex justify-center">
            <ChatSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;