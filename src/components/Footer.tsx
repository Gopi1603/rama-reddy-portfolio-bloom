
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-black dark:border-white bg-white dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-black dark:text-white font-medium">
              © 2024 Pedaviti Rama Krishna Reddy
            </p>
            <p className="text-black dark:text-white text-sm mt-1">
              Aspiring Salesforce Admin & Python Developer
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="mailto:ramakrishnareddy.pedaviti@gmail.com"
              className="flex items-center space-x-2 text-black dark:text-white hover:opacity-70 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/rama-krishna-reddy-pedaviti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black dark:text-white hover:opacity-70 transition-opacity"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
