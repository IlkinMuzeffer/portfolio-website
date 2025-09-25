import { Code, Palette, Zap, Github, Linkedin, Mail, Phone } from 'lucide-react';

export const skills = [
    { name: 'HTML/CSS', icon: Code, color: 'from-orange-400 to-red-500' },
    { name: 'JavaScript', icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: Code, color: 'from-blue-400 to-cyan-500' },
    { name: 'Next.js', icon: Code, color: 'from-gray-700 to-gray-900' },
    { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-400 to-blue-500' },
    { name: 'Redux Toolkit', icon: Code, color: 'from-purple-400 to-pink-500' }
];

export const projects = [
    {
        title: "Dünya Saatları",
        description: "React və API ilə müxtəlif ölkələrin cari vaxtını göstərən interaktiv panel",
        technologies: ["React", "JavaScript", "CSS", "API"],
        gradient: "from-blue-400 to-cyan-600",
        liveLink: "https://world-clocks-for-me.netlify.app/",
        githublink: "https://github.com/IlkinMuzeffer/world-clocks"
    },
    {
        title: "Weather Dashboard",
        description: "Next.js və API inteqrasiyası ilə hava durumu dashboard-u",
        technologies: ["Next.js", "JavaScript", "CSS"],
        gradient: "from-blue-400 to-cyan-600"
    },
    {
        title: "Task Management App",
        description: "React hooks və local storage ilə tapşırıq idarəetmə tətbiqi",
        technologies: ["React", "JavaScript", "Tailwind CSS"],
        gradient: "from-green-400 to-blue-500"
    }
];

export const navItems = [
    { id: 'home', label: 'Ana Səhifə' },
    { id: 'about', label: 'Haqqımda' },
    { id: 'contact', label: 'Əlaqə' }
];

export const contactInfo = {
    phone: '+99455-858-18-45',
    email: 'muzaffarli.ilkin.work@gmail.com'
};

export const socialLinks = [
    { icon: Github, href: '#', title: 'GitHub' },
    { icon: Linkedin, href: '#', title: 'LinkedIn' }
];