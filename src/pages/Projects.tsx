
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageSquare } from 'lucide-react';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">My Projects</h1>
        <p className="text-base sm:text-lg text-black dark:text-white">
          Showcasing my work in development and automation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card className="flex flex-col bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-black dark:text-white">
              <MessageSquare className="h-5 w-5 text-black dark:text-white" />
              College Website Chatbot
            </CardTitle>
            <p className="text-sm text-black dark:text-white">
              An intelligent chatbot for college website to assist students with queries and information
            </p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2 text-black dark:text-white">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">Python</Badge>
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">Natural Language Processing</Badge>
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">Web Development</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2 text-black dark:text-white">Key Features</h4>
                <ul className="text-sm text-black dark:text-white space-y-1">
                  <li>• Automated student query responses</li>
                  <li>• College information database integration</li>
                  <li>• Interactive web interface</li>
                  <li>• 24/7 availability for student support</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                <ExternalLink className="h-3 w-3 mr-1" />
                View Details
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                <Github className="h-3 w-3 mr-1" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-lg text-black dark:text-white">Python Automation Scripts</CardTitle>
            <p className="text-sm text-black dark:text-white">
              Collection of Python scripts for various automation tasks
            </p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2 text-black dark:text-white">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">Python</Badge>
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">File Processing</Badge>
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">Data Analysis</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2 text-black dark:text-white">Key Features</h4>
                <ul className="text-sm text-black dark:text-white space-y-1">
                  <li>• File organization automation</li>
                  <li>• Data processing scripts</li>
                  <li>• Web scraping utilities</li>
                  <li>• Report generation tools</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">View Details</Button>
              <Button size="sm" variant="outline" className="flex-1 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">GitHub</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-lg text-black dark:text-white">Salesforce Practice Org</CardTitle>
            <p className="text-sm text-black dark:text-white">
              Hands-on Salesforce administration practice environment
            </p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2 text-black dark:text-white">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">Salesforce</Badge>
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">Lightning</Badge>
                  <Badge variant="secondary" className="text-xs bg-white border border-black text-black dark:bg-black dark:border-white dark:text-white">Apex</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2 text-black dark:text-white">Key Features</h4>
                <ul className="text-sm text-black dark:text-white space-y-1">
                  <li>• Custom object creation</li>
                  <li>• Workflow automation</li>
                  <li>• Report and dashboard setup</li>
                  <li>• User management practice</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">View Details</Button>
              <Button size="sm" variant="outline" className="flex-1 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Demo</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-black border border-black dark:border-white">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">Project Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-black dark:text-white">Salesforce Projects</h4>
              <ul className="space-y-2 text-sm text-black dark:text-white">
                <li>• Practice org implementations</li>
                <li>• Custom workflow solutions</li>
                <li>• Data migration projects</li>
                <li>• User training materials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-black dark:text-white">Python Projects</h4>
              <ul className="space-y-2 text-sm text-black dark:text-white">
                <li>• Web applications and chatbots</li>
                <li>• Automation and scripting tools</li>
                <li>• Data analysis and processing</li>
                <li>• API integrations and web scraping</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
