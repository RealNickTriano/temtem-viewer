import HeroInfo from "./components/HeroInfo";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import AllList from "./components/AllList";

function App() {
  const API_URL = 'https://temtem-api.mael.tech/api/temtems';

  const [tem, setTem] = useState({});
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

    fetchItems();
  }, [])

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
      /> }

        <AllList 
          itemList={items}
        />

      <Footer />
    </div>
  );
}

export default App;
