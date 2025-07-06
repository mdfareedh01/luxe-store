
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';

const HotDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      title: "MacBook Pro 14\"",
      originalPrice: "$2,399",
      salePrice: "$1,899",
      discount: "21%",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Premium Headphones",
      originalPrice: "$399",
      salePrice: "$299", 
      discount: "25%",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Smart Watch Series",
      originalPrice: "$599",
      salePrice: "$449",
      discount: "25%",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="deals" className="py-20 bg-gradient-to-r from-red-500 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">🔥 Hot Deals</h2>
          <p className="text-xl opacity-90 mb-8">Limited time offers - Don't miss out!</p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm opacity-80">Seconds</div>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
              <div className="relative mb-4">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  -{deal.discount} OFF
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold">{deal.salePrice}</span>
                <span className="text-lg line-through opacity-60">{deal.originalPrice}</span>
              </div>
              
              <Button 
                className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Grab Deal Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;