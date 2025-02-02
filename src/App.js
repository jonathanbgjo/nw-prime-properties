import './App.css';
import Header from './Header';
import Location from './Location';
import Tenants from './Tenants';
import Contact from './Contact';
import ImageGallery from './Gallery';
import Banner from './Banner';
import MapComponent from './Map';
function App() {
  return (
    <div className="App">
      <Banner />
      <MapComponent />
      <Header />
      <ImageGallery />
      <Location />
      <Tenants />
      <Contact />
    </div>
  );
}
export default App;
