import React, { useState } from 'react';
import { Send, Mic, Calendar, Music, MessageSquare, FileText, BrainCircuit, ChevronDown, LogOut, User } from 'lucide-react';
import TopBar from './TopBar';
import SideNavbar from './SideNavbar';

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
    <div className="min-h-screen flex flex-col overflow-hidden">
      <TopBar></TopBar>
      <div className="flex flex-1">
        <SideNavbar></SideNavbar>
        <div className="flex flex-1 flex-col mr-[272px] bg-background-550 px-8 calc(100vh - 4rem) ">
          {/* top Section */}
          <div className="flex-1">

          </div>



        </div>
      </div>
    </div>
  );
};

export default AIChat;