import React from 'react';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';
import { contactInfo, socialLinks } from '../../data/constants';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Əlaqə
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-12"></div>

                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Layihələriniz üçün əməkdaşlıq etməyə hazıram. Mənimlə əlaqə saxlayın!
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <a
                        href={`tel:${contactInfo.phone}`}
                        className="flex items-center justify-center p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                    >
                        <Phone className="w-6 h-6 mr-3" />
                        <div className="text-left">
                            <p className="font-semibold">Telefon</p>
                            <p className="text-white/90">{contactInfo.phone}</p>
                        </div>
                    </a>

                    <a
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    >
                        <Mail className="w-6 h-6 mr-3" />
                        <div className="text-left">
                            <p className="font-semibold">Email</p>
                            <p className="text-white/90">{contactInfo.email}</p>
                        </div>
                    </a>
                </div>

                <div className="flex justify-center space-x-6">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.title}
                                href={social.href}
                                className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg"
                                title={social.title}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Contact;