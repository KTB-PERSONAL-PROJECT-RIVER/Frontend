import { FormEvent, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 구현
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
              연락하기
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              프로젝트 문의나 협업 제안을 환영합니다. 아래 양식을 통해 연락해주세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">연락처 정보</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">이메일</p>
                    <p className="font-medium text-gray-800">example@email.com</p>
                  </div>
                </div>
                {/* 비슷한 스타일로 전화번호와 위치 정보 추가 */}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>

                {/* 이메일과 메시지 입력 필드도 같은 스타일 적용 */}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 