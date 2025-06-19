
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Star, Contact } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Pedaviti Rama Krishna Reddy
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Aspiring Salesforce Admin & Python Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about automation, data management, and building efficient solutions 
            that drive business growth and digital transformation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg">
            <Link to="/projects">
              <Briefcase className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              <Contact className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Salesforce Admin</h3>
            <p className="text-muted-foreground text-sm">
              Streamlining business processes and maximizing CRM potential
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl mb-2">🐍</div>
            <h3 className="text-lg font-semibold mb-2">Python Developer</h3>
            <p className="text-muted-foreground text-sm">
              Building automation tools and data-driven applications
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Problem Solver</h3>
            <p className="text-muted-foreground text-sm">
              Turning complex challenges into simple, effective solutions
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-accent/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm actively seeking opportunities to apply my skills in Salesforce administration 
          and Python development. Let's discuss how I can contribute to your team's success.
        </p>
        <Button asChild>
          <Link to="/about">
            <Star className="mr-2 h-4 w-4" />
            Learn More About Me
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default Home;
