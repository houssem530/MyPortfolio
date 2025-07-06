import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Layers, Globe, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "3-Tier Web Application",
      description: "Designed and implemented a scalable 3-tier web application architecture on AWS, featuring separate presentation, application, and database layers for optimal performance and maintainability.",
      image: "https://images.unsplash.com/photo-1583671399618-e0517f9f1e5e",
      technologies: ["AWS EC2", "RDS", "Application Load Balancer", "Auto Scaling", "VPC", "Security Groups"],
      icon: Layers,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Static Website on S3",
      description: "Built and deployed a high-performance static website using Amazon S3 with CloudFront CDN distribution, implementing best practices for security and global content delivery.",
      image: "https://images.unsplash.com/photo-1535557597501-0fee0a500c57",
      technologies: ["Amazon S3", "CloudFront", "Route 53", "SSL/TLS", "IAM", "Static Hosting"],
      icon: Globe,
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "API Gateway with Lambda",
      description: "Developed a serverless API solution using AWS API Gateway integrated with Lambda functions, enabling scalable and cost-effective backend services with automatic scaling.",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "IAM Roles", "CloudWatch", "Serverless Architecture"],
      icon: Zap,
      gradient: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-blue-200 border-blue-400/50 bg-blue-900/30 backdrop-blur-sm mb-4">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Cloud Solutions Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore my hands-on AWS projects showcasing scalable architecture patterns and best practices
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group bg-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-blue-200">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-900/30 text-blue-200 border-blue-700/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm" 
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 transform hover:scale-105 transition-all duration-300 flex-1`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-slate-600 text-slate-300 hover:bg-slate-700/50"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;