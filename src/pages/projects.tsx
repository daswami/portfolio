import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiLink, HiSquare2Stack } from 'react-icons/hi2';
import { useState } from 'react';

const projects = [
  {
    name: "Clarity",
    logo: "/project-logos/clarity.png",
    description: "A personal AI coach built with Next.js, React, and Tailwind CSS. Designed to help navigate complex personal dilemmas, like a career change.",
    githubUrl: "https://github.com/daswami/clarity",
    domain: "clarity-opal.vercel.app/"
  },
  {
    name: "FinRAG",
    logo: "/project-logos/finrag.png",
    description: "Financial tool that lets you extract key information from large 25+ page stock history PDFs. Built with Django and OpenAI embeddings. ",
    githubUrl: "https://github.com/daswami/finrag",
    domain: "finrag.onrender.com/"
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
        <title>Projects</title>
        <meta name="description" content="My projects and work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-zinc-50">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center h-14 items-center space-x-8">
              <Link 
                href="/" 
                className="text-zinc-600 hover:text-primary relative group h-full flex items-center"
              >
                About
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link 
                href="/history" 
                className="text-zinc-600 hover:text-primary relative group h-full flex items-center"
              >
                History
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link 
                href="/projects" 
                className="text-primary relative group h-full flex items-center"
              >
                Projects
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>
              </Link>
              <Link 
                href="/more" 
                className="text-zinc-600 hover:text-primary relative group h-full flex items-center"
              >
                More
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          </div>
        </nav>

        {/* Projects Content */}
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="font-heading text-3xl sm:text-4xl font-medium text-zinc-900 mb-4">
                  Featured Projects
                </h1>
                <p className="text-lg text-zinc-600">
                  A collection of my recent work and personal projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            </div>
          </div>
        </section>
          {/* Footer */}
        <footer className="bg-white border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-6">
                <a href="https://github.com/daswami" target="_blank" rel="noopener noreferrer" 
                   className="text-zinc-600 hover:text-primary">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/dilan-swami" target="_blank" rel="noopener noreferrer"
                   className="text-zinc-600 hover:text-primary">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Dilan Swami. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        
      </main>
    </>
  );
}
