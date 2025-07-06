
import { Button } from '../components/ui/button';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Laptop",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "$299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "Audio"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "$399",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      category: "Wearables"
    },
    {
      id: 4,
      name: "Tablet Pro",
      price: "$799",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
      category: "Electronics"
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: "$89",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      category: "Gaming"
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: "$149",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=300&fit=crop",
      category: "Gaming"
    }
  ];

  const categories = ["All", "Electronics", "Audio", "Wearables", "Gaming"];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium products designed for the modern lifestyle.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                category === "All"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 py-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    Quick View
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;