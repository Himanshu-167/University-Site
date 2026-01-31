import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist. Please check the URL or navigate back to the home page.
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => navigate("/")}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Go Home
          </Button>
          <Button 
            onClick={() => navigate(-1)}
            variant="outline"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
