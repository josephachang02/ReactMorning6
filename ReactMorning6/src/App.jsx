import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [houses, setHouses] = useState([
    { name: 'Lakeside Villa', address: '123 Lake St, Watertown, MA', price: 1000000, isSold: false },
    { name: 'Mountain Retreat', address: '456 Mountain Rd, Boulder, CO', price: 750000, isSold: true },
    { name: 'Downtown Apartment', address: '789 Main St, Seattle, WA', price: 500000, isSold: false }
  ]);

  return (
    <div className="App">
      <Home houses={houses} />
    </div>
  );
}

const Home = ({ houses }) => {
  return (
    <div>
      <h1>Our Home Listings</h1>
      <HouseDisplay houses={houses} />
    </div>
  );
}

const HouseDisplay = ({ houses }) => {
  return (
    <div>
      <h2>Available Houses on the Market:</h2>
      {houses.map((house, index) => (
        <div key={index}>
          <h3>{house.name}</h3>
          <p>{house.address}</p>
          <p>Price: ${house.price}</p>
          {house.isSold ? <p>Sold</p> : <p>Available</p>}
        </div>
      ))}
    </div>
  );
}

export default App;