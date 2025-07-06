import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Cloud, Code, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Expertise",
      description: "1 year of hands-on AWS experience building scalable solutions",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Leadership Background",
      description: "10 years of management and customer service excellence",
      color: "text-purple-400"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Python programming and Linux system administration",
      color: "text-cyan-400"
    },
    {
      icon: Award,
      title: "AWS Certified",
      description: "Cloud Practitioner & Solutions Architect Associate",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-blue-200 border-blue-400/50 bg-blue-900/30 backdrop-blur-sm mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bridging Business & Technology
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I bring a unique perspective to cloud architecture, combining technical expertise 
              with extensive leadership experience to deliver solutions that truly serve business needs.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-200 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  After a decade of successfully managing teams and delivering exceptional customer experiences, 
                  I discovered my passion for cloud technology. This unique background gives me a deep understanding 
                  of both the technical and human aspects of digital transformation.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As a junior cloud architect, I'm focused on mastering all areas of AWS solutions architecture. 
                  My goal is to become a versatile solution architect who can design systems that are not only 
                  technically sound but also align perfectly with business objectives.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="space-y-3">
                <h4 className="text-lg font-medium text-blue-200">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS Solutions Architecture', 'Team Leadership', 'Customer Relations', 'Python', 'Linux', 'Problem Solving', 'Strategic Planning'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-900/30 text-blue-200 border-blue-700/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className={`${highlight.color} mb-4`}>
                      <highlight.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;