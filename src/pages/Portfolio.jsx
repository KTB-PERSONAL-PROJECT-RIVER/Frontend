import React from 'react';

export default function Portfolio() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold mb-6">인프라 아키텍처</h2>

      <div className="mb-10">
        <img
          src="/architecture-1.jpg"
          alt="Architecture 1"
          className="rounded-xl shadow-lg w-full max-w-3xl mb-4"
        />
        <p className="text-lg leading-relaxed text-gray-700">
          해당 아키텍처는 텍스트 기반 북카드 생성 서비스로, EKS 클러스터, RDS, Cloudfront 등을 활용해
          고가용성과 확장성을 확보하였습니다.
        </p>
      </div>

      <div>
        <img
          src="/architecture-2.png"
          alt="Architecture 2"
          className="rounded-xl shadow-lg w-full max-w-3xl mb-4"
        />
        <p className="text-lg leading-relaxed text-gray-700">
          해당 아키텍처는 정적 웹 + 백엔드 API 구조로, CloudFront, S3, ALB, EC2 Auto Scaling으로 구성되어
          효율적인 정적 리소스 제공과 API 라우팅을 구현하였습니다.
        </p>
      </div>
    </section>
  );
}
