const Projects = () => {
  const projects = [
    {
      title: "멀티 클라우드 인프라 구축",
      description: "AWS와 GCP를 활용한 하이브리드 클라우드 인프라 구축 프로젝트",
      technologies: ["AWS", "GCP", "Terraform", "Kubernetes"],
      image: "/projects/multi-cloud.png",
      link: "https://github.com/example/multi-cloud"
    },
    {
      title: "자동화된 CI/CD 파이프라인",
      description: "Jenkins와 GitLab CI를 활용한 자동화된 배포 파이프라인 구축",
      technologies: ["Jenkins", "GitLab CI", "Docker", "AWS"],
      image: "/projects/cicd.png",
      link: "https://github.com/example/cicd-pipeline"
    },
    {
      title: "마이크로서비스 아키텍처",
      description: "Kubernetes 기반의 마이크로서비스 아키텍처 설계 및 구현",
      technologies: ["Kubernetes", "Docker", "Istio", "Prometheus"],
      image: "/projects/microservices.png",
      link: "https://github.com/example/microservices"
    },
    {
      title: "보안 인프라 구축",
      description: "AWS WAF와 Security Hub를 활용한 보안 인프라 구축",
      technologies: ["AWS WAF", "Security Hub", "CloudWatch", "IAM"],
      image: "/projects/security.png",
      link: "https://github.com/example/security-infra"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">인프라 프로젝트</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 