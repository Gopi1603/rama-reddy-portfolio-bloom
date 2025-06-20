
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white">404</h1>
        <p className="text-xl md:text-2xl text-black dark:text-white mb-8">Oops! Page not found</p>
        <Button asChild className="bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
