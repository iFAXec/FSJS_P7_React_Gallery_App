import apiKey from "./config";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//App Components
import Sunsets from "./components/Sunsets";
import Mountains from "./components/Mountains"
import Waterfalls from "./components/Waterfalls"
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from './components/PhotoContainer';


function App() {

  const [Sunset, setSunset] = useState([]);
  const [Mountain, setMountain] = useState([]);
  const [Waterfall, setWaterfall] = useState([]);
  const [Query, setQuery] = useState("");

  const handleSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  }


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f88771aee37a38bdf3152e58f217fd03&tags=%22sunset%22&&text=${Query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setSunset(responseData.photos.photo))
      .catch(error => console.log(("Error fetching and parsing data", error)))

  }, [Query]);


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f88771aee37a38bdf3152e58f217fd03&tags=%22mountains%22&text=${Query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setMountain(responseData.photos.photo))
      .catch(error => console.log(("Error fetching and parsing data", error)))

  }, [Query]);


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f88771aee37a38bdf3152e58f217fd03&tags=%22waterfalls%22&text=${Query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setWaterfall(responseData.photos.photo))
      .catch(error => console.log(("Error fetching and parsing data", error)))

  }, [Query]);


  return (
    <div className="container">

      <SearchForm searchQuery={handleSearchQuery} />
      <Nav />
      <Routes>
        <Route path="sunsets" element={<Sunsets />} />
        <Route path="mountains" element={<Mountains />} />
        <Route path="waterfalls" element={<Waterfalls />} />
      </Routes>

    </div>
  );
}

export default App;





