import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl md:text-9xl font-bold text-teal-600 font-montserratAlt">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-4 mb-4 font-montserratAlt">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 font-inter">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
