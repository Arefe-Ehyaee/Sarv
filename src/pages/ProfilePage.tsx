import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import svgLeft from "../assets/icons/profileBackLeft.svg";
import svgRight from "../assets/icons/profileBackRight.svg";
import ProfileTopBar from '../components/ProfileTopBar';
import ProfileSideNavbar from '../components/ProfileSideNavbar';
import ProfileTestCard from '../components/ProfileTestCard';
import useUserStore from "../store/UserStore";
import { useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const fetchProfile = async (token: string) => {
  const res = await fetch(`${BASE_URL}/api/v1/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
};

const ProfilePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const token = useUserStore((state) => state.token);

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['profile', token],
    queryFn: () => fetchProfile(token!),
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();
  const testes = data?.testes || [];

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

            {isLoading ? (
              <div className="text-center font-myVazirSemibold">در حال بارگذاری...</div>
            ) : error ? (
              <div className="text-center text-red-500 font-myVazirSemibold">
                خطا در بارگذاری اطلاعات پروفایل
              </div>
            ) : testes.length === 0 ? (
              <div className="text-center text-gray-500 font-myVazirSemibold">آزمونی یافت نشد.</div>
            ) : (
              <div className="grid grid-cols-1 gap-[30px] w-full place-items-stretch pb-3">
                {testes.map((test: any) => {
                  const testResult = {
                    score: test.score,
                    message: test.message || "", // if available from backend
                    type: test.test_type.slug || test.test_type.en_name?.toLowerCase(),
                  };

                  return (
                    <ProfileTestCard
                      key={test.id}
                      testName={`${test.test_type.fa_name} ${test.test_type.en_name}`}
                      test_en_name={test.test_type.en_name}
                      description={`نمره شما: ${test.score}`}
                      image={''}
                      score={test.score}
                      slug={''}
                      onViewResult={() =>
                        navigate(`/test/${encodeURIComponent(testResult.type)}/result`, {
                          state: testResult,
                        })
                      }
                    />
                  );
                })}

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
