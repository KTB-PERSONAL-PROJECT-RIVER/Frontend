import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
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
        const res = await fetch('https://riverendingstory.site/api/healthcheck');
    
        if (res.status === 200) {
          const data = await res.text();
          toast.success(`✅ 서버 응답 성공: Result = ${data}`, {
            duration: 3000,
            style: {
              background: '#1e293b',
              color: '#fff',
              fontSize: '0.9rem',
            },
          });
        } else {
          toast.error(`❌ 서버 오류 (상태 코드 ${res.status})`, {
            duration: 4000,
            style: {
              background: '#7f1d1d',
              color: '#fff',
              fontSize: '0.9rem',
            },
          });
        }
      } catch (error) {
        toast.error(`❌ 요청 실패: ${error.message}`, {
          duration: 4000,
          style: {
            background: '#7f1d1d',
            color: '#fff',
            fontSize: '0.9rem',
          },
        });
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
