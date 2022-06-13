import HeroInfo from "./components/HeroInfo";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import AllList from "./components/AllList";
import SubHeader from "./components/SubHeader";
import LocationList from "./components/LocationList";

function App() {
  const API_URL = 'https://temtem-api.mael.tech/api/temtems';

  const [tem, setTem] = useState({});
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [luma, setLuma] = useState(false);
  const [pages, setPages] = useState([]);
  const [isPagesLoading, setPagesLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState(false);

  const numPerPage = 10;
  const numLastPage = items.length % numPerPage;
  const numPages = Math.ceil(items.length / numPerPage);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not recieve expected data');
        const listItems = await response.json();
        setItems(listItems);
        setTem(listItems[0]);
        makePages(listItems);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();

  }, [])

  const handleLuma = (bool) => {
    setLuma(bool);
  }

  const changeTem = (number) => {
    setError(false);
    console.log(number);
    console.log(items[number - 1]);
    setTem(items[number - 1]);
  }

  const makePages = (listItems) => {
      const list = [];
      for(let i = 0; i < listItems.length; i += numPerPage)
      {
          const page = listItems.slice(i, i + numPerPage);
          list.push(page)
      }
      setPages(list);
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
        setError={setError}
        error={error}
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

      <div className="flex-col flex justify-start items-center mt-20 py-6 min-h-[1300px]">  
        <h1 className='font-bold text-3xl text-center'>All Temtem</h1>
        { !isLoading && 
        <AllList 
          itemList={items}
          handleListClick={changeTem}
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> }
      </div>

      <Footer />
    </div>
  );
}

export default App;
