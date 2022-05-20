import { useState } from 'react';

 const PlacesSearch = ({ setLocation}) => {
  const [value, setValue] = useState('');

  const handleSubmitPlaces = (e) => {
    e.preventDefault();
    setLocation(value);
  };

  const handleInputChange = e => {
    e.preventDefault();
    setValue(e.target.value)
  };


  return (
    <form onSubmit={handleSubmitPlaces}>
      <label>Enter your desired location</label>
        <input 
          type='text' 
          id='locationInput' 
          placeholder='Type here' 
          value={value} 
          onChange={handleInputChange}
        />
        <input type='submit' value='Submit' />
    </form>
  )
}

export default PlacesSearch;
