import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiAmazon, SiKubernetes, SiTerraform, SiJenkins, SiDocker, SiGooglecloud, SiGitlab
} from 'react-icons/si';

const projectData = [
  {
    title: "KTB BookSnap",
    description: "클라우드 네이티브 환경에서 운영되는 도서 관리 시스템. AWS EKS, Terraform, Jenkins 기반으로 CI/CD 자동화와 고가용성 인프라 구현.",
    image: "/images/booksnap-preview.jpg",
    technologies: [
      { name: "AWS", icon: <SiAmazon className="w-5 h-5 text-[#FF9900]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="w-5 h-5 text-[#326CE5]" /> },
      { name: "Terraform", icon: <SiTerraform className="w-5 h-5 text-[#7B42BC]" /> },
      { name: "Jenkins", icon: <SiJenkins className="w-5 h-5 text-[#D24939]" /> }
    ],
    github: "https://github.com/example/ktb-booksnap",
    demo: "https://booksnap.example.com"
  },
  {
    title: "멀티 클라우드 인프라",
    description: "AWS와 GCP를 연결한 하이브리드 클라우드 아키텍처 구현. Cross-cloud 네트워킹과 관리 자동화 중심의 프로젝트.",
    image: "/images/multi-cloud-arch.jpg",
    technologies: [
      { name: "AWS", icon: <SiAmazon className="w-5 h-5 text-[#FF9900]" /> },
      { name: "GCP", icon: <SiGooglecloud className="w-5 h-5 text-[#4285F4]" /> },
      { name: "Terraform", icon: <SiTerraform className="w-5 h-5 text-[#7B42BC]" /> },
    ],
    github: "https://github.com/example/multi-cloud",
    demo: "https://demo.example.com/multi-cloud"
  },
  {
    title: "CI/CD 파이프라인 자동화",
    description: "GitLab CI와 Jenkins를 연동하여 완전 자동화된 빌드/테스트/배포 파이프라인 구현. Docker 기반 컨테이너 환경.",
    image: "/images/cicd-pipeline.jpg",
    technologies: [
      { name: "GitLab CI", icon: <SiGitlab className="w-5 h-5 text-[#FC6D26]" /> },
      { name: "Jenkins", icon: <SiJenkins className="w-5 h-5 text-[#D24939]" /> },
      { name: "Docker", icon: <SiDocker className="w-5 h-5 text-[#2496ED]" /> }
    ],
    github: "https://github.com/example/cicd-pipeline",
    demo: "https://demo.example.com/cicd"
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            프로젝트
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">클라우드 & DevOps 프로젝트</h1>
          <p className="text-lg sm:text-xl text-gray-600">주요 인프라 구축 및 자동화 사례</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <div className="aspect-w-16 aspect-h-9">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 font-medium">
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" className="flex items-center gap-2 text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
