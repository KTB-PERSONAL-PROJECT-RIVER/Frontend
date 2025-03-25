import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  SiAmazon,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiDocker,
  SiGithubactions
} from 'react-icons/si';

interface SkillCategory {
  name: string;
  items: {
    name: string;
    icon: React.ReactElement;
    level: number;
  }[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const About = () => {
  const skills: SkillCategory[] = [
    {
      name: "클라우드 인프라",
      items: [
        { name: "AWS", icon: <SiAmazon className="text-[#FF9900] w-6 h-6 sm:w-7 sm:h-7" />, level: 90 },
        { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5] w-6 h-6 sm:w-7 sm:h-7" />, level: 85 }
      ]
    },
    {
      name: "CI/CD & DevOps",
      items: [
        { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC] w-6 h-6 sm:w-7 sm:h-7" />, level: 85 },
        { name: "Jenkins", icon: <SiJenkins className="text-[#D24939] w-6 h-6 sm:w-7 sm:h-7" />, level: 80 },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED] w-6 h-6 sm:w-7 sm:h-7" />, level: 85 },
        { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF] w-6 h-6 sm:w-7 sm:h-7" />, level: 80 }
      ]
    }
  ];

  const experiences: Experience[] = [
    {
      title: "시니어 DevOps 엔지니어",
      company: "Example Corp",
      period: "2021 - 현재",
      description: [
        "AWS EKS 기반 마이크로서비스 아키텍처 설계 및 구현",
        "Terraform을 활용한 인프라 자동화 파이프라인 구축",
        "CI/CD 파이프라인 최적화로 배포 시간 50% 단축",
        "클라우드 비용 최적화로 월 30% 비용 절감 달성"
      ]
    },
    {
      title: "클라우드 인프라 엔지니어",
      company: "Tech Solutions Inc",
      period: "2019 - 2021",
      description: [
        "AWS 기반 클라우드 인프라 설계 및 마이그레이션",
        "컨테이너 오케스트레이션 플랫폼 구축",
        "모니터링 및 로깅 시스템 구축",
        "장애 대응 및 트러블슈팅 프로세스 수립"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            소개
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">About Me</h1>
          <p className="text-lg sm:text-xl text-gray-600">클라우드 및 DevOps 전문가</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 왼쪽: 기술 + 소셜 */}
          <div className="space-y-8">
            {/* 기술 스택 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">기술 스택</h2>
              <div className="space-y-6">
                {skills.map((category, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">{category.name}</h3>
                    <div className="space-y-4">
                      {category.items.map((skill, j) => (
                        <div key={j}>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="w-6 h-6">{skill.icon}</span>
                            <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                            <span className="ml-auto text-xs text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 소셜 미디어 */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">소셜 미디어</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                >
                  <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 group-hover:text-blue-600 transition" />
                  <div>
                    <p className="text-base font-medium text-gray-900">GitHub</p>
                    <p className="text-sm text-gray-600">@example</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                >
                  <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 text-[#0A66C2] group-hover:text-blue-700 transition" />
                  <div>
                    <p className="text-base font-medium text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-600">@example</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* 오른쪽: 경력 */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">경력 사항</h2>
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white" />
                  <div className="space-y-2">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      <p className="text-xs text-gray-500">{exp.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
