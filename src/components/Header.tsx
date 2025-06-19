
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Home, User, Briefcase, Star, Contact, Book, List, Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/skills', label: 'Skills', icon: Star },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/certifications', label: 'Certifications', icon: Book },
    { path: '/contact', label: 'Contact', icon: Contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="font-semibold text-xl text-primary">PKRR</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                location.pathname === path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
              {location.pathname === path && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-9 w-9 p-0 hover:bg-accent"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden h-9 w-9 p-0 hover:bg-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-6 px-6">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === path
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
