import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const ContactCard: React.FC = () => {
  return (
    <div id='contact'>
        <h2 className="text-2xl font-bold mb-2 text-center">Check out my socials below! ✨</h2>
        <div className="bg-transparent border p-8 rounded-lg shadow-lg text-white w-full md:max-w-4xl mx-auto mt-8 cc-bg blur-background w-4/5">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Nahidul Islam Siam</h2>
                    <p className="text-sm mb-4">Junior Front-End Developer</p>
                    <button className="bg-inherit border text-purple-200 px-4 py-2 rounded shadow hover:bg-gray-100 hover:text-black transition-colors duration-200">
                        <Link href='https://drive.google.com/file/d/1oTGujjiuwF4O9Ok1rKrIv598nItsQhQH/view?usp=sharing' target='_blank'>
                            Resume
                        </Link>
                    </button>
                </div>

                <div className="flex space-x-4">
                    <a href="https://github.com/Nahidul-Islam-Siam/" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FaGithub size={44} />
                    </a>
                    <a href="https://www.linkedin.com/in/nahidul-islam-siam/" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FaLinkedin size={44} />
                    </a>
                    <a href="https://www.facebook.com/nahidulislam.siam.39" target="_blank" rel="noreferrer" className="hover:text-gray-200">
                        <FaFacebook size={44} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactCard;
