import Footer from "./components/footer";
import Header from "./components/header";
import HotelListing from "./components/hotelList";
import './styles/custom.scss';
import './styles/footer.scss'

function App() {
  return (
    <>
      <Header />
      <HotelListing />
      <Footer />
    </>
  );
}

export default App;
