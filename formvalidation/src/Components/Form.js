import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withGoogleMap(({ address }) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center (San Francisco)
  >
    {address && <Marker position={address} />}
  </GoogleMap>
));

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNO, setPhoneNo] = useState('');
  const [address, setAddress] = useState(null);
  const [sale, setSale] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [options, setOptions] = useState([]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleOptionClick = (selectedOption) => {
   
    console.log('Selected Option:', selectedOption);
  };

  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="App">
      <h1>Add new lead form</h1>
      <form>
        <label>
          Name <span className="required">*</span>
        </label>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

        <label>
          Email <span className="required">*</span>
        </label>
        <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Phone Number</label>
        <input type="text" placeholder="Enter your phone number" value={phoneNO} onChange={(e) => setPhoneNo(e.target.value)} />

        <label>
          Address <span className="required">*</span>
        </label>
        <input type="text" placeholder="Enter your address" value={address} onChange={handleAddressChange} />

        {address && (
          <div>
            <p>Address on Map:</p>
            <Map
              containerElement={<div style={{ height: '400px', width: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
              address={{ lat: 37.7749, lng: -122.4194 }}
            />
          </div>
        )}

        <label>Sale</label>
        <input type="text" placeholder="Enter sale details" value={sale} onChange={(e) => setSale(e.target.value)} />

        <label>Date</label>
        <input type="text" value={date || currentDate} onChange={(e) => setDate(e.target.value)} />

        <label>Time</label>
        <input type="text" value={time || currentTime} onChange={(e) => setTime(e.target.value)} />

      
        <label>Options</label>
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>

        {options.length > 0 && (
          <div>
            <p>Selected Option:</p>
        
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
