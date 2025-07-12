import React, { useState } from 'react';
import {
  Send, Mic, Calendar, Music, MessageSquare, FileText,
  BrainCircuit, ChevronDown, LogOut, User
} from 'lucide-react';
import svgLeft from "../assets/icons/profileBackLeft.svg";
import svgRight from "../assets/icons/profileBackRight.svg";
import ProfileTopBar from '../components/ProfileTopBar';
import ProfileSideNavbar from '../components/ProfileSideNavbar';
import ProfileTestCard from '../components/ProfileTestCard';

const ProfilePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-Gray-50 overflow-hidden">

      <div className="hidden desktop:block">
        {/* Background SVGs */}
        <img
          src={svgLeft}
          alt="Background Left"
          className="absolute left-0 top-[10%] z-0 pointer-events-none"
        />
        <img
                src={svgRight}
                alt="Background Right"
                className="absolute right-[14%] bottom-[20%] z-0 pointer-events-none"
            />
      </div>
      <div className='relative z-10'>
        {/* Fixed ProfileTopBar */}
        <ProfileTopBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Dark Overlay - only show when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content below the fixed TopBar */}
        <div className="flex flex-1 pt-[112px]"> {/* 72px topbar + 40px gap */}
          {/* Side Navbar */}
          {/* Show side nav based on state */}
          {/* Sidebar always visible on desktop, toggled on mobile */}
          <div className="hidden desktop:block">
            <ProfileSideNavbar />
          </div>

          {sidebarOpen && (
            <div className="block desktop:hidden fixed z-30">
              <ProfileSideNavbar closeSidebar={() => setSidebarOpen(false)} />
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1 desktop:pr-[300px] mobile:px-[40px]">
            <div className="w-full flex flex-col items-center justify-center">
              <div className='text-xl font-myPeydaMedium justify-right text-right mb-5'>
                آزمون‌های انجام شده
              </div>

              <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[30px] place-items-center">
                <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />
                <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />

                <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />
                <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />

                <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />

                <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />

                <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;