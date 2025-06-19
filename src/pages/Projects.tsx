
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageSquare } from 'lucide-react';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          Showcasing my work in development and automation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
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
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">Natural Language Processing</Badge>
                  <Badge variant="secondary" className="text-xs">Web Development</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automated student query responses</li>
                  <li>• College information database integration</li>
                  <li>• Interactive web interface</li>
                  <li>• 24/7 availability for student support</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1">
                <ExternalLink className="h-3 w-3 mr-1" />
                View Details
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <Github className="h-3 w-3 mr-1" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
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
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">File Processing</Badge>
                  <Badge variant="secondary" className="text-xs">Data Analysis</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• File organization automation</li>
                  <li>• Data processing scripts</li>
                  <li>• Web scraping utilities</li>
                  <li>• Report generation tools</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1">View Details</Button>
              <Button size="sm" variant="outline" className="flex-1">GitHub</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
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
                  <Badge variant="secondary" className="text-xs">Salesforce</Badge>
                  <Badge variant="secondary" className="text-xs">Lightning</Badge>
                  <Badge variant="secondary" className="text-xs">Apex</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Custom object creation</li>
                  <li>• Workflow automation</li>
                  <li>• Report and dashboard setup</li>
                  <li>• User management practice</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1">View Details</Button>
              <Button size="sm" variant="outline" className="flex-1">Demo</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Salesforce Projects</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Practice org implementations</li>
                <li>• Custom workflow solutions</li>
                <li>• Data migration projects</li>
                <li>• User training materials</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Python Projects</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
