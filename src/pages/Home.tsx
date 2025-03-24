import { useState } from 'react';

const Home = () => {
  const [apiStatus, setApiStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const testApiConnection = async () => {
    setIsLoading(true);
    setApiStatus('');
    
    try {
      const response = await fetch('https://riverendingstory.site/api/healthcheck');
      if (response.status === 200) {
        setApiStatus('api가 성공적으로 연결되었습니다!');
      } else {
        setApiStatus('API 연결에 실패했습니다.');
      }
    } catch (error) {
      setApiStatus('API 연결 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          <div className="md:w-1/2 space-y-6 max-w-xl">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              👋 환영합니다
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
              프론트엔드 개발자
            </h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              홍길동입니다
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              사용자 경험을 중요시하며, 모던 웹 기술을 활용한 웹 애플리케이션 개발에 열정을 가지고 있습니다.
              <span className="block mt-4">창의적인 문제 해결과 효율적인 코드 작성을 추구합니다.</span>
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                프로젝트 보기
              </button>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all">
                이력서 다운로드
              </button>
            </div>
            
            <div className="mt-8 space-y-4">
              <button 
                onClick={testApiConnection}
                disabled={isLoading}
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>테스트 중...</span>
                  </div>
                ) : 'API 연결 테스트'}
              </button>
              
              {apiStatus && (
                <div className={`p-4 rounded-lg ${
                  apiStatus.includes('성공') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {apiStatus}
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/2 max-w-xl">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-lg opacity-30"></div>
              <img 
                src="/profile-image.jpg" 
                alt="프로필 이미지" 
                className="relative rounded-xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 