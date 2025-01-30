import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Head>
        <title>Dilan Swami</title>
        <meta name="description" content="Personal portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-zinc-50">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center h-16 items-center space-x-8">
              <Link href="/" className="text-zinc-900 hover:text-primary">About</Link>
              <Link href="/history" className="text-zinc-600 hover:text-primary">History</Link>
              <Link href="/projects" className="text-zinc-600 hover:text-primary">Projects</Link>
              <Link href="/more" className="text-zinc-600 hover:text-primary">More</Link>
            </div>
          </div>
        </nav>

        {/* About Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-zinc-900">
                  My name is Dilan Swami
                </h1>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  [Your story will go here - please provide your personal description and I will update this section]
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center text-zinc-400">
                  <img src="/images/dilan.jpg" alt="Your Name" className="object-cover w-full h-full" />
                </div>
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
