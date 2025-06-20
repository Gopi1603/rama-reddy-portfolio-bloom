
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you! Your message has been sent.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">Get In Touch</h1>
        <p className="text-base sm:text-lg text-black dark:text-white">
          Ready to discuss opportunities or collaborate on projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-black dark:text-white" />
              <div>
                <h4 className="font-medium text-black dark:text-white">Email</h4>
                <p className="text-black dark:text-white break-all">rk4053727@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-black dark:text-white" />
              <div>
                <h4 className="font-medium text-black dark:text-white">Phone</h4>
                <p className="text-black dark:text-white">+91 96183 41328</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-black dark:text-white" />
              <div>
                <h4 className="font-medium text-black dark:text-white">Location</h4>
                <p className="text-black dark:text-white">Khammam,Telangana,India.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-black dark:text-white" />
              <div>
                <h4 className="font-medium text-black dark:text-white">LinkedIn</h4>
                <p className="text-black dark:text-white break-all">https://www.linkedin.com/in/rama-krishna-reddy-717b82248/</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Github className="h-4 w-4 text-black dark:text-white" />
              <div>
                <h4 className="font-medium text-black dark:text-white">GitHub</h4>
                <p className="text-black dark:text-white break-all">https://github.com/Ramakrishna18code</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-black border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-black dark:text-white">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-black dark:text-white">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50"
                  />
                  {errors.firstName && <p className="text-black dark:text-white text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-black dark:text-white">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50"
                  />
                  {errors.lastName && <p className="text-black dark:text-white text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-black dark:text-white">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="rk4053727@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50"
                />
                {errors.email && <p className="text-black dark:text-white text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-black dark:text-white">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50"
                />
                {errors.subject && <p className="text-black dark:text-white text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-black dark:text-white">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  className="min-h-[120px] bg-white dark:bg-black border border-black dark:border-white text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
                {errors.message && <p className="text-black dark:text-white text-sm mt-1">{errors.message}</p>}
              </div>
              
              <Button type="submit" className="w-full bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-black border border-black dark:border-white">
        <CardHeader>
          <CardTitle className="text-black dark:text-white">Let's Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <p className="text-black dark:text-white">
              I'm actively seeking opportunities in Salesforce Administration and Python Development. 
              Whether you have a project in mind, want to discuss technical solutions, 
              or are looking for a dedicated team member, I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
  variant="outline"
  className="flex items-center gap-2 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
  onClick={() => window.open('https://drive.google.com/file/d/1v9vitlUacvuvqeJTv9Vvg6wNMZed5MaN/view?usp=sharing', '_blank')}
>
  <Download className="h-4 w-4" />
  Download Resume
</Button>

              <Button
  variant="outline"
  className="flex items-center gap-2 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
  onClick={() => window.open('https://www.linkedin.com/in/rama-krishna-reddy-717b82248/', '_blank')}
>
  <Linkedin className="h-4 w-4" />
  View LinkedIn
</Button>

              <Button
  variant="outline"
  className="flex items-center gap-2 bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
  onClick={() => window.open('https://github.com/Ramakrishna18code', '_blank')}
>
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
