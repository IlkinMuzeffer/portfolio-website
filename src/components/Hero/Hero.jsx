import React from 'react';
import SkillCard from '../common/SkillCard';
import { skills } from '../../data/constants';

const Hero = ({ scrollToSection }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>

            <div className="text-center z-10 px-4">
                <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                        Müzəffər İlkin
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                        Front-end Developer
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                        Step IT Akademiyasını bitirmiş front-end developer. Modern texnologiyalar ilə
                        yaradıcı və funksional veb həllər yaradıram.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
                    >
                        Haqqımda
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-3 border border-cyan-500 rounded-full font-semibold hover:bg-cyan-500 transition-all duration-300 hover:scale-105"
                    >
                        Əlaqə
                    </button>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;