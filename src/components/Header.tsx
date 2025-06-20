
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Home, User, Briefcase, Star, Contact, Book, Menu, X, Moon, Sun } from 'lucide-react';

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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b !border-black dark:!border-white !bg-white dark:!bg-black">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-bold text-xl !text-black dark:!text-white hover:opacity-70 transition-opacity">
          RK
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 !text-black dark:!text-white hover:!bg-black hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors ${
                location.pathname === path
                  ? 'border-b-2 !border-black dark:!border-white'
                  : ''
              }`}
            >
              <Icon className="h-4 w-4 !text-black dark:!text-white" />
              <span className="!text-black dark:!text-white">{label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-9 w-9 p-0 !text-black dark:!text-white hover:!bg-black hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4 !text-black dark:!text-white" />
            ) : (
              <Sun className="h-4 w-4 !text-black dark:!text-white" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden h-9 w-9 p-0 !text-black dark:!text-white hover:!bg-black hover:!text-white dark:hover:!bg-white dark:hover:!text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4 !text-black dark:!text-white" />
            ) : (
              <Menu className="h-4 w-4 !text-black dark:!text-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 mobile-menu">
          <div className="!bg-white dark:!bg-black h-full border-t !border-black dark:!border-white">
            <nav className="p-6 space-y-2 mobile-nav">



{navItems.map(({ path, label, icon: Icon }) => (
  <Link
    key={path}
    to={path}
    onClick={() => setIsMobileMenuOpen(false)}
    className={`flex items-center space-x-3 px-4 py-3 text-base font-medium rounded transition-colors ${
      location.pathname === path
        ? 'bg-black text-white dark:bg-white dark:text-black'
        : 'text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
    }`}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </Link>
))}





            </nav>
          </div>
          <div
            className="absolute inset-0 bg-black/20 -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
