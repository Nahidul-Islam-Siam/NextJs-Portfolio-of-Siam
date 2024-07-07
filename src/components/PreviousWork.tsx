import React from 'react';

const PreviousWork: React.FC = () => {
  const projects = [
    {
      title: 'WorkTrack',
      description: 'This Project is for a Employee Management Website. Here different routes Admin, HR and Employee. Easch have different Routes',
      imageUrl: 'https://i.postimg.cc/KvN5LyMq/untitled.png',
      caseStudyUrl: '#',
      liveLink: 'https://worktrack-employee-management.netlify.app/',
      githubLink: 'https://github.com/Nahidul-Islam-Siam/WorkTrack-Client',
      technologies: ['React', 'Node.js', 'Express','NextJs','MongoDB','etc']
    },
    {
      title: 'SAM Blog',
      description: 'SaaS company built in the sneaker reselling industry consisting of tools to simplify user experience and increase efficiency.',
      imageUrl: 'https://i.postimg.cc/C5ZsVZ1z/SAM-BLOG.png',
      caseStudyUrl: '#',
      liveLink: 'https://samblog-176bb.web.app/',
      githubLink: 'https://github.com/Nahidul-Islam-Siam/SamBlog-Website',
      technologies: ['React', 'NodeJs', 'Firebase']
    },
    {
      title: 'SAM Travel',
      description: 'Simple website I made for free to improve on current outdated website for my church.',
      imageUrl: 'https://i.postimg.cc/4Np7rv5r/Sam-s-Travel.png',
      caseStudyUrl: '#',
      liveLink: '#',
      githubLink: '#',
      technologies: ['HTML', 'CSS', 'JavaScript','TailwindCss']
    },
    {
      title: 'Book Vibe',
      description: 'I have completed various projects from discord bots to websites with payment integrations and much more.',
      imageUrl: 'https://i.postimg.cc/SNtNsDrX/Vite-React.png',
      caseStudyUrl: '#',
      liveLink: '#',
      githubLink: '#',
      technologies: ['HTML', 'CSS']
    },
    {
      title: 'Sam Craft',
      description: 'An app created with react-native and expo for my church where podcasts could be streamed live or listened back to.',
      imageUrl: 'https://i.postimg.cc/DydpPw0L/Sam-Craft.png',
      caseStudyUrl: '#',
      liveLink: 'https://craft-store-client.web.app/',
      githubLink: 'https://github.com/Nahidul-Islam-Siam/Craft-Art-Website',
      technologies: ['React', 'Express JS', 'Firebase']
    },
    {
      title: 'This Website ✨',
      description: 'Portfolio website built in Next.js 13 to showcase my projects, experience and resume through a cooler way.',
      imageUrl: 'https://nextjs.org/static/blog/next-13/twitter-card.png',
      caseStudyUrl: 'https://github.com/NoahGdev/Portfolio-Website',
      liveLink: 'https://yourportfolio.com',
      githubLink: 'https://github.com/NoahGdev/Portfolio-Website',
      technologies: ['Next.js', 'Tailwind CSS']
    }
  ];

  return (
    <section id='previouswork' className="bg-transparent  dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl text-white">Portfolio</h1>
        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          Here are some of the projects I&lsquo;ve worked on. Click to learn more!
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{ backgroundImage: `url(${project.imageUrl})` }}>
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">{project.title}</h2>
                <p className="mt-2 text-lg text-gray-300">{project.description}</p>
                <div className="flex mt-4 space-x-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                </div>
                <p className="mt-4 text-sm text-gray-400">Technologies: {project.technologies.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;
