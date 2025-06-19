
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
   <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
     
      <Header />
      <main className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
