const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">전문 분야</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">클라우드 인프라</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>AWS (EC2, S3, RDS, Lambda)</li>
                  <li>Kubernetes 클러스터 구축</li>
                  <li>마이크로서비스 아키텍처</li>
                  <li>서버리스 아키텍처</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">DevOps</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>CI/CD 파이프라인 구축</li>
                  <li>Docker 컨테이너화</li>
                  <li>Jenkins, GitLab CI</li>
                  <li>모니터링 및 로깅</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">보안</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>네트워크 보안</li>
                  <li>접근 제어</li>
                  <li>보안 감사</li>
                  <li>취약점 분석</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">자동화</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Infrastructure as Code</li>
                  <li>Terraform, CloudFormation</li>
                  <li>Ansible</li>
                  <li>Python 스크립팅</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">경력</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-800">시니어 인프라 엔지니어</h3>
                <p className="text-gray-600">ABC Tech | 2020 - 현재</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>멀티 클라우드 인프라 구축 및 관리</li>
                  <li>Kubernetes 기반 마이크로서비스 아키텍처 설계</li>
                  <li>자동화된 배포 파이프라인 구축</li>
                </ul>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-800">DevOps 엔지니어</h3>
                <p className="text-gray-600">XYZ Systems | 2018 - 2020</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>AWS 인프라 설계 및 구축</li>
                  <li>CI/CD 파이프라인 자동화</li>
                  <li>모니터링 시스템 구축</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 