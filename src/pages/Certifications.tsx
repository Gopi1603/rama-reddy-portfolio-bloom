
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, Clock } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Certifications & Learning</h1>
        <p className="text-lg text-black dark:text-white">
          Professional certifications and continuous learning achievements
        </p>
      </div>

      <div className="space-y-6">
        <Card className="bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-black dark:text-white">
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5 text-black dark:text-white" />
                Salesforce Certifications
              </span>
              <Badge variant="outline" className="flex items-center gap-1 bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">
                <Clock className="h-3 w-3 text-black dark:text-white" />
                In Progress
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-black dark:border-white pl-4">
                <h4 className="font-medium flex items-center gap-2 text-black dark:text-white">
                  Salesforce Certified Administrator (ADM-201)
                  <Badge variant="secondary" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Target Certification</Badge>
                </h4>
                <p className="text-sm text-black dark:text-white mt-1">
                  Comprehensive certification covering core Salesforce administration skills
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">User Management</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Data Management</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Security</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Automation</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-black dark:border-white pl-4">
                <h4 className="font-medium flex items-center gap-2 text-black dark:text-white">
                  Salesforce Platform App Builder
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Future Goal</Badge>
                </h4>
                <p className="text-sm text-black dark:text-white mt-1">
                  Advanced certification for custom application development on Salesforce platform
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-black dark:text-white">
              <Award className="h-5 w-5 text-black dark:text-white" />
              Python Certifications & Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-black dark:border-white pl-4">
                <h4 className="font-medium flex items-center gap-2 text-black dark:text-white">
                  Python Programming Fundamentals
                  <Badge variant="secondary" className="text-xs flex items-center gap-1 bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">
                    <CheckCircle className="h-3 w-3 text-black dark:text-white" />
                    Completed
                  </Badge>
                </h4>
                <p className="text-sm text-black dark:text-white mt-1">
                  Comprehensive foundation in Python programming concepts and applications
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Core Python</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">OOP</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Data Structures</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">File Handling</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-black dark:border-white pl-4">
                <h4 className="font-medium flex items-center gap-2 text-black dark:text-white">
                  Web Development with Python
                  <Badge variant="secondary" className="text-xs flex items-center gap-1 bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">
                    <CheckCircle className="h-3 w-3 text-black dark:text-white" />
                    Completed
                  </Badge>
                </h4>
                <p className="text-sm text-black dark:text-white mt-1">
                  Advanced course covering web frameworks and application development
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Django</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Flask</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Web APIs</Badge>
                </div>
              </div>

              <div className="border-l-4 border-black dark:border-white pl-4">
                <h4 className="font-medium flex items-center gap-2 text-black dark:text-white">
                  Data Analysis with Python
                  <Badge variant="secondary" className="text-xs flex items-center gap-1 bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">
                    <CheckCircle className="h-3 w-3 text-black dark:text-white" />
                    Completed
                  </Badge>
                </h4>
                <p className="text-sm text-black dark:text-white mt-1">
                  Specialized training in data manipulation and analysis using Python libraries
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Pandas</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">NumPy</Badge>
                  <Badge variant="outline" className="text-xs bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white">Data Visualization</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Certification Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-black dark:text-white">Salesforce</h4>
                <ul className="space-y-2 text-sm text-black dark:text-white">
                  <li>• Official Salesforce Training Platform</li>
                  <li>• Trailhead Learning Paths</li>
                  <li>• Hands-on Practice Orgs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-black dark:text-white">Python Education</h4>
                <ul className="space-y-2 text-sm text-black dark:text-white">
                  <li>• Online Learning Platforms</li>
                  <li>• Practical Project-based Learning</li>
                  <li>• Community-driven Resources</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Learning Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-black dark:text-white">Short-term Goals (Next 6 months)</h4>
                <ul className="text-sm text-black dark:text-white space-y-1 mt-2">
                  <li>• Complete Salesforce Administrator certification</li>
                  <li>• Advanced Python web development skills</li>
                  <li>• Build portfolio of practical projects</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-black dark:text-white">Long-term Goals (1-2 years)</h4>
                <ul className="text-sm text-black dark:text-white space-y-1 mt-2">
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
