
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Ready to discuss opportunities or collaborate on projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-muted-foreground">// Add email address</p>
            </div>
            
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-muted-foreground">// Add phone number</p>
            </div>
            
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">// Add location</p>
            </div>
            
            <div>
              <h4 className="font-medium">LinkedIn</h4>
              <p className="text-muted-foreground">// Add LinkedIn profile</p>
            </div>
            
            <div>
              <h4 className="font-medium">GitHub</h4>
              <p className="text-muted-foreground">// Add GitHub profile</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  className="min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              I'm always interested in new opportunities, collaborations, and connections. 
              Whether you have a project in mind, want to discuss Salesforce or Python development, 
              or just want to network, I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Download Resume</Button>
              <Button variant="outline">View LinkedIn</Button>
              <Button variant="outline">GitHub Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
