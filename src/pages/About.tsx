
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
        <p className="text-lg text-muted-foreground">
          Get to know the person behind the portfolio
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            // Add professional summary content here
          </p>
          <p className="text-muted-foreground leading-relaxed">
            // Add career objectives and aspirations
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Background</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Education</h4>
                <p className="text-sm text-muted-foreground">// Add education details</p>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-sm text-muted-foreground">// Add location information</p>
              </div>
              <div>
                <h4 className="font-medium">Languages</h4>
                <p className="text-sm text-muted-foreground">// Add language skills</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests & Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Professional Interests</h4>
                <p className="text-sm text-muted-foreground">// Add professional interests</p>
              </div>
              <div>
                <h4 className="font-medium">Personal Hobbies</h4>
                <p className="text-sm text-muted-foreground">// Add personal interests</p>
              </div>
              <div>
                <h4 className="font-medium">Core Values</h4>
                <p className="text-sm text-muted-foreground">// Add core values and principles</p>
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
              <h4 className="font-medium">Present</h4>
              <p className="text-sm text-muted-foreground">// Add current status and goals</p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <h4 className="font-medium">Learning Phase</h4>
              <p className="text-sm text-muted-foreground">// Add learning journey details</p>
            </div>
            <div className="border-l-2 border-muted pl-4">
              <h4 className="font-medium">Foundation</h4>
              <p className="text-sm text-muted-foreground">// Add early career/education foundation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
