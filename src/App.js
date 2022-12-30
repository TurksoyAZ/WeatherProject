import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Weather from "./Component/Weather";

function App() {
  const key = "62cc85cc94f157e4e825508bd6f9dcdd";
  const [city, setCity] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
      if (search === '') {
        return setCity('')
      }
    }
    getApi();
  }, [search]);

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />

        {city && <Weather city={city} />}
      </div>
    </div>
  );
}

export default App;
