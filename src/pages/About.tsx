
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Languages, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
        <p className="text-lg text-muted-foreground">
          Passionate about technology and continuous learning
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            I am an aspiring Salesforce Administrator and Python Developer with a strong foundation in technology 
            and a passion for creating efficient solutions. Currently pursuing opportunities to apply my skills 
            in CRM administration, automation, and software development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal is to leverage technology to streamline business processes and contribute to organizational 
            growth through effective Salesforce administration and Python development projects.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Background
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <GraduationCap className="h-4 w-4" />
                  Education
                </h4>
                <p className="text-sm text-muted-foreground">Computer Science Graduate</p>
              </div>
              <div>
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </h4>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
              <div>
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <Languages className="h-4 w-4" />
                  Languages
                </h4>
                <p className="text-sm text-muted-foreground">English, Hindi, Telugu</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests & Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Professional Interests</h4>
                <p className="text-sm text-muted-foreground">
                  Salesforce Administration, Python Development, Automation, Data Management
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Personal Interests</h4>
                <p className="text-sm text-muted-foreground">
                  Technology Innovation, Continuous Learning, Problem Solving
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Core Values</h4>
                <p className="text-sm text-muted-foreground">
                  Integrity, Excellence, Continuous Improvement, Collaboration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Career Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <h4 className="font-medium">Present - Seeking Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                Actively pursuing roles in Salesforce Administration and Python Development
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <h4 className="font-medium">Learning Phase</h4>
              <p className="text-sm text-muted-foreground">
                Developing expertise through certifications and hands-on projects
              </p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <h4 className="font-medium">Foundation</h4>
              <p className="text-sm text-muted-foreground">
                Built strong technical foundation through computer science education
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
