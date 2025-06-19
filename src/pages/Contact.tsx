
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Download, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Get In Touch</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Ready to discuss opportunities or collaborate on projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="hover-lift animate-slide-up">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 group">
              <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground break-all">pedavitiramakrihsna@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group">
              <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group">
              <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group">
              <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <p className="text-muted-foreground break-all">linkedin.com/in/pedaviti-rama-krishna</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group">
              <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div>
                <h4 className="font-medium">GitHub</h4>
                <p className="text-muted-foreground break-all">github.com/pedavitiramakrihsna</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift animate-slide-up animate-delay-100">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`transition-all duration-300 ${errors.firstName ? 'border-destructive focus:border-destructive' : 'focus:border-primary'}`}
                  />
                  {errors.firstName && (
                    <div className="flex items-center gap-1 mt-1 text-sm text-destructive animate-fade-in">
                      <AlertCircle className="h-3 w-3" />
                      {errors.firstName}
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`transition-all duration-300 ${errors.lastName ? 'border-destructive focus:border-destructive' : 'focus:border-primary'}`}
                  />
                  {errors.lastName && (
                    <div className="flex items-center gap-1 mt-1 text-sm text-destructive animate-fade-in">
                      <AlertCircle className="h-3 w-3" />
                      {errors.lastName}
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`transition-all duration-300 ${errors.email ? 'border-destructive focus:border-destructive' : 'focus:border-primary'}`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive animate-fade-in">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className={`transition-all duration-300 ${errors.subject ? 'border-destructive focus:border-destructive' : 'focus:border-primary'}`}
                />
                {errors.subject && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive animate-fade-in">
                    <AlertCircle className="h-3 w-3" />
                    {errors.subject}
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  className={`min-h-[120px] transition-all duration-300 ${errors.message ? 'border-destructive focus:border-destructive' : 'focus:border-primary'}`}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
                {errors.message && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive animate-fade-in">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </div>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md text-green-700 dark:text-green-300 animate-fade-in">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">Message sent successfully!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md text-red-700 dark:text-red-300 animate-fade-in">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">Failed to send message.Please try again.</span>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full btn-hover"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card className="animate-slide-up animate-delay-200">
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm actively seeking opportunities in Salesforce Administration and Python Development. 
              Whether you have a project in mind, want to discuss technical solutions, 
              or are looking for a dedicated team member, I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="btn-hover flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="btn-hover flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                View LinkedIn
              </Button>
              <Button variant="outline" className="btn-hover flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
