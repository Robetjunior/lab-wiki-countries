import React, { useState } from 'react';

import countriesList from '../countries.json';

import { Link } from 'react-router-dom';

function CountriesList() {
  const [countries, setCountries] = useState(countriesList);

  return (
    <div>
      <ul>
        {countries.map((country, idx) => {
          return (
            <Link key={idx} to={'/country/' + country.cca3}>
              <li>{`${country.flag} ${country.name.common}`}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default CountriesList;
