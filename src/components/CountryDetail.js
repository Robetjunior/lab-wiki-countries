import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import countries from '../countries.json';

function CountryDetail(props) {
  const { id } = useParams();
  console.log(id);
  const [country, setCountry] = useState([]);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default CountryDetail;
