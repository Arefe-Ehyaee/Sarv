import React, { useState, useEffect } from 'react';
import svgLeft from "../assets/icons/profileBackLeft.svg";
import svgRight from "../assets/icons/profileBackRight.svg";
import ProfileTopBar from '../components/ProfileTopBar';
import ProfileSideNavbar from '../components/ProfileSideNavbar';
import ProfileTestCard from '../components/ProfileTestCard';
import useUserStore from "../store/UserStore";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ProfilePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [testes, setTestes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const token = useUserStore((state) => state.token);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/v1/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setTestes(data.testes || []);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <div className="relative min-h-screen flex flex-col bg-Gray-50 overflow-hidden">
      {/* Background SVGs */}
      <div className="hidden desktop:block pointer-events-none">
        <img src={svgLeft} alt="Background Left" className="fixed left-0 top-[13%] z-0" />
        <img src={svgRight} alt="Background Right" className="fixed right-[14%] top-[23%] z-0" />
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 left-0 z-50 desktop:hidden">
            <ProfileSideNavbar closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </>
      )}

      {/* Top Bar */}
      <div className="relative z-30">
        <ProfileTopBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Main Content */}
      <div className="flex pt-[112px] relative z-10">
        {/* Desktop Sidebar */}
        <div className="hidden desktop:block">
          <ProfileSideNavbar />
        </div>

        {/* Scrollable Content - Centered */}
        <div className="flex-1 h-[calc(100vh-112px)] overflow-y-auto scrollbar-hide desktop:pr-[300px]">
          {/* Centered Container */}
          <div className="w-full mx-auto flex flex-col items-center justify-center px-[40px] tablet:px-[120px]">
            <div className="text-xl font-myPeydaMedium text-center w-full mb-5">
              آزمون‌های انجام شده
            </div>

            {loading ? (
              <div className="text-center font-myVazirSemibold">در حال بارگذاری...</div>
            ) : testes.length === 0 ? (
              <div className="text-center text-gray-500 font-myVazirSemibold">آزمونی یافت نشد.</div>
            ) : (
              <div className="grid grid-cols-1 desktop:grid-cols-2 gap-[30px] w-full place-items-stretch pb-3">
                {testes.map((test, index) => (
                  <ProfileTestCard
                    key={test.id}
                    testName={test.test_type.fa_name + " " + test.test_type.en_name}
                    description={`نمره شما: ${test.score}`}
                    image={''} 
                    score={test.score} 
                    slug={''}                  
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;