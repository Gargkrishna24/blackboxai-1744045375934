const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with payment integration, product management, and user authentication.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management system with real-time updates, team assignments, and progress tracking.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;