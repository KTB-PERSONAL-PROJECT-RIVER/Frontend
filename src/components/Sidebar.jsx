import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderKanban, Mail, Server } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all font-medium ${
      isActive(path) ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-gray-700'
    }`;

  const handlePing = async () => {
    try {
      const response = await fetch('https://riverendingstory.site/api/ping');
      const data = await response.text();
      alert(`✅ 서버 응답: ${data}`);
    } catch (error) {
      alert(`❌ API 호출 실패: ${error.message}`);
    }
  };

  return (
    <aside className="w-64 bg-gray-900 text-white fixed h-full p-6 shadow-2xl z-10 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-10">Infra Portfolio</h1>
        <nav className="flex flex-col space-y-3">
          <Link to="/" className={linkClass('/')}>
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/portfolio" className={linkClass('/portfolio')}>
            <FolderKanban size={20} />
            <span>Portfolio</span>
          </Link>
          <Link to="/contact" className={linkClass('/contact')}>
            <Mail size={20} />
            <span>Contact</span>
          </Link>
        </nav>
      </div>

      <button
        onClick={handlePing}
        className="mt-6 flex items-center space-x-2 px-4 py-3 rounded-xl bg-gray-800 hover:bg-blue-600 transition text-sm"
      >
        <Server size={18} />
        <span>API 연결 테스트</span>
      </button>
    </aside>
  );
}
