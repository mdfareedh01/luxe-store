const About = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "1000+", label: "Products" },
    { number: "25+", label: "Countries" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "Cutting-edge technology and design innovation in every product we offer."
    },
    {
      icon: "⭐",
      title: "Quality",
      description: "Premium materials and rigorous quality control ensure lasting excellence."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving customers worldwide with fast, reliable shipping and support."
    },
    {
      icon: "💡",
      title: "Expertise",
      description: "Years of industry experience and deep product knowledge at your service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LUXE
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're passionate about bringing you the finest selection of premium products 
              that combine innovation, quality, and style. Our journey began with a simple 
              mission: to make luxury accessible and deliver exceptional experiences to our customers.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From cutting-edge electronics to lifestyle essentials, every product in our 
              collection is carefully curated to meet the highest standards of quality and design.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop" 
                alt="About Us" 
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;