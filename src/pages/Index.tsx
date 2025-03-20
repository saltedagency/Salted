
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard with a slight delay to ensure smooth transition
    const redirectTimer = setTimeout(() => {
      navigate("/dashboard");
    }, 100);
    
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="animate-pulse text-primary">
        Loading DripGuard Analytics...
      </div>
    </div>
  );
};

export default Index;
