import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">내 포트폴리오</Link>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-600">홈</Link>
            <Link to="/about" className="hover:text-blue-600">소개</Link>
            <Link to="/projects" className="hover:text-blue-600">프로젝트</Link>
            <Link to="/contact" className="hover:text-blue-600">연락처</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 