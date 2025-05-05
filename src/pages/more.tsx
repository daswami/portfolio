import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Dilan is just upfront, a go-getter, and 100% a business man. If I had to bet money on a successful founder that engineered his own software/app/service, it would be on Dilan.",
    author: "Eddie Jung",
    title: "Founder at Bastion",
  },
  {
    quote: "Dilan has a clear intelligence with a far more important passion that leads him to put his all into each project and produce incredibly thorough results.",
    author: "Bill Crane",
    title: "CEO at OrbAid",
  },
];

const skills = {
  Frontend: [
    { name: "HTML", logo: "/skill-logos/html5.svg" },
    { name: "CSS", logo: "/skill-logos/css3.svg" },
    { name: "JavaScript", logo: "/skill-logos/javascript.svg" },
    { name: "TypeScript", logo: "/skill-logos/typescript.svg" },
    { name: "React", logo: "/skill-logos/react.svg" },
    { name: "Next.js", logo: "/skill-logos/nextdotjs.svg" },
    { name: "Vue.js", logo: "/skill-logos/vuedotjs.svg" },
    { name: "Figma", logo: "/skill-logos/figma.svg" },
    { name: "Tailwind CSS", logo: "/skill-logos/tailwindcss.svg" },
  ],
  Backend: [
    { name: "Python", logo: "/skill-logos/python.svg" },
    { name: "FastAPI", logo: "/skill-logos/fastapi.svg" },
    { name: "Flask", logo: "/skill-logos/flask.svg" },
    { name: "Django", logo: "/skill-logos/django.svg" },
    { name: "Node.js", logo: "/skill-logos/nodedotjs.svg" },
    { name: "Java", logo: "/skill-logos/java.svg" },
    { name: "PHP", logo: "/skill-logos/php.svg" },
    { name: "C++", logo: "/skill-logos/cplusplus.svg" },
    { name: "PostgreSQL", logo: "/skill-logos/postgresql.svg" },
    { name: "MySQL", logo: "/skill-logos/mysql.svg" },
    { name: "MongoDB", logo: "/skill-logos/mongodb.svg" },
    { name: "Supabase", logo: "/skill-logos/supabase.svg" },
    
  ],
  Deployment: [
    { name: "AWS", logo: "/skill-logos/amazonwebservices.svg" },
    { name: "Git", logo: "/skill-logos/git.svg" },
    { name: "GitHub", logo: "/skill-logos/github.svg" },
    { name: "Vercel", logo: "/skill-logos/vercel.svg" },
    { name: "Cypress", logo: "/skill-logos/cypress.svg" },
    { name: "Prometheus", logo: "/skill-logos/prometheus.svg" },
    { name: "Docker", logo: "/skill-logos/docker.svg" },
    { name: "Kubernetes", logo: "/skill-logos/kubernetes.svg" },
  ],

  ML: [
    
    { name: "PyTorch", logo: "/skill-logos/pytorch.svg" },
    { name: "TensorFlow", logo: "/skill-logos/tensorflow.svg" },
    { name: "Numpy", logo: "/skill-logos/numpy.svg" },
    { name: "Pandas", logo: "/skill-logos/pandas.svg" },
    { name: "OpenAI", logo: "/skill-logos/openai.svg" },
    { name: "Gemini", logo: "/skill-logos/googlegemini.svg" },
    { name: "OpenCV", logo: "/skill-logos/opencv.svg" },
    { name: "HuggingFace", logo: "/skill-logos/huggingface.svg" },
    { name: "Jupyter", logo: "/skill-logos/jupyter.svg" },
  ],
};

const certifications = [
  {
    name: "AWS Solutions Architect - Associate",
    organization: "Amazon Web Services",
    logo: "/cert-logos/aws-solutions.png",
    dates: "2024",
    description: "Demonstrated expertise in designing distributed systems and deploying applications on AWS infrastructure. Proficient in AWS services including EC2, S3, RDS, and Lambda.",
  },
];

export default function More() {
  return (
    <>
      <Head>
        <title>Skills & Testimonials</title>
        <meta name="description" content="Skills, certifications, and testimonials" />
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
              {/* <Link 
                href="/projects" 
                className="text-zinc-600 hover:text-primary relative group h-full flex items-center"
              >
                Projects
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link> */}
              <Link 
                href="/more" 
                className="text-primary relative group h-full flex items-center"
              >
                More
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60"></div>
              </Link>
            </div>
          </div>
        </nav>

        {/* Testimonials Section */}
        <section className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h1 className="font-heading text-3xl sm:text-3xl font-medium text-zinc-900 mb-4 mt-4">
                What My Colleagues Say
              </h1>
              <p className="text-base text-zinc-600 font-sans">
                Feedback from professionals I&apos;ve had the pleasure of working with throughout my career
              </p>
            </div>

            <div className="space-y-6 font-sans">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="flex gap-4">
                    <FaQuoteLeft className="text-primary/20 w-8 h-8 flex-shrink-0" />
                  <div>
                      <p className="text-lg text-zinc-700 italic mb-4">
                        {testimonial.quote}
                      </p>
                      <div>
                        <p className="font-heading font-semibold text-zinc-900">
                          {testimonial.author}
                        </p>
                        <p className="text-zinc-500">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-medium text-zinc-900 mb-4">
                Skills
              </h2>
              <p className="text-base text-zinc-600 font-sans">
                An overview of my technical expertise across various domains
              </p>
            </div>

            <div className="space-y-12">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="font-heading text-2xl font-semibold text-zinc-800 mb-6">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center p-4 bg-zinc-50 rounded-lg">
                        <div className="w-12 h-12 relative flex-shrink-0 mb-3">
                          <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                          {skill.logo.endsWith('.svg') ? (
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <Image
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        )}
                          </div>
                        </div>
                        <span className="text-sm font-sans text-zinc-700">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Certifications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-center font-medium text-zinc-900 mb-4">
                Certifications
              </h2>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 relative flex-shrink-0 bg-zinc-100 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                      {cert.logo.endsWith('.svg') ? (
                          <img
                            src={cert.logo}
                            alt={`${cert.name} logo`}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <Image
                            src={cert.logo}
                            alt={`${cert.name} logo`}
                            fill
                            className="object-contain p-2"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-heading text-xl font-medium text-zinc-900 mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-zinc-600 mb-2 font-sans">{cert.organization}</p>
                      <p className="text-zinc-500 text-sm mb-4 font-sans">{cert.dates}</p>
                      <p className="text-zinc-600 font-sans">{cert.description}</p>
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
