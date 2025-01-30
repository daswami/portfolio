import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const experiences = [
  {
    company: "Unlonly",
    logo: "/company-logos/unlonly.png",
    role: "Co-founder",
    dates: "2024",
    
  },
  {
    company: "3DS",
    logo: "/company-logos/dassaultsystemes.svg",
    role: "Solutions / Software Engineer Intern",
    dates: "2024",
   
  },
  {
    company: "Desai Accelerator",
    logo: "/company-logos/desai.jpg",
    role: "Software Developer Intern",
    dates: "2023",
    
  },
  {
    company: "Scienaptic AI",
    logo: "/company-logos/scienaptic1.png",
    role: "Machine Learning Engineer Intern",
    dates: "2022",
    
  }
];

export default function History() {
  return (
    <>
      <Head>
        <title>History</title>
        <meta name="description" content="Professional history and experience" />
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
                className="text-primary relative group h-full flex items-center"
              >
                History
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>
              </Link>
              <Link 
                href="/projects" 
                className="text-zinc-600 hover:text-primary relative group h-full flex items-center"
              >
                Projects
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

        {/* History Content */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-heading text-3xl sm:text-4xl font-medium text-zinc-900 mb-4">
                Professional Journey
              </h1>
              <p className="text-lg text-zinc-600">
                A timeline of my professional growth in tech
              </p>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-zinc-800 mb-8">
              Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 relative flex-shrink-0 bg-zinc-100 rounded-lg overflow-hidden">
                      {exp.logo.endsWith('.svg') ? (
                        // For SVG files, use img tag since Next.js Image doesn't fully support SVG
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        // For other image formats (PNG, JPG), use Next.js Image
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain p-2"
                        />
                      )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-heading text-xl font-semibold text-zinc-900">
                            {exp.role}
                          </h3>
                          <p className="text-primary-dark font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-zinc-500">
                          {exp.dates}
                        </span>
                      </div>
                      {/* <p className="text-zinc-600 mt-2">
                        {exp.description}
                      </p> */}
                    </div>
                  </div>
                </div>
              ))}
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
