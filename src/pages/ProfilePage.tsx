import React from 'react';
import {
  Send, Mic, Calendar, Music, MessageSquare, FileText,
  BrainCircuit, ChevronDown, LogOut, User
} from 'lucide-react';

import AITopBar from '../components/AITopBar';
import AISideNavbar from '../components/AISideNavbar';
import ChatSection from '../components/ChatSection';
import ProfileTopBar from '../components/ProfileTopBar';
import ProfileSideNavbar from '../components/ProfileSideNavbar';
import ProfileTestCard from '../components/ProfileTestCard';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-BG overflow-hidden">
      {/* Fixed ProfileTopBar */}
      <ProfileTopBar />

      {/* Main Content below the fixed TopBar */}
      <div className="flex flex-1 pt-[112px]"> {/* 72px topbar + 40px gap */}
        {/* Side Navbar */}
        <div className="hidden tablet:block">
          <ProfileSideNavbar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 tablet:pr-[340px]">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className='desktop:w-[900px] desktop:h-[145px] tablet:h-[136px] h-[118px] tablet:w-[664px] w-[350px] rounded-[20px] border border-primary-200 bg-primary-50'>

            </div>
            <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[32px] place-items-center mt-10">
              <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />
              <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />

              <ProfileTestCard testName={'آزمون سلامت عمومی (GHQ)'} description={' پرسشنامه سلامت عمومی (GHQ) ابزاری معتبر برای غربالگری سلامت روان است که به شناسایی ناراحتی‌های احساسی و نشانه‌های اولیه مشکلات روانی کمک می‌کند. این آزمون آگاهی فرد را نسبت به وضعیت روانی‌اش افزایش داده و در صورت نیاز، مسیر دریافت حمایت را هموار می‌سازد.'} image={''} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfilePage;
