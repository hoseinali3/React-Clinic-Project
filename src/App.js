import logo from './logo.svg';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';

import Route from './Routes/Routes';

import Navbar from './Components/Header/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {

  const router = useRoutes(Route)


  return (
    <div>
     
      <Navbar />
      <ScrollToTop />
    
      {router}

      <Footer />
    </div>
  );
}

export default App;
