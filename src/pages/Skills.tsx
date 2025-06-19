
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Settings, Cloud } from 'lucide-react';

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h1>
        <p className="text-lg text-muted-foreground">
          Technical skills and competencies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Salesforce Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Core Admin Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">User Management</Badge>
                  <Badge variant="secondary">Data Management</Badge>
                  <Badge variant="secondary">Security & Access</Badge>
                  <Badge variant="secondary">Workflow Automation</Badge>
                  <Badge variant="secondary">Reports & Dashboards</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Platform Features</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Process Builder</Badge>
                  <Badge variant="outline">Flow</Badge>
                  <Badge variant="outline">Lightning Experience</Badge>
                  <Badge variant="outline">Data Import/Export</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Python Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Core Python</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Object-Oriented Programming</Badge>
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">File Handling</Badge>
                  <Badge variant="secondary">Error Handling</Badge>
                  <Badge variant="secondary">Web Scraping</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Libraries & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Django</Badge>
                  <Badge variant="outline">Flask</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">Requests</Badge>
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
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Database className="h-4 w-4" />
                Database & Data
              </h4>
              <div className="space-y-2">
                <Badge variant="outline">SQL</Badge>
                <Badge variant="outline">MySQL</Badge>
                <Badge variant="outline">Data Analysis</Badge>
                <Badge variant="outline">CSV/Excel</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Development Tools
              </h4>
              <div className="space-y-2">
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">VS Code</Badge>
                <Badge variant="outline">Linux</Badge>
                <Badge variant="outline">Command Line</Badge>
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
              <p className="text-sm text-muted-foreground">
                Advanced Salesforce Administration, Python web frameworks, API integrations
              </p>
            </div>
            <div>
              <h4 className="font-medium">Next Goals</h4>
              <p className="text-sm text-muted-foreground">
                Salesforce Platform App Builder certification, Advanced Python development, Cloud technologies
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
