import React, { useState } from 'react';
import { Send, Mic, Calendar, Music, MessageSquare, FileText, BrainCircuit, ChevronDown, LogOut, User } from 'lucide-react';
import TopBar from '../components/TopBar';
import SideNavbar from '../components/SideNavbar';
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
    <div className="min-h-screen flex flex-col overflow-hidden bg-secondary-50">
      <TopBar />

      <div className="flex flex-1">
        {/* Side Navbar */}
        <div className="hidden tablet:block">
          <SideNavbar />
        </div>

        {/* Main content area */}
        <div className="flex-1 tablet:pr-[340px]">
          <div className="h-full w-full flex justify-center">
            <ChatSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;