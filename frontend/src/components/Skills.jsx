import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Cloud, Code, Database, Shield, Users, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AWS Cloud Services",
      icon: Cloud,
      color: "text-orange-400",
      skills: [
        { name: "EC2 & VPC", level: 85 },
        { name: "S3 & CloudFront", level: 90 },
        { name: "Lambda & API Gateway", level: 80 },
        { name: "RDS & DynamoDB", level: 75 },
        { name: "IAM & Security", level: 82 },
        { name: "Auto Scaling & Load Balancing", level: 78 }
      ]
    },
    {
      title: "Technical Skills",
      icon: Code,
      color: "text-blue-400",
      skills: [
        { name: "Python", level: 65 },
        { name: "Linux Administration", level: 70 },
        { name: "Infrastructure as Code", level: 60 },
        { name: "CI/CD Pipelines", level: 58 },
        { name: "Monitoring & Logging", level: 72 },
        { name: "Networking", level: 75 }
      ]
    },
    {
      title: "Architecture & Design",
      icon: Database,
      color: "text-purple-400",
      skills: [
        { name: "Solution Architecture", level: 78 },
        { name: "System Design", level: 75 },
        { name: "Cost Optimization", level: 80 },
        { name: "High Availability", level: 77 },
        { name: "Disaster Recovery", level: 70 },
        { name: "Performance Optimization", level: 73 }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "text-red-400",
      skills: [
        { name: "AWS Security Best Practices", level: 82 },
        { name: "Identity & Access Management", level: 85 },
        { name: "Data Encryption", level: 75 },
        { name: "Compliance Frameworks", level: 68 },
        { name: "Security Auditing", level: 70 },
        { name: "Incident Response", level: 65 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-green-400",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Customer Service", level: 98 },
        { name: "Project Management", level: 90 },
        { name: "Problem Solving", level: 92 },
        { name: "Communication", level: 95 },
        { name: "Stakeholder Management", level: 88 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Cog,
      color: "text-cyan-400",
      skills: [
        { name: "AWS Console", level: 88 },
        { name: "CloudFormation", level: 65 },
        { name: "Git & Version Control", level: 75 },
        { name: "Docker", level: 60 },
        { name: "Terraform", level: 58 },
        { name: "CloudWatch", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-blue-200 border-blue-400/50 bg-blue-900/30 backdrop-blur-sm mb-4">
              Technical Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Competencies
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical skills and professional competencies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div className={`p-2 rounded-lg bg-slate-700/50 ${category.color}`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-blue-300 font-medium">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-slate-700/50"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">AWS Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="text-xl font-bold text-white mb-2">AWS Certified Cloud Practitioner</h4>
                  <p className="text-orange-200">Foundational cloud knowledge and AWS services</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold text-white mb-2">AWS Solutions Architect Associate</h4>
                  <p className="text-blue-200">Designing distributed systems on AWS</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;