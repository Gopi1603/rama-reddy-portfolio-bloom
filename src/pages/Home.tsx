
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, User, Contact } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-8 sm:py-12 lg:py-20">
        <div className="space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Pedaviti Rama Krishna Reddy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
            Aspiring Salesforce Admin & Python Developer
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about automation, data management, and building efficient solutions 
            that drive business growth and digital transformation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto">
            <Link to="/projects">
              <Briefcase className="mr-2 h-5 w-5" />
              View Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto">
            <Link to="/contact">
              <Contact className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4">
        <Card className="text-center">
          <CardContent className="p-6 sm:p-8">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Salesforce Admin</h3>
            <p className="text-muted-foreground">
              Streamlining business processes and maximizing CRM potential
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6 sm:p-8">
            <div className="text-3xl mb-4">🐍</div>
            <h3 className="text-xl font-semibold mb-3">Python Developer</h3>
            <p className="text-muted-foreground">
              Building automation tools and data-driven applications
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6 sm:p-8">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3">Problem Solver</h3>
            <p className="text-muted-foreground">
              Turning complex challenges into simple, effective solutions
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-secondary p-8 sm:p-10 lg:p-12 mx-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
          Ready to Collaborate?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base sm:text-lg">
          I'm actively seeking opportunities to apply my skills in Salesforce administration 
          and Python development. Let's discuss how I can contribute to your team's success.
        </p>
        <Button asChild size="lg" className="px-6 sm:px-8 py-3 text-base font-medium">
          <Link to="/about">
            <User className="mr-2 h-5 w-5" />
            Learn More About Me
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default Home;
