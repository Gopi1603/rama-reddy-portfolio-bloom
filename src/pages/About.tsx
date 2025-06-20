import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Languages, GraduationCap, Download } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">About Me</h1>
        <p className="text-lg text-black dark:text-white">
          Passionate about technology and continuous learning
        </p>
        <Button asChild variant="outline" size="lg" className="border-black text-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
          <a href="/resume.pdf" download="Rama_Krishna_Reddy_Resume.pdf">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </a>
        </Button>
      </div>

      <Card className="bg-white dark:bg-black border-black dark:border-white animate-slide-in-right animation-delay-100">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">Professional Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-black dark:text-white leading-relaxed">
            I am an aspiring Salesforce Administrator and Python Developer with a strong foundation in technology 
            and a passion for creating efficient solutions. Currently pursuing opportunities to apply my skills 
            in CRM administration, automation, and software development.
          </p>
          <p className="text-black dark:text-white leading-relaxed">
            My goal is to leverage technology to streamline business processes and contribute to organizational 
            growth through effective Salesforce administration and Python development projects.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up animation-delay-200">
        <Card className="bg-white dark:bg-black border-black dark:border-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black dark:text-white">
              <GraduationCap className="h-5 w-5" />
              Background
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium flex items-center gap-2 mb-2 text-black dark:text-white">
                  <GraduationCap className="h-4 w-4" />
                  Education
                </h4>
                <p className="text-sm text-black dark:text-white">Computer Science Graduate</p>
              </div>
              <div>
                <h4 className="font-medium flex items-center gap-2 mb-2 text-black dark:text-white">
                  <MapPin className="h-4 w-4" />
                  Location
                </h4>
                <p className="text-sm text-black dark:text-white">India</p>
              </div>
              <div>
                <h4 className="font-medium flex items-center gap-2 mb-2 text-black dark:text-white">
                  <Languages className="h-4 w-4" />
                  Languages
                </h4>
                <p className="text-sm text-black dark:text-white">English, Hindi, Telugu</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-black border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Interests & Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-black dark:text-white">Professional Interests</h4>
                <p className="text-sm text-black dark:text-white">
                  Salesforce Administration, Python Development, Automation, Data Management
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-black dark:text-white">Personal Interests</h4>
                <p className="text-sm text-black dark:text-white">
                  Technology Innovation, Continuous Learning, Problem Solving
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-black dark:text-white">Core Values</h4>
                <p className="text-sm text-black dark:text-white">
                  Integrity, Excellence, Continuous Improvement, Collaboration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-black border-black dark:border-white animate-slide-in-right animation-delay-300">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">Career Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-2 border-black dark:border-white pl-4">
              <h4 className="font-medium text-black dark:text-white">Present - Seeking Opportunities</h4>
              <p className="text-sm text-black dark:text-white">
                Actively pursuing roles in Salesforce Administration and Python Development
              </p>
            </div>
            <div className="border-l-2 border-black dark:border-white pl-4">
              <h4 className="font-medium text-black dark:text-white">Learning Phase</h4>
              <p className="text-sm text-black dark:text-white">
                Developing expertise through certifications and hands-on projects
              </p>
            </div>
            <div className="border-l-2 border-black dark:border-white pl-4">
              <h4 className="font-medium text-black dark:text-white">Foundation</h4>
              <p className="text-sm text-black dark:text-white">
                Built strong technical foundation through computer science education
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
