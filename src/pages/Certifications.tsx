
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, Clock } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Certifications & Learning</h1>
        <p className="text-lg text-muted-foreground">
          Professional certifications and continuous learning achievements
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Salesforce Certifications
              </span>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                In Progress
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-medium flex items-center gap-2">
                  Salesforce Certified Administrator (ADM-201)
                  <Badge variant="secondary" className="text-xs">Target Certification</Badge>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Comprehensive certification covering core Salesforce administration skills
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">User Management</Badge>
                  <Badge variant="outline" className="text-xs">Data Management</Badge>
                  <Badge variant="outline" className="text-xs">Security</Badge>
                  <Badge variant="outline" className="text-xs">Automation</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-muted pl-4">
                <h4 className="font-medium flex items-center gap-2">
                  Salesforce Platform App Builder
                  <Badge variant="outline" className="text-xs">Future Goal</Badge>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Advanced certification for custom application development on Salesforce platform
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Python Certifications & Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium flex items-center gap-2">
                  Python Programming Fundamentals
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Completed
                  </Badge>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Comprehensive foundation in Python programming concepts and applications
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">Core Python</Badge>
                  <Badge variant="outline" className="text-xs">OOP</Badge>
                  <Badge variant="outline" className="text-xs">Data Structures</Badge>
                  <Badge variant="outline" className="text-xs">File Handling</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium flex items-center gap-2">
                  Web Development with Python
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Completed
                  </Badge>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Advanced course covering web frameworks and application development
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">Django</Badge>
                  <Badge variant="outline" className="text-xs">Flask</Badge>
                  <Badge variant="outline" className="text-xs">Web APIs</Badge>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium flex items-center gap-2">
                  Data Analysis with Python
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Completed
                  </Badge>
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Specialized training in data manipulation and analysis using Python libraries
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">Pandas</Badge>
                  <Badge variant="outline" className="text-xs">NumPy</Badge>
                  <Badge variant="outline" className="text-xs">Data Visualization</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certification Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Salesforce</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Official Salesforce Training Platform</li>
                  <li>• Trailhead Learning Paths</li>
                  <li>• Hands-on Practice Orgs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Python Education</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Online Learning Platforms</li>
                  <li>• Practical Project-based Learning</li>
                  <li>• Community-driven Resources</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Short-term Goals (Next 6 months)</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>• Complete Salesforce Administrator certification</li>
                  <li>• Advanced Python web development skills</li>
                  <li>• Build portfolio of practical projects</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">Long-term Goals (1-2 years)</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>• Salesforce Platform App Builder certification</li>
                  <li>• Advanced Salesforce specializations</li>
                  <li>• Full-stack Python development expertise</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certifications;
