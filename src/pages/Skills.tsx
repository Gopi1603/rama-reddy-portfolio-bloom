
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h1>
        <p className="text-lg text-muted-foreground">
          Technical skills and competencies I'm developing and mastering
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>⚡</span>
              Salesforce Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Core Admin Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {/* Add Salesforce skill badges here */}
                  <Badge variant="secondary">User Management</Badge>
                  <Badge variant="secondary">Data Management</Badge>
                  <Badge variant="secondary">Security & Access</Badge>
                  <Badge variant="secondary">Workflow Automation</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Platform Features</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">// Add platform feature skills</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>🐍</span>
              Python Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">Core Python</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Object-Oriented Programming</Badge>
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">File Handling</Badge>
                  <Badge variant="secondary">Error Handling</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Libraries & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">// Add Python libraries/frameworks</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Additional Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3">Database & Data</h4>
              <div className="space-y-2">
                <Badge variant="outline">// Add database skills</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Development Tools</h4>
              <div className="space-y-2">
                <Badge variant="outline">// Add development tools</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Soft Skills</h4>
              <div className="space-y-2">
                <Badge variant="outline">Problem Solving</Badge>
                <Badge variant="outline">Critical Thinking</Badge>
                <Badge variant="outline">Team Collaboration</Badge>
                <Badge variant="outline">Communication</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Learning & Development</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Currently Learning</h4>
              <p className="text-sm text-muted-foreground">// Add current learning focus areas</p>
            </div>
            <div>
              <h4 className="font-medium">Next Goals</h4>
              <p className="text-sm text-muted-foreground">// Add upcoming skill development goals</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
