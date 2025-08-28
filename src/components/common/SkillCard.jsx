import React from 'react';

const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon;

    return (
        <div
            className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} transform hover:scale-110 transition-all duration-300 hover:rotate-6 cursor-pointer group`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <Icon className="w-6 h-6 mx-auto mb-2 group-hover:animate-bounce" />
            <p className="text-xs font-semibold text-center">{skill.name}</p>
        </div>
    );
};

export default SkillCard;