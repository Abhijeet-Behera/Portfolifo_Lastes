import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

interface HeroProps {
  darkMode?: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center justify-center pt-16 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Moving Car Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
            <div className="animate-car-move">
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                className={`opacity-20 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}
                fill="currentColor"
              >
                {/* Car body */}
                <rect x="10" y="20" width="50" height="12" rx="2" />
                <rect x="20" y="15" width="30" height="8" rx="3" />

                {/* Wheels */}
                <circle cx="20" cy="32" r="6" />
                <circle cx="50" cy="32" r="6" />

                {/* Wheel centers */}
                <circle
                  cx="20"
                  cy="32"
                  r="2"
                  className={darkMode ? 'fill-gray-900' : 'fill-white'}
                />
                <circle
                  cx="50"
                  cy="32"
                  r="2"
                  className={darkMode ? 'fill-gray-900' : 'fill-white'}
                />

                {/* Windows */}
                <rect
                  x="22"
                  y="16"
                  width="8"
                  height="6"
                  rx="1"
                  className={darkMode ? 'fill-gray-900' : 'fill-white'}
                />
                <rect
                  x="35"
                  y="16"
                  width="8"
                  height="6"
                  rx="1"
                  className={darkMode ? 'fill-gray-900' : 'fill-white'}
                />

                {/* Headlights */}
                <circle
                  cx="62"
                  cy="24"
                  r="2"
                  className={
                    darkMode ? 'fill-yellow-300' : 'fill-yellow-400'
                  }
                />
                <circle
                  cx="62"
                  cy="28"
                  r="2"
                  className={
                    darkMode ? 'fill-yellow-300' : 'fill-yellow-400'
                  }
                />
              </svg>
            </div>
          </div>

          {/* Road lines */}
          <div className="absolute bottom-1/3 w-full overflow-hidden">
            <div className="animate-road-lines flex gap-8">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`w-12 h-1 ${
                    darkMode ? 'bg-white' : 'bg-black'
                  } opacity-10`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-pulse ${
              darkMode ? 'bg-white' : 'bg-black'
            }`}
            style={{ animationDuration: '4s' }}
          ></div>
          <div
            className={`absolute top-40 right-20 w-24 h-24 rounded-full opacity-10 animate-pulse ${
              darkMode ? 'bg-white' : 'bg-black'
            }`}
            style={{ animationDuration: '6s', animationDelay: '1s' }}
          ></div>
          <div
            className={`absolute bottom-32 left-1/4 w-20 h-20 rounded-full opacity-10 animate-pulse ${
              darkMode ? 'bg-white' : 'bg-black'
            }`}
            style={{ animationDuration: '5s', animationDelay: '2s' }}
          ></div>

          <div
            className={`absolute top-60 right-1/4 w-16 h-16 opacity-5 animate-bounce ${
              darkMode ? 'bg-white' : 'bg-black'
            }`}
            style={{ animationDuration: '8s', animationDelay: '0.5s' }}
          ></div>
          <div
            className={`absolute bottom-40 right-10 w-12 h-12 opacity-5 animate-bounce ${
              darkMode ? 'bg-white' : 'bg-black'
            }`}
            style={{ animationDuration: '7s', animationDelay: '1.5s' }}
          ></div>

          {/* Grid lines */}
          <div className="absolute inset-0">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke={
                      darkMode
                        ? 'rgba(255,255,255,0.03)'
                        : 'rgba(0,0,0,0.03)'
                    }
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating code-like symbols */}
          <div
            className={`absolute top-1/3 left-1/3 opacity-5 font-mono text-xs ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            <div
              className="animate-pulse"
              style={{ animationDuration: '3s' }}
            >
              {'<div>'}
            </div>
          </div>
          <div
            className={`absolute bottom-1/3 right-1/3 opacity-5 font-mono text-xs ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            <div
              className="animate-pulse"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            >
              {'</>'}
            </div>
          </div>
          <div
            className={`absolute top-1/2 left-1/5 opacity-5 font-mono text-xs ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            <div
              className="animate-pulse"
              style={{ animationDuration: '5s', animationDelay: '2s' }}
            >
              {'{ }'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className={`mb-4 text-4xl md:text-6xl font-extrabold tracking-tight transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            Hi, I’m{' '}
            <span
              className={`${
                darkMode ? 'text-cyan-400' : 'text-cyan-600'
              }`}
            >
              Abhijeet Behera
            </span>
          </h1>

          <h2
            className={`mb-6 text-lg md:text-xl font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <Typewriter
              words={[
                '🌐 Full-Stack Developer',
                '🎨 UI/UX Enthusiast',
                '💻 CSE Explorer',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p
            className={`mb-10 text-base md:text-lg leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            I turn ideas into{' '}
            <strong>beautiful</strong>, <strong>functional</strong>, and{' '}
            <strong>impactful</strong> web experiences — blending creativity
            with clean code. <br />
            Currently seeking <strong>internship</strong> &{' '}
            <strong>freelancing opportunities</strong> to bring visions to
            life. 🚀
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className={`px-8 py-3 rounded-md transition-colors duration-300 font-medium ${
                darkMode
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 border rounded-md transition-colors duration-300 font-medium ${
                darkMode
                  ? 'border-white text-white hover:bg-gray-800'
                  : 'border-black text-black hover:bg-gray-100'
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown
          className={darkMode ? 'text-white' : 'text-black'}
          size={32}
        />
      </a>
    </section>
  );
};

export default Hero;
