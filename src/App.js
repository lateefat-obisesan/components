import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import bags from './image/bags.jpg';
import gowns from './image/gowns.jpg';
import hat from './image/hat.jpg';
import shirt from './image/shirt.jpg';

function App() {
  const navLinks = ["Home", "Gallery", "Shop", "Contact"];

  const bannerTitle = "LEPHINTON CROCHET";
  const bannerText = "Handcrafted crochet pieces made with love, stylish, cozy, and uniquely handmade for every soul.";

  const images = [bags, gowns, hat, shirt]

  return (
   <>
    <Header navLinks={navLinks}/>
    <Banner title={bannerTitle} text={bannerText}/>
    <Gallery images={images}/>
    <Footer/>
   </>
  );
}

export default App;
