interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

interface WorkSectionProps {
  handleNavigation: (id: number) => void;
  projects: Project[];
}

const WorkSection = (props: WorkSectionProps) => {
  const { handleNavigation, projects } = props;

  return (
    <div className="space-y-8 p-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="space-y-4 p-4 border rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <div className="text-xl font-semibold">{project.title}</div>
              <img src={project.imageUrl} alt="Project_Thumbnail" className="w-full h-88 rounded border-2 border-black" />
              <div className="text-gray-700">{project.description}</div>
            </div>
            <div>
              <div className="font-bold">主な使用言語等</div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <div key={tech} className="bg-red-500 text-white px-2 py-1 rounded">
                    {tech}
                  </div>
                ))}
              </div>
              <button onClick={() => handleNavigation(project.id)} className="flex items-center space-x-2 bg-blue-500 text-white border border-blue-500 hover:bg-white hover:text-blue-500 px-4 py-2 rounded-md mt-4">
                <div>開発の詳細はこちら</div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WorkSection };