import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronDown, Cloud, Code, Database, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-indigo-500/20 rounded-full animate-bounce"></div>
      </div>

      {/* Floating Cloud Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Cloud className="absolute top-16 left-1/4 w-8 h-8 text-blue-300/40 animate-float" />
        <Database className="absolute top-32 right-1/4 w-6 h-6 text-purple-300/40 animate-float-delayed" />
        <Code className="absolute bottom-40 left-1/3 w-7 h-7 text-cyan-300/40 animate-float" />
        <Zap className="absolute bottom-24 right-1/3 w-6 h-6 text-indigo-300/40 animate-float-delayed" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="outline" className="text-blue-200 border-blue-400/50 bg-blue-900/30 backdrop-blur-sm">
              👋 Hello, I'm
            </Badge>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              REZGUI Houssem
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 animate-slide-up-delayed">
            Junior Cloud Architect
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Passionate about building scalable cloud solutions on AWS. 
            Combining <span className="text-blue-400 font-semibold">1 year of cloud expertise</span> with 
            <span className="text-purple-400 font-semibold"> 10 years of leadership experience</span> to architect the future.
          </p>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-delayed">
            <Badge className="bg-orange-500/20 text-orange-200 border-orange-500/30 px-4 py-2">
              🏆 AWS Cloud Practitioner
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-500/30 px-4 py-2">
              🎯 Solutions Architect Associate
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delayed">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-300 hover:bg-blue-400/10 transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-300/60" />
        </div>
      </div>
    </div>
  );
};

export default Hero;