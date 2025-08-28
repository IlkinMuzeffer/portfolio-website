import React from 'react';
import ProjectCard from '../common/ProjectCard';
import { skills, projects } from '../../data/constants';

const About = () => {
    return (
        <section id="about" className="py-20 bg-black/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Haqqımda
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Mənim Hekayəm</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Step IT Akademiyasında front-end development sahəsində təhsilimi bitirərək,
                            müasir veb texnologiyalarında dərin biliklər əldə etmişəm.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            HTML, CSS, JavaScript əsaslarından başlayaraq React, Next.js və Redux Toolkit
                            kimi müasir framework-ləri öyrənmişəm. Hər proyektdə yaradıcı həllər tapmağa
                            və istifadəçi təcrübəsini yaxşılaşdırmağa çalışıram.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-sm font-semibold hover:scale-105 transition-transform cursor-pointer`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6 text-purple-400">Nümunə Proyektlər</h3>
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;