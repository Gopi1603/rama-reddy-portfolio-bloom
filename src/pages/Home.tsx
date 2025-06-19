
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, User, Contact } from 'lucide-react';

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = [heroRef.current, cardsRef.current, ctaRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="text-center space-y-8 py-8 sm:py-12 lg:py-20 opacity-0 animate-fade-in"
      >
        <div className="space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-slide-up">
            Pedaviti Rama Krishna Reddy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium animate-slide-up animate-delay-100">
            Aspiring Salesforce Admin & Python Developer
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-200">
            Passionate about automation, data management, and building efficient solutions 
            that drive business growth and digital transformation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-scale-in animate-delay-300">
          <Button asChild size="lg" className="btn-hover px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto">
            <Link to="/projects">
              <Briefcase className="mr-2 h-5 w-5" />
              View Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="btn-hover px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto">
            <Link to="/contact">
              <Contact className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section 
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 opacity-0"
      >
        <Card className="text-center hover-lift transition-all duration-300 animate-slide-up">
          <CardContent className="p-6 sm:p-8">
            <div className="text-3xl mb-4 transition-transform duration-300 hover:scale-110">⚡</div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Salesforce Admin</h3>
            <p className="text-muted-foreground leading-relaxed">
              Streamlining business processes and maximizing CRM potential
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover-lift transition-all duration-300 animate-slide-up animate-delay-100">
          <CardContent className="p-6 sm:p-8">
            <div className="text-3xl mb-4 transition-transform duration-300 hover:scale-110">🐍</div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Python Developer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building automation tools and data-driven applications
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover-lift transition-all duration-300 animate-slide-up animate-delay-200">
          <CardContent className="p-6 sm:p-8">
            <div className="text-3xl mb-4 transition-transform duration-300 hover:scale-110">🚀</div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Problem Solver</h3>
            <p className="text-muted-foreground leading-relaxed">
              Turning complex challenges into simple, effective solutions
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className="text-center bg-secondary/50 rounded-2xl p-8 sm:p-10 lg:p-12 mx-4 opacity-0"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-foreground animate-slide-up">
          Ready to Collaborate?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed animate-slide-up animate-delay-100">
          I'm actively seeking opportunities to apply my skills in Salesforce administration 
          and Python development. Let's discuss how I can contribute to your team's success.
        </p>
        <Button asChild size="lg" className="btn-hover px-6 sm:px-8 py-3 text-base font-medium animate-scale-in animate-delay-200">
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
