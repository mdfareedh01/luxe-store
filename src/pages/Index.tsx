import Hero from '@/components/Hero';
import Navbar from '../components/Navbar';
import HotDeals from '@/components/HotDeals';
import Products from '@/components/Products';
import About from '@/components/About';
import { Contact } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HotDeals />
      <Products />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
