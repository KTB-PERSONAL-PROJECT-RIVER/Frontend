const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">기술 스택</h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="font-medium">프론트엔드:</span> 
              React, TypeScript, Next.js, Tailwind CSS
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">백엔드:</span> 
              Node.js, Express, PostgreSQL
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">도구:</span> 
              Git, Docker, AWS
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">경력</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">시니어 프론트엔드 개발자</h3>
              <p className="text-gray-600">ABC 테크 | 2020 - 현재</p>
            </div>
            <div>
              <h3 className="font-medium">웹 개발자</h3>
              <p className="text-gray-600">XYZ 솔루션즈 | 2018 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 