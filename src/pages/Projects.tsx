
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageSquare } from 'lucide-react';

const Projects = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = [titleRef.current, projectsRef.current, categoriesRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8 px-4">
      <div ref={titleRef} className="text-center space-y-4 opacity-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">My Projects</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Showcasing my work in development and automation
        </p>
      </div>

      <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 opacity-0">
        <Card className="flex flex-col hover-lift animate-slide-up">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              College Website Chatbot
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              An intelligent chatbot for college website to assist students with queries and information
            </p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">Python</Badge>
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">Natural Language Processing</Badge>
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">Web Development</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="transition-colors duration-300 hover:text-foreground">• Automated student query responses</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• College information database integration</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• Interactive web interface</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• 24/7 availability for student support</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1 btn-hover">
                <ExternalLink className="h-3 w-3 mr-1" />
                View Details
              </Button>
              <Button size="sm" variant="outline" className="flex-1 btn-hover">
                <Github className="h-3 w-3 mr-1" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col hover-lift animate-slide-up animate-delay-100">
          <CardHeader>
            <CardTitle className="text-lg">Python Automation Scripts</CardTitle>
            <p className="text-sm text-muted-foreground">
              Collection of Python scripts for various automation tasks
            </p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">Python</Badge>
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">File Processing</Badge>
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">Data Analysis</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="transition-colors duration-300 hover:text-foreground">• File organization automation</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• Data processing scripts</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• Web scraping utilities</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• Report generation tools</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1 btn-hover">View Details</Button>
              <Button size="sm" variant="outline" className="flex-1 btn-hover">GitHub</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col hover-lift animate-slide-up animate-delay-200">
          <CardHeader>
            <CardTitle className="text-lg">Salesforce Practice Org</CardTitle>
            <p className="text-sm text-muted-foreground">
              Hands-on Salesforce administration practice environment
            </p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">Salesforce</Badge>
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">Lightning</Badge>
                  <Badge variant="secondary" className="text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground">Apex</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="transition-colors duration-300 hover:text-foreground">• Custom object creation</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• Workflow automation</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• Report and dashboard setup</li>
                  <li className="transition-colors duration-300 hover:text-foreground">• User management practice</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1 btn-hover">View Details</Button>
              <Button size="sm" variant="outline" className="flex-1 btn-hover">Demo</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card ref={categoriesRef} className="opacity-0 animate-slide-up">
        <CardHeader>
          <CardTitle>Project Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-slide-up animate-delay-100">
              <h4 className="font-medium mb-3">Salesforce Projects</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="transition-colors duration-300 hover:text-foreground">• Practice org implementations</li>
                <li className="transition-colors duration-300 hover:text-foreground">• Custom workflow solutions</li>
                <li className="transition-colors duration-300 hover:text-foreground">• Data migration projects</li>
                <li className="transition-colors duration-300 hover:text-foreground">• User training materials</li>
              </ul>
            </div>
            <div className="animate-slide-up animate-delay-200">
              <h4 className="font-medium mb-3">Python Projects</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="transition-colors duration-300 hover:text-foreground">• Web applications and chatbots</li>
                <li className="transition-colors duration-300 hover:text-foreground">• Automation and scripting tools</li>
                <li className="transition-colors duration-300 hover:text-foreground">• Data analysis and processing</li>
                <li className="transition-colors duration-300 hover:text-foreground">• API integrations and web scraping</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
