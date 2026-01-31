import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="text-center max-w-md">
        
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">
          404
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          Sorry, this page doesn’t exist.
        </p>

        <div className="flex gap-4 justify-center">
          
          {/* Home Button */}
          <Link to="/">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">
              Go Home
            </button>
          </Link>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100"
          >
            Go Back
          </button>

        </div>
      </div>
    </div>
  );
};

export default NotFound;

