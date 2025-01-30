import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiLink, HiSquare2Stack } from 'react-icons/hi2';
import { useState } from 'react';

const projects = [
  {
    name: "AI Task Manager",
    logo: "/project-logos/clarity.png",
    description: "An intelligent task management system built with React and OpenAI's GPT-3. Features include natural language task creation, smart categorization, and automated priority scheduling.",
    githubUrl: "https://github.com/username/ai-task-manager",
    domain: "aitaskmanager.com"
  },
  {
    name: "Data Visualization Dashboard",
    logo: "/project-logos/finrag.png",
    description: "Interactive dashboard built with D3.js and React for visualizing complex datasets. Includes real-time updates, customizable charts, and responsive design for all screen sizes.",
    githubUrl: "https://github.com/username/data-viz-dashboard",
    domain: "dataviz-dashboard.com"
  }
];

export default function Projects() {
  const [copiedDomain, setCopiedDomain] = useState<string | null>(null);

  const handleCopyDomain = (domain: string) => {
    navigator.clipboard.writeText(domain);
    setCopiedDomain(domain);
    setTimeout(() => setCopiedDomain(null), 2000);
  };

  return (
    <>
      <Head>
        <title>Projects - Portfolio</title>
        <meta name="description" content="My projects and work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-zinc-50">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center h-16 items-center space-x-8">
              <Link href="/" className="text-zinc-600 hover:text-primary">About</Link>
              <Link href="/history" className="text-zinc-600 hover:text-primary">History</Link>
              <Link href="/projects" className="text-zinc-900 hover:text-primary">Projects</Link>
              <Link href="/more" className="text-zinc-600 hover:text-primary">More</Link>
            </div>
          </div>
        </nav>

        {/* Projects Content */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-heading text-3xl sm:text-4xl font-medium text-zinc-900 mb-4">
                Featured Projects
              </h1>
              <p className="text-lg text-zinc-600">
                A collection of my recent work and personal projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 relative flex-shrink-0 bg-zinc-100 rounded-lg overflow-hidden">
                        {project.logo.endsWith('.svg') ? (
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        )}
                      </div>
                      <h3 className="font-heading text-xl font-medium text-zinc-900">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-zinc-600 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-primary transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <HiLink className="w-5 h-5" />
                        <a
                          href={`https://${project.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-sm"
                        >
                          {project.domain}
                        </a>
                        <button
                          onClick={() => handleCopyDomain(project.domain)}
                          className="p-1 hover:text-primary transition-colors"
                          title="Copy domain"
                        >
                          <HiSquare2Stack className="w-4 h-4" />
                        </button>
                        {copiedDomain === project.domain && (
                          <span className="text-xs text-green-600">Copied!</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-zinc-200">
              <div className="flex justify-center space-x-6 mb-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-primary transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
              <p className="text-sm text-zinc-500 text-center">
                {new Date().getFullYear()} Dilan Swami. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
