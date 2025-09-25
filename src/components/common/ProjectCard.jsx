import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div
            className={`p-6 rounded-xl bg-gradient-to-r ${project.gradient} transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
        >
            <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
            <p className="text-white/90 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm text-white"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex gap-3 mt-4">
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 text-white font-medium"
                    >
                        <ExternalLink size={16} />
                        Canlı Baxış
                    </a>
                )}

                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 text-white font-medium"
                    >
                        <Github size={16} />
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;