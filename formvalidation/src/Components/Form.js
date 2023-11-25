import React, { useState } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Form.css'; 

import '@fortawesome/fontawesome-free/css/all.min.css';


const Map = withGoogleMap(({ address }) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
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
  const [options, setOptions] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOptionsChange = (e) => {
    setOptions(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phoneNO,
      address,
      sale,
      date,
      time,
      options,
      notes,
    };

    console.log(formData);
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setPhoneNo('');
    setAddress(null);
    setSale('');
    setDate('');
    setTime('');
    setOptions('');
    setNotes('');
  };

  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="App">
      <h1>Add new lead form</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label>
            <i className="fas fa-user"></i> Name <span className="required">*</span>
          </label>
          <div className="input-with-icon">
          
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>

        <div className="input-container">
          <label>
            <i className="fas fa-envelope"></i> Email <span className="required">*</span>
          </label>
          <div className="input-with-icon">
           
            <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div className="input-container">
          <label>
            <i className="fas fa-phone"></i> Phone Number
          </label>
          <div className="input-with-icon">
          
            <input type="text" placeholder="Enter your phone number" value={phoneNO} onChange={(e) => setPhoneNo(e.target.value)} />
          </div>
        </div>

        <div className="input-container">
          <label>
            <i className="fas fa-map-marker-alt"></i> Address <span className="required">*</span>
          </label>
          <div className="input-with-icon">
           
            <input type="text" placeholder="Enter your address" value={address} onChange={handleAddressChange} />
          </div>
        </div>

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

        <div className="input-container">
          <label>
            <i className="fas fa-dollar-sign"></i> Sale
          </label>
          <input type="text" placeholder="Enter sale details" value={sale} onChange={(e) => setSale(e.target.value)} />
        </div>

        <div className="input-container">
          <label>
            <i className="fas fa-calendar-alt"></i> Date
          </label>
          <input type="text" value={date || currentDate} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="input-container">
          <label>
            <i className="fas fa-clock"></i> Time
          </label>
          <input type="text" value={time || currentTime} onChange={(e) => setTime(e.target.value)} />
        </div>

        <div className="input-container">
          <label>
            <i className="fas fa-list"></i> Options
          </label>
          <select value={options} onChange={handleOptionsChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <div className="input-container">
        <label>
          <i className="fas fa-list"></i> Options
        </label>
        <select value={options} onChange={handleOptionsChange}>
          <option value="option1">Product 1</option>
          <option value="option2"> Product 2</option>
        </select>
      </div>
        <div className="input-container">
          <label>
            <i className="fas fa-sticky-note"></i> Notes
          </label>
          <textarea
            placeholder="Enter your notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit">Add Leads</button>
        <button type="button" onClick={handleCancel}>
          <i className="fas fa-times"></i> Cancel
        </button>
      </form>
    </div>
  );
}
export default Form;