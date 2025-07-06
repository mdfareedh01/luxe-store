import { Button } from '../components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Discover
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Premium
              </span>
              Collections
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Elevate your style with our curated selection of luxury products. 
              Experience quality, elegance, and innovation in every piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop&crop=center" 
                  alt="Premium Product" 
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Laptop Collection</h3>
                  <p className="text-gray-600 mb-4">Starting from $1,299</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;