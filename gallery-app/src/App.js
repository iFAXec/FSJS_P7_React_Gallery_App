import apiKey from "./config";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//App Components
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from './components/PhotoContainer';
import NotFound404 from "./components/NotFound404"



function App() {

  const [photo, setPhoto] = useState([]);
  const [sunset, setSunset] = useState([]);
  const [mountain, setMountain] = useState([]);
  const [waterfall, setWaterfall] = useState([]);
  const [query, setQuery] = useState("Plane");
  const [loading, setLoading] = useState(true);




  const handleSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  }


  useEffect(() => {

    setLoading(true)
    let activeFetch = true;

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {

        if (activeFetch) {
          setLoading(false);
          setPhoto(responseData.photos.photo);
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
      .catch(error => console.log("Error fetching and parsing data", error))

  }, []);


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22mountains%22&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setMountain(responseData.photos.photo))
      .catch(error => console.log("Error fetching and parsing data", error))

  }, []);


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22waterfalls%22&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setWaterfall(responseData.photos.photo))
      .catch(error => console.log("Error fetching and parsing data", error))

  }, []);


  return (
    <div className="container">

      <SearchForm searchQuery={handleSearchQuery} />
      <Nav />
      {loading
        ?
        <p> <strong>Loading...</strong></p>

        :

        <Routes>
          <Route path="/" element={<PhotoContainer data={photo} />} />
          <Route path="/sunsets" element={<PhotoContainer data={sunset} />} />
          <Route path="/mountains" element={<PhotoContainer data={mountain} />} />
          <Route path="/waterfalls" element={<PhotoContainer data={waterfall} />} />
          <Route path="/:searchTerm" element={<PhotoContainer data={photo} />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>

      }

    </div>
  );
}

export default App;





