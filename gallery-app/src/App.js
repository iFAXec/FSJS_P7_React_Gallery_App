import apiKey from "./config";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

//App Components
import Sunset from "./components/Sunset";
import Rainbow from "./components/Rainbow";
import Waterfall from "./components/Waterfall";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from './components/PhotoContainer';


function App() {

  const [Photos, setPhotos] = useState([]);
  const [Query, setQuery] = useState("");

  const handleSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  }




  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f88771aee37a38bdf3152e58f217fd03&tags=%22sunset%22%2C+%22waterfall%22%2C%22rainbow%22&text=${Query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => setPhotos(responseData.photos.photo))
      .catch(error => console.log(("Error fetching and parsing data", error)))

  }, [Query]);


  return (
    <div className="container">

      <SearchForm searchQuery={handleSearchQuery} />
      <Nav />
      <Routes>
        <Route path="/" element={<PhotoContainer data={Photos} />} />
        <Route path="sunset" element={<Sunset />} />
        <Route path="waterfall" element={<Waterfall />} />
        <Route path="rainbow" element={<Rainbow />} />
      </Routes>

    </div>
  );
}

export default App;





