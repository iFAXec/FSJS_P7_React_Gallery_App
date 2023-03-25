import apiKey from "./config";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//App Components
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from './components/PhotoContainer';



function App() {

  const [Photo, setPhoto] = useState([]);
  const [Sunset, setSunset] = useState([]);
  const [Mountain, setMountain] = useState([]);
  const [Waterfall, setWaterfall] = useState([]);
  const [Query, setQuery] = useState("");

  const handleSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  }


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${Query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json)
      .then(responseData => setPhoto(responseData.photos.photo))
      .catch(error => console.log(("Error fetching and parsing data", error)))

  }, [Query]);


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22sunset%22&&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setSunset(responseData.photos.photo))
      .catch(error => console.log(("Error fetching and parsing data", error)))

  }, []);


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22mountains%22&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setMountain(responseData.photos.photo))
      .catch(error => console.log(("Error fetching and parsing data", error)))

  }, []);


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22waterfalls%22&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setWaterfall(responseData.photos.photo))
      .catch(error => console.log(("Error fetching and parsing data", error)))

  }, []);


  return (
    <div className="container">

      <SearchForm searchQuery={handleSearchQuery} />
      <Nav />

      <Routes>
        <Route path="/" element={<PhotoContainer photoData={Photo} />} />
        <Route path="/sunsets" element={<PhotoContainer sunsetData={Sunset} />} />
        <Route path="/mountains" element={<PhotoContainer mountainData={Mountain} />} />
        <Route path="/waterfalls" element={<PhotoContainer waterfallData={Waterfall} />} />
      </Routes>

    </div>
  );
}

export default App;





