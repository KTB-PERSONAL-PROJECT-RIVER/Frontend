import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Home = () => {
  const [healthStatus, setHealthStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const checkHealth = async () => {
    try {
      setLoading(true);
      setHealthStatus(null);

      const res = await fetch('https://riverendingstory/api/healthcheck');
      if (!res.ok) throw new Error('응답 실패');

      const data = await res.json();
      setHealthStatus(`✅ 서버 응답: ${data.message || '정상입니다.'}`);
    } catch (err) {
      setHealthStatus('❌ 서버 연결 실패');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            인프라 엔지니어 포트폴리오
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">KTB BookSnap</h1>
          <p className="text-lg sm:text-xl text-gray-600">클라우드 네이티브 도서 관리 시스템</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">프로젝트 개요</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              KTB BookSnap은 최신 클라우드 기술을 활용한 북카드 생성 서비스입니다.
              AWS의 다양한 서비스들을 이용해 고가용성과 확장성을 갖춘 인프라를 구축했습니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Kubernetes", "Terraform", "CI/CD"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">주요 링크</h2>
            <div className="space-y-4">
              <a href="https://github.com/KTB-BookSnap" className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <FaGithub className="w-6 h-6 text-gray-800" />
                <div>
                  <p className="text-base font-medium text-gray-900">GitHub Repository</p>
                  <p className="text-sm text-gray-600">소스 코드 확인하기</p>
                </div>
              </a>
              <a href="https://booksnap.example.com" className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <FaExternalLinkAlt className="w-6 h-6 text-gray-800" />
                <div>
                  <p className="text-base font-medium text-gray-900">Live Demo</p>
                  <p className="text-sm text-gray-600">실제 서비스 체험하기</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">인프라 아키텍처</h2>
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <img src="/images/ktb-booksnap-arch.jpg" alt="인프라 다이어그램" className="object-contain w-full h-full" />
          </div>
          <ul className="space-y-2 text-gray-700 text-base">
            <li><strong>컨테이너 오케스트레이션:</strong> Amazon EKS</li>
            <li><strong>서버리스 컴퓨팅:</strong> AWS Lambda</li>
            <li><strong>데이터베이스:</strong> RDS (PostgreSQL), ElastiCache</li>
            <li><strong>스토리지:</strong> Amazon S3</li>
            <li><strong>CDN:</strong> Amazon CloudFront</li>
          </ul>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 text-center space-y-4">
  <h2 className="text-2xl font-semibold text-gray-900">백엔드 연결 테스트</h2>
  <p className="text-gray-600">아래 버튼을 눌러 백엔드 서버의 상태를 확인해보세요.</p>

  <button
    onClick={checkHealth}
    disabled={loading}
    className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
  >
    {loading ? '확인 중...' : '헬스 체크'}
  </button>

  {healthStatus && (
    <div className="mt-4 text-sm text-gray-800">{healthStatus}</div>
  )}
</div>
    </section>
  );
};

export default Home;
