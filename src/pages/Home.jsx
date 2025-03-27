import React from 'react';

export default function Home() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md space-y-6">
      <div>
        <h2 className="text-4xl font-bold mb-2">안녕하세요!</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          클라우드/인프라 엔지니어입니다.
          <br />
          효율적이고 안정적인 시스템 설계를 좋아합니다.
          <br />
          MBTI는 <span className="font-semibold">INFP</span>입니다.
        </p>
      </div>

      <div className="text-gray-700 text-base leading-relaxed">
        <p>👨‍💻 개발 외에도 다양한 기술 인프라를 연구하고 자동화하는 걸 좋아해요.</p>
        <p>🚀 최근에는 IaC(Terraform), Helm, GitHub Actions, AWS 기반 아키텍처를 공부 중입니다.</p>
        <p>📦 여가 시간에는 독서하거나 커피 마시면서 뇌정지 상태로 넷플릭스를 봅니다.</p>
        <p>🧩 다양한 도전과 사이드 프로젝트를 통해 성장 중입니다 :)</p>
      </div>
    </section>
  );
}
