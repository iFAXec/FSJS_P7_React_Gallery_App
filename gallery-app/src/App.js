import apiKey from "./config";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//App Components
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from './components/PhotoContainer';



function App() {

  const [photo, setPhoto] = useState([]);
  const [sunset, setSunset] = useState([]);
  const [mountain, setMountain] = useState([]);
  const [waterfall, setWaterfall] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  }


  useEffect(() => {

    let activeFetch = true;

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {

        if (activeFetch) {
          setPhoto(responseData.photos.photo)
        }
      })

      .catch(error => console.log(("Error fetching and parsing data", error)));


    return () => { activeFetch = false }
  }
    , [query]);


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
        <Route path="/" element={<PhotoContainer data={photo} />} />
        <Route path="/sunsets" element={<PhotoContainer data={sunset} />} />
        <Route path="/mountains" element={<PhotoContainer data={mountain} />} />
        <Route path="/waterfalls" element={<PhotoContainer data={waterfall} />} />
      </Routes>

    </div>
  );
}

export default App;





