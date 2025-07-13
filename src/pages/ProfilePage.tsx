import React, { useState } from 'react';
import svgLeft from "../assets/icons/profileBackLeft.svg";
import svgRight from "../assets/icons/profileBackRight.svg";
import ProfileTopBar from '../components/ProfileTopBar';
import ProfileSideNavbar from '../components/ProfileSideNavbar';
import ProfileTestCard from '../components/ProfileTestCard';

const ProfilePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-Gray-50 overflow-hidden">
      {/* Background SVGs - fixed */}
      <div className="hidden desktop:block pointer-events-none">
        <img
          src={svgLeft}
          alt="Background Left"
          className="fixed left-0 top-[13%] z-0"
        />
        <img
          src={svgRight}
          alt="Background Right"
          className="fixed right-[14%] top-[23%] z-0"
        />
      </div>

      {/* Overlay and mobile sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 left-0 z-50 desktop:hidden">
            <ProfileSideNavbar closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </>
      )}

      {/* TopBar always on top */}
      <div className="relative z-30">
        <ProfileTopBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Main content area */}
      <div className="flex pt-[112px] relative z-10">
        {/* Desktop Sidebar */}
        <div className="hidden desktop:block">
          <ProfileSideNavbar />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 h-[calc(100vh-112px)] overflow-y-auto scrollbar-hide desktop:pr-[300px] mobile:px-[40px]">
          <div className="w-full flex flex-col items-center justify-center">
            <div className='text-xl font-myPeydaMedium text-center w-full mb-5'>
              آزمون‌های انجام شده
            </div>

            <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[30px] place-items-center pb-3">
              {Array.from({ length: 7 }).map((_, index) => (
                <ProfileTestCard
                  key={index}
                  testName={'آزمون سلامت عمومی (GHQ)'}
                  description={'پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'}
                  image={''}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
