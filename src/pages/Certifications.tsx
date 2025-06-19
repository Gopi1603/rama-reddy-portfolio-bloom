
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
              <span>Salesforce Certifications</span>
              <Badge variant="outline">In Progress</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-medium">Salesforce Certified Administrator (ADM-201)</h4>
                <p className="text-sm text-muted-foreground">// Add certification status and details</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">Core Admin Skills</Badge>
                  <Badge variant="secondary">Data Management</Badge>
                  <Badge variant="secondary">Security</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-medium">Salesforce Platform App Builder</h4>
                <p className="text-sm text-muted-foreground">// Add future certification plans</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Python Certifications & Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium">Python Programming Certification</h4>
                <p className="text-sm text-muted-foreground">// Add Python certification details</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">Core Python</Badge>
                  <Badge variant="secondary">OOP</Badge>
                  <Badge variant="secondary">Data Structures</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-medium">Advanced Python Development</h4>
                <p className="text-sm text-muted-foreground">// Add advanced course details</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Online Learning Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-3">Completed Courses</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">// Add course name</span>
                    <Badge variant="outline" className="text-xs">Completed</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">// Add course name</span>
                    <Badge variant="outline" className="text-xs">Completed</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">In Progress</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">// Add current course</span>
                    <Badge variant="secondary" className="text-xs">70% Complete</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">// Add current course</span>
                    <Badge variant="secondary" className="text-xs">45% Complete</Badge>
                  </div>
                </div>
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
                  <li>• // Add short-term certification goal</li>
                  <li>• // Add short-term learning goal</li>
                  <li>• // Add practical application goal</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">Long-term Goals (1-2 years)</h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>• // Add long-term certification goal</li>
                  <li>• // Add advanced specialization goal</li>
                  <li>• // Add professional development goal</li>
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
