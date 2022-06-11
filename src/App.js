import HeroInfo from "./components/HeroInfo";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import AllList from "./components/AllList";
import SubHeader from "./components/SubHeader";
import LocationList from "./components/LocationList";

function App() {
  const API_URL = 'https://temtem-api.mael.tech/api/temtems';
  const RENDER_API_URL = 'http://localhost:3001/api/renders';

  const [tem, setTem] = useState({});
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [luma, setLuma] = useState(false);
  const [renderItems, setRenderItems] = useState([]);
  const [render, setRender] = useState([]);
  const [isRenderLoading, setIsRenderLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not recieve expected data');
        const listItems = await response.json();
        setItems(listItems);
        setTem(listItems[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    const fetchRenders = async () => {
      try {
        const response = await fetch(RENDER_API_URL);
        if (!response.ok) throw Error('Did not recieve expected data');
        const renderItems = await response.json();
        setRenderItems(renderItems);
        setRender(renderItems[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsRenderLoading(false);
      }
    }

    fetchItems();
    fetchRenders();

    console.log(renderItems[0]);
  }, [])

  const handleLuma = (bool) => {
    setLuma(bool);
  }

  const changeTem = (number) => {
    console.log(number);
    console.log(items[number - 1]);
    setTem(items[number - 1]);
  }
  
  return (
    <div>
      <Navbar />

      { !isLoading && 
        <HeroInfo 
        item={tem}
        itemList={items}
        onClick={changeTem}
        handleLuma={handleLuma}
        luma={luma}
        render={render}
      /> }
      <div className="flex flex-col mt-10">
        <div className="w-44 mx-auto">
          <SubHeader 
            text='Places to Catch'
          />
        </div>
        <LocationList
          places={tem.locations && tem.locations.map(loc => (loc.location))}
        />
      </div>

        <AllList 
          itemList={items}
          handleListClick={changeTem}
        />

      <Footer />
    </div>
  );
}

export default App;
