import React from 'react';

const PreviousWork: React.FC = () => {
  const projects = [
    {
      title: 'WorkTrack',
      description: 'This Project is for a Employee Management Website. Here different routes Admin, HR and Employee. Easch have different Routes',
      imageUrl: 'https://i.postimg.cc/KvN5LyMq/untitled.png',
      caseStudyUrl: '#',
      liveLink: '#',
      githubLink: '#',
      technologies: ['React', 'Node.js', 'Express']
    },
    {
      title: 'SAM Blog',
      description: 'SaaS company built in the sneaker reselling industry consisting of tools to simplify user experience and increase efficiency.',
      imageUrl: 'https://i.postimg.cc/C5ZsVZ1z/SAM-BLOG.png',
      caseStudyUrl: 'https://github.com/NoahGdev/LiquidTools',
      liveLink: 'https://liquidtools.com',
      githubLink: 'https://github.com/NoahGdev/LiquidTools',
      technologies: ['React', 'Redux', 'Firebase']
    },
    {
      title: 'Church Website Revamp',
      description: 'Simple website I made for free to improve on current outdated website for my church.',
      imageUrl: 'https://i.postimg.cc/4Np7rv5r/Sam-s-Travel.png',
      caseStudyUrl: '#',
      liveLink: '#',
      githubLink: '#',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Freelance Work',
      description: 'I have completed various projects from discord bots to websites with payment integrations and much more.',
      imageUrl: 'https://i.postimg.cc/SNtNsDrX/Vite-React.png',
      caseStudyUrl: '#',
      liveLink: '#',
      githubLink: '#',
      technologies: ['Python', 'Django', 'React']
    },
    {
      title: 'Podcast App',
      description: 'An app created with react-native and expo for my church where podcasts could be streamed live or listened back to.',
      imageUrl: 'https://media.discordapp.net/attachments/1123342178991734795/1165465536658931712/image1.jpeg?ex=6546f35d&is=65347e5d&hm=6826bde1839e5f938f4cfc9f419edf3ddc1b0c67793366b732ce5d87a0beaea9&=&width=1014&height=676',
      caseStudyUrl: '#',
      liveLink: '#',
      githubLink: '#',
      technologies: ['React Native', 'Expo', 'Firebase']
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
    <section className="bg-transparent  dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Portfolio</h1>
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
