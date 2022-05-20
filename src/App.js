
import { useState } from 'react';
import GoogleMap from './GoogleMap';
import './style.css';

function App() {
  const [value, setValue] = useState('');

  const handleLocationInput = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleInputChange = e => {
    e.preventDefault();
    setValue(e.target.value)
  };

  return (
    <div className="App">
      {/* <form onSubmit={handleLocationInput}>
      <h1>Enter your desired location</h1>
        <input type='text' id='locationInput' placeholder='Type here' value={value} onChange={handleInputChange}/>
        <input type='submit' value='Submit' /> */}
      {/* </form> */}
      <GoogleMap/>
    </div>
  );
}

export default App;
