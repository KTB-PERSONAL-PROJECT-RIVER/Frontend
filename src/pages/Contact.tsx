import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiAmazon, SiKubernetes, SiTerraform, SiJenkins } from 'react-icons/si';

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    icon: <SiAmazon className="text-[#FF9900]" />,
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Certified Kubernetes Administrator",
    icon: <SiKubernetes className="text-[#326CE5]" />,
    issuer: "CNCF",
    date: "2023"
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    icon: <SiTerraform className="text-[#7B42BC]" />,
    issuer: "HashiCorp",
    date: "2022"
  },
  {
    name: "Jenkins Certified Engineer",
    icon: <SiJenkins className="text-[#D24939]" />,
    issuer: "CloudBees",
    date: "2022"
  }
];

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            연락처
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Contact</h1>
          <p className="text-lg sm:text-xl text-gray-600">언제든 연락주시면 답변드리겠습니다</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">연락처 정보</h2>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <FaEnvelope className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">이메일</p>
                    <p className="text-base font-medium text-gray-900">contact@example.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">위치</p>
                    <p className="text-base font-medium text-gray-900">서울특별시</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">소셜 미디어</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://github.com/example" className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <FaGithub className="w-6 h-6 text-gray-800" />
                  <div>
                    <p className="text-base font-medium text-gray-900">GitHub</p>
                    <p className="text-sm text-gray-600">@example</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/example" className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />
                  <div>
                    <p className="text-base font-medium text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-600">@example</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">자격증 및 인증</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
                  <div className="p-2 bg-white rounded-md shadow-sm">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
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

export default Contact;
