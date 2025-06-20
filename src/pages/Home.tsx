
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, User, Contact, Download } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-8 sm:py-12 lg:py-20 animate-fade-in-up">
        <div className="space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold !text-black dark:!text-white">
            Pedaviti Rama Krishna Reddy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl !text-black dark:!text-white font-medium">
            Aspiring Salesforce Admin & Frontend Developer
          </p>
          <p className="text-base sm:text-lg !text-black dark:!text-white max-w-3xl mx-auto">
            Passionate about automation, data management, and building efficient solutions 
            that drive business growth and digital transformation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button asChild size="lg" className="px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto !bg-white !border !border-black !text-black hover:!bg-black hover:!text-white dark:!bg-black dark:!border-white dark:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors">
            <Link to="/projects">
              <Briefcase className="mr-2 h-5 w-5" />
              View Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto !bg-white !border !border-black !text-black hover:!bg-black hover:!text-white dark:!bg-black dark:!border-white dark:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors">
            <Link to="/contact">
              <Contact className="mr-2 h-5 w-5" />
              Get In Touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6 sm:px-8 py-3 text-base font-medium w-full sm:w-auto !bg-white !border !border-black !text-black hover:!bg-black hover:!text-white dark:!bg-black dark:!border-white dark:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors">
            <a href="https://drive.google.com/file/d/1v9vitlUacvuvqeJTv9Vvg6wNMZed5MaN/view?usp=sharing" download="Rama_Krishna_Reddy_Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 animate-slide-in-right animation-delay-200">
        <Card className="text-center !bg-white dark:!bg-black !border !border-black dark:!border-white hover:!bg-black hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors group">
          <CardContent className="p-6 sm:p-8">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3 !text-black dark:!text-white group-hover:!text-white dark:group-hover:!text-black">Salesforce Admin</h3>
            <p className="!text-black dark:!text-white group-hover:!text-white dark:group-hover:!text-black">
              Streamlining business processes and maximizing CRM potential
            </p>
          </CardContent>
        </Card>

       <Card className="text-center !bg-white dark:!bg-black !border !border-black dark:!border-white hover:!bg-black hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors group">
  <CardContent className="p-6 sm:p-8">
    <div className="text-3xl mb-4">🌐</div>
    <h3 className="text-xl font-semibold mb-3 !text-black dark:!text-white group-hover:!text-white dark:group-hover:!text-black">Frontend Developer</h3>
    <p className="!text-black dark:!text-white group-hover:!text-white dark:group-hover:!text-black">
      Creating responsive and user-friendly interfaces
    </p>
  </CardContent>
</Card>


        <Card className="text-center !bg-white dark:!bg-black !border !border-black dark:!border-white hover:!bg-black hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors group">
          <CardContent className="p-6 sm:p-8">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3 !text-black dark:!text-white group-hover:!text-white dark:group-hover:!text-black">Problem Solver</h3>
            <p className="!text-black dark:!text-white group-hover:!text-white dark:group-hover:!text-black">
              Turning complex challenges into simple, effective solutions
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center !bg-white dark:!bg-black !border !border-black dark:!border-white p-8 sm:p-10 lg:p-12 mx-4 hover:!bg-black hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors animate-fade-in-up animation-delay-300 group">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 !text-black dark:!text-white group-hover:!text-white dark:group-hover:!text-black">
          Ready to Collaborate?
        </h2>
        <p className="!text-black dark:!text-white group-hover:!text-white dark:group-hover:!text-black mb-8 max-w-2xl mx-auto text-base sm:text-lg">
          I'm actively seeking opportunities to apply my skills in Salesforce administration 
          and Python development. Let's discuss how I can contribute to your team's success.
        </p>
        <Button asChild size="lg" className="px-6 sm:px-8 py-3 text-base font-medium !bg-white !border !border-black !text-black hover:!bg-black hover:!text-white dark:!bg-black dark:!border-white dark:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors">
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
