
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          A showcase of my work in Salesforce administration and Python development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card Template */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">Salesforce Project #1</CardTitle>
            <p className="text-sm text-muted-foreground">// Add project description</p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Salesforce</Badge>
                  <Badge variant="secondary" className="text-xs">// Add technologies</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• // Add key feature 1</li>
                  <li>• // Add key feature 2</li>
                  <li>• // Add key feature 3</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="flex-1">View Details</Button>
              <Button size="sm" variant="outline" className="flex-1">Live Demo</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">Python Project #1</CardTitle>
            <p className="text-sm text-muted-foreground">// Add project description</p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">// Add technologies</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• // Add key feature 1</li>
                  <li>• // Add key feature 2</li>
                  <li>• // Add key feature 3</li>
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
            <CardTitle className="text-lg">Integration Project</CardTitle>
            <p className="text-sm text-muted-foreground">// Add project description</p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-medium text-sm mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Salesforce</Badge>
                  <Badge variant="secondary" className="text-xs">Python</Badge>
                  <Badge variant="secondary" className="text-xs">// Add technologies</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Key Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• // Add key feature 1</li>
                  <li>• // Add key feature 2</li>
                  <li>• // Add key feature 3</li>
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
                <li>• // Add Salesforce project type 1</li>
                <li>• // Add Salesforce project type 2</li>
                <li>• // Add Salesforce project type 3</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Python Projects</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• // Add Python project type 1</li>
                <li>• // Add Python project type 2</li>
                <li>• // Add Python project type 3</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
