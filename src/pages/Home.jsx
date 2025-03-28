import React from 'react';

export default function Home() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md space-y-8">
      <div>
        <h2 className="text-4xl font-bold mb-2">안녕하세요!</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          클라우드/인프라 엔지니어 빅창수입니다.
          <br />
          효율적이고 안정적인 시스템 설계를 좋아합니다.
          <br />
          MBTI는 <span className="font-semibold">INFP</span>입니다.
        </p>
      </div>

      <div className="text-gray-700 text-base leading-relaxed space-y-2">
        <p>👨‍💻 개발 외에도 다양한 기술 인프라를 연구하고 자동화하는 걸 좋아해요.</p>
        <p>🚀 최근에는 IaC(Terraform), Helm, GitHub Actions, AWS 기반 아키텍처를 공부 중입니다.</p>
        <p>🧩 다양한 도전과 사이드 프로젝트를 통해 성장 중입니다 :)</p>
      </div>

      <div className="text-gray-800 text-base leading-relaxed space-y-3">
        <h3 className="text-2xl font-semibold mt-6 mb-2">📚 간단한 약력</h3>

        <div>
          <h4 className="font-semibold">🎓 학력</h4>
          <ul className="list-disc list-inside ml-2 text-gray-700">
            <li>신성고등학교 졸업</li>
            <li>동국대학교 서울캠퍼스 - 정보통신공학과 졸업 예정 (2019.03 ~ 2025.08)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mt-3">🎯 동아리 / 대외활동</h4>
          <ul className="list-disc list-inside ml-2 text-gray-700">
            <li>동국대학교 프로그래밍 중앙동아리 CAPS 36기 기획부장</li>
            <li>웹기초/심화 스터디 멘토</li>
            <li>카카오테크 부트캠프 - 클라우드 네이티브 과정 (2025.01 ~ 2025.08)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mt-3">🎵 취미</h4>
          <p className="text-gray-700 ml-2">밴드 활동 중이며 보컬과 기타를 맡고 있어요!</p>
          <p>📦 여가 시간에는 독서하거나 커피 마시면서 뇌정지 상태로 넷플릭스를 봅니다.</p>
        </div>
      </div>
    </section>
  );
}
