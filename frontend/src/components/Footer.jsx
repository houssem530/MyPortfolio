import React from 'react';
import { Badge } from './ui/badge';
import { Heart, Code, Cloud } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            {/* Logo/Name */}
            <div>
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  REZGUI Houssem
                </span>
              </h3>
              <p className="text-gray-400 mt-2">Junior Cloud Architect</p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-orange-500/20 text-orange-200 border-orange-500/30">
                AWS Cloud Practitioner
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-500/30">
                Solutions Architect Associate
              </Badge>
            </div>

            {/* Made with love */}
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>using</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>React and</span>
              <Cloud className="w-4 h-4 text-purple-400" />
              <span>AWS</span>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              <p>&copy; {currentYear} REZGUI Houssem. All rights reserved.</p>
              <p className="mt-1">Passionate about cloud architecture and scalable solutions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;