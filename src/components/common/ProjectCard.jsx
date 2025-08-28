import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div
            className={`p-6 rounded-xl bg-gradient-to-r ${project.gradient} transform hover:scale-105 transition-all duration-300 cursor-pointer`}
        >
            <h4 className="text-xl font-bold mb-2">{project.title}</h4>
            <p className="text-white/90 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;