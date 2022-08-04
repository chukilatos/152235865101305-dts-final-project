// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Cards from "./components/Cards"
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import CardListItem from "./components/CardListitem";


const App = () => {
  const [berita, setBerita] = useState([]);
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const fetchBeritaAll = await axios.get('https://api-berita-indonesia.vercel.app/cnn/terbaru/');
        console.log(fetchBeritaAll.data.data.posts);
        setBerita(fetchBeritaAll.data.data.posts);
      } catch (error) {

      }
    }
    fetchBerita();
  }, []);

  return (
    <><Navbar />
      <HeroSlider />
      <div >
        <Row key='row1' style={{ padding: "30px" }} xs={1} md={4}>
          {
            berita.map((berita, index) => (
              index < 4 ?
                <Cards key={berita.title} berita={berita} /> : ''
            ))
          }
        </Row>
        <div>
          <h3 style={{ marginLeft: "30px" }}>BERITA TERKINI</h3>
          <br />
        </div>

        <div className="row">
          <div className="col-md-8">
            {
              berita.map((berita, index) => (
                index > 4 && index < 9 ?

                  <CardList key={berita.title} berita={berita} /> : ''
              ))
            }
          </div>
          <div className="col-md-4">
            <p style={{marginLeft: '15px', fontSize:'20px', fontWeight:'bold'}}>TERPOPULER</p>
            {
              berita.map((berita, index) => (
                index > 10 && index < 15 ?

                  <CardListItem key={berita.title} berita={berita} /> : ''
              ))
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
