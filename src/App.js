
import { useState } from 'react';
import GoogleMap from './GoogleMap';
import PlacesSearch from './PlacesSearch';
import './style.css';

function App() {
  const [location, setLocation] = useState();

  return (
    <div className="App">
      <PlacesSearch setLocation={setLocation} />
      <GoogleMap location={location} />
    </div>
  );
}

export default App;
