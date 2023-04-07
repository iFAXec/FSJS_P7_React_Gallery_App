// Import all the dependencies 
import apiKey from "./config";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const searchQuery = path.replace("/search/", "");
    setQuery(searchQuery);

  }, [location.pathname]);


  /**
   *Helper function to handle search query
   *{@param}- handleSearchQuery takes search query as a parameter
   *set the query variable to the search term 
   */


  const handleSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  }

  /**
     * Initiate use Effect hook 
     * Fetch the images based on the search query
     * Parse data to json and extract the data
     */


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

  /**
    * Initiate use effect hook 
    * Fetch sunset images using url
    * Parse to json and extract the data    
    */

  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22sunset%22&&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setSunset(responseData.photos.photo))
      .catch(error => console.log("Error fetching and parsing data", error))

  }, []);

  /**
    * Initiate use effect hook 
    * Fetch mountain images using url
    * Parse to json and extract the data
   */


  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22mountains%22&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setMountain(responseData.photos.photo))
      .catch(error => console.log("Error fetching and parsing data", error))

  }, []);

  /**
    * Initiate use effect hook 
    * Fetch waterfall images using url
    * Parse to json and extract the data
   */

  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22waterfalls%22&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setWaterfall(responseData.photos.photo))
      .catch(error => console.log("Error fetching and parsing data", error))

  }, []);

  /**
   * Pass the Search component 
   * Pass the Nav component
   * Set specific path and pass the PhotoContainer component
   */

  return (
    <div className="container">

      <SearchForm searchQuery={handleSearchQuery} />
      <Nav />
      {loading
        ?
        <p> <strong>Loading...</strong></p>
        :
        <Routes>
          <Route path="/" element={<Navigate replace to="sunsets" />} />
          <Route path="/sunsets" element={<PhotoContainer data={sunset} />} />
          <Route path="/mountains" element={<PhotoContainer data={mountain} />} />
          <Route path="/waterfalls" element={<PhotoContainer data={waterfall} />} />
          <Route path="/search/:searchTerm" element={<PhotoContainer data={photo} />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>

      }

    </div>
  );
}

export default App;





