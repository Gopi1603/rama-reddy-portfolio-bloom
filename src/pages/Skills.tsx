
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Settings, Cloud } from 'lucide-react';

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Skills & Expertise</h1>
        <p className="text-lg text-black dark:text-white">
          Technical skills and competencies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black dark:text-white">
              <Cloud className="h-5 w-5 text-black dark:text-white" />
              Salesforce Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-black dark:text-white">Core Admin Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">User Management</Badge>
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Data Management</Badge>
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Security & Access</Badge>
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Workflow Automation</Badge>
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Reports & Dashboards</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-black dark:text-white">Platform Features</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Process Builder</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Flow</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Lightning Experience</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Data Import/Export</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black dark:text-white">
              <Code className="h-5 w-5 text-black dark:text-white" />
              Frontend Developer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-black dark:text-white">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white"> HTML5, CSS3</Badge>
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Core JavaScript (ES6+)</Badge>
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">DOM Manipulation</Badge>
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Responsive Design</Badge>
                  <Badge variant="secondary" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white"> Accessibility (a11y)</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-black dark:text-white">Libraries & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white"> React.js</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Next.js (SSR & SSG)</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Tailwind CSS</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Headless UI</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-black border border-black dark:border-white">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">Additional Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2 text-black dark:text-white">
                <Database className="h-4 w-4 text-black dark:text-white" />
                Database & Data
              </h4>
              <div className="space-y-2">
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">SQL</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">MySQL</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Data Analysis</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">CSV/Excel</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2 text-black dark:text-white">
                <Settings className="h-4 w-4 text-black dark:text-white" />
                Development Tools
              </h4>
              <div className="space-y-2">
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Git</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">VS Code</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Linux</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Command Line</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-black dark:text-white">Soft Skills</h4>
              <div className="space-y-2">
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Problem Solving</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Critical Thinking</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Team Collaboration</Badge>
                <Badge variant="outline" className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Communication</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-black border border-black dark:border-white">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">Learning & Development</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-black dark:text-white">Currently Learning</h4>
              <p className="text-sm text-black dark:text-white">
                Advanced Salesforce Administration, Python web frameworks, API integrations
              </p>
            </div>
            <div>
              <h4 className="font-medium text-black dark:text-white">Next Goals</h4>
              <p className="text-sm text-black dark:text-white">
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
