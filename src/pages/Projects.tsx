interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "프로젝트 관리 시스템",
      description: "React와 TypeScript를 사용한 프로젝트 관리 웹 애플리케이션",
      image: "/project1.jpg",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://project-demo.com"
    },
    {
      id: 2,
      title: "온라인 쇼핑몰",
      description: "Next.js와 Tailwind CSS를 활용한 현대적인 이커머스 플랫폼",
      image: "/project2.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://shop-demo.com"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
              프로젝트
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              최근에 작업한 프로젝트들입니다. 각 프로젝트는 실제 문제를 해결하기 위해 
              최신 기술을 활용하여 개발되었습니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 px-4">
            {projects.map((project) => (
              <div key={project.id} 
                   className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-4">
                        <a href={project.githubUrl} 
                           className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                          GitHub
                        </a>
                        <a href={project.liveUrl} 
                           className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} 
                            className="px-4 py-1.5 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 