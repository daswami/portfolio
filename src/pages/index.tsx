import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Head>
        <title>Dilan Swami</title>
        <meta name="description" content="About me" />
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
                className="text-primary relative group h-full flex items-center"
              >
                About
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>
              </Link>
              <Link 
                href="/history" 
                className="text-zinc-600 hover:text-primary relative group h-full flex items-center"
              >
                History
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              {/* <Link 
                href="/projects" 
                className="text-zinc-600 hover:text-primary relative group h-full flex items-center"
              >
                Projects
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link> */}
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

        {/* Main Content */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mt-50">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Left Side - Content */}
              <div className="md:col-span-7 space-y-8">
                <h1 className="font-heading text-3xl sm:text-4xl font-medium text-zinc-700 leading-relaxed">
                  My name is Dilan Swami and I am going from building code to building relationships. 
                </h1>
                <div className="space-y-6 font-sans">
                  <p className="text-base text-zinc-500 leading-relaxed">
                  I learned software because I was drawn to the startup world — first SaaS, now AI — and I wanted to leave a legacy. I really enjoy software engineering. 
                  </p>
                  <p className="text-base text-zinc-500 leading-relaxed">
                  But the more I built, the more I found myself gravitating towards anything that would put me in touch with customers. I assumed that was normal… until I realized most engineers preferred to stay behind the scenes. 
                  </p>
                  <p className="text-base text-zinc-500 leading-relaxed">
                  Sales makes sense to me - not just the relationship-building, but the high-stakes, competitive, fast-paced nature of it. It;s a game where the hardest working and most adaptable win. 
                  </p>
                  <p className="text-base text-zinc-500 leading-relaxed">
                  I’ve recently worked behind AEs. I’ve had numerous conversations with SEs. And what I’ve learned is surprising - sales isn’t about who is the most slick, or who can apply the most pressure to force a purchase, it’s about relationship building, speaking the customer’s language, and providing value. 
                  </p>
                  <p className="text-base text-zinc-500 leading-relaxed">
                  I want to build a company, and sales is where it starts. 
                  </p>
                </div>
              </div>

              {/* Right Side - Image and CV Download */}
              <div className="md:col-span-5">
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-zinc-100 mb-6 w-full">
                  <Image
                    src="/images/dilan.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* <a
                  href="/documents/Dilan_Swami_Resume.pdf"
                  download
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-lg transition-colors duration-200"
                >
                  <FaFileDownload className="w-5 h-5" />
                  <span className="font-medium">Download Resume</span>
                </a> */}
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
