export default function Projects() {
    const projects = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive portfolio built with Next.js & Tailwind CSS.",
        image: "/project3.png",
        link: "#",
      },
      {
        id: 2,
        title: "WebSMK Negeri 1 Denpasar",
        description: "An online shopping platform with modern UI/UX.",
        image: "/project1.png",
        link: "https://web-skensa-b5cqlljv2-aditlexs-projects.vercel.app/",
      },
      {
        id: 3,
        title: "WebJurusan DPIB",
        description: "A powerful dashboard for managing data efficiently.",
        image: "/project2.png",
        link: "https://kelmpok6-xirpl-2-ng68.vercel.app/",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-8 mt-20">My Projects 🚀</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 mt-2 inline-block hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  