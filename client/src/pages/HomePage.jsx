import CategoryPills from "../components/homePage/Categorypills";
import Footer from "../components/homePage/Footer";
import Hero from "../components/homePage/Hero";
import Navbar from "../components/homePage/Navbar";
import ProductGrid from "../components/homePage/Productgrid";
import WhyShopara from "../components/homePage/WhyShopora";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CategoryPills />
      <ProductGrid />
      <WhyShopara />
      <Footer />
    </div>
  );
};

export default HomePage;