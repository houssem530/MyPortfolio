import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rezgui.houssem@outlook.com",
      link: "mailto:rezgui.houssem@outlook.com",
      color: "text-blue-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "houssem-rezgui-5a565232b",
      link: "https://www.linkedin.com/in/houssem-rezgui-5a565232b/",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "houssem530",
      link: "https://github.com/houssem530",
      color: "text-gray-300"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      color: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900/40">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-blue-200 border-blue-400/50 bg-blue-900/30 backdrop-blur-sm mb-4">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss cloud solutions or explore opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-full bg-slate-700/50 ${info.color}`}>
                            <info.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-white">{info.label}</h4>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-300 transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-gray-300">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.linkedin.com/in/houssem-rezgui-5a565232b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                  </a>
                  <a 
                    href="https://github.com/houssem530" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700/50 transform hover:scale-105 transition-all duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;