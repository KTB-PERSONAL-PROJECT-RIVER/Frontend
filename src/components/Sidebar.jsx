import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderKanban, Mail, Server } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `flex flex-col items-center gap-1 text-xs sm:text-base sm:flex-row sm:gap-2 px-3 py-2 rounded-lg transition-all font-medium ${
      isActive(path) ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700 text-gray-300'
    }`;

  const handlePing = async () => {
    try {
      const res = await fetch('https://riverendingstory.site/api/healthcheck');
      if (res.status === 200) {
        const data = await res.text();
        toast.success(`✅ 서버 응답: ${data}`);
      } else {
        toast.error(`❌ 서버 오류: ${res.status}`);
      }
    } catch (err) {
      toast.error(`❌ 요청 실패: ${err.message}`);
    }
  };

  return (
    <nav
      className={`
        bg-gray-900 text-white shadow-2xl z-10
        flex sm:flex-col
        sm:w-64 sm:h-full sm:fixed sm:p-6
        w-full h-16 fixed bottom-0 p-2 justify-around items-center
      `}
    >
      {/* 로고 - PC에서만 표시 */}
      <div className="hidden sm:block text-2xl font-bold mb-10">CS Park Portfolio</div>

      {/* 메뉴 + 버튼 묶음 */}
      <div className="flex sm:flex-col gap-4 sm:gap-4 sm:w-full">
        <Link to="/" className={linkClass('/')}>
          <Home size={20} />
          <span className="hidden sm:inline">Home</span>
        </Link>
        <Link to="/portfolio" className={linkClass('/portfolio')}>
          <FolderKanban size={20} />
          <span className="hidden sm:inline">Portfolio</span>
        </Link>
        <Link to="/contact" className={linkClass('/contact')}>
          <Mail size={20} />
          <span className="hidden sm:inline">Contact</span>
        </Link>
        <button onClick={handlePing} className={linkClass('/api')}>
          <Server size={20} />
          <span className="hidden sm:inline">API Test</span>
        </button>
      </div>
    </nav>
  );
}
