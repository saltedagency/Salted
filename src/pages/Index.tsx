
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard with a slight delay to ensure smooth transition
    const redirectTimer = setTimeout(() => {
      navigate("/dashboard");
    }, 800);
    
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Sal+ed
      </div>
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute top-1 left-1 w-14 h-14 rounded-full border-4 border-t-transparent border-r-primary border-b-transparent border-l-transparent animate-spin animation-delay-200" style={{ animationDuration: '1.5s' }}></div>
        <div className="absolute top-2 left-2 w-12 h-12 rounded-full border-4 border-t-transparent border-r-transparent border-b-primary border-l-transparent animate-spin animation-delay-400" style={{ animationDuration: '2s' }}></div>
      </div>
      <p className="text-muted-foreground text-lg">
        Loading your analytics dashboard...
      </p>
    </div>
  );
};

export default Index;
