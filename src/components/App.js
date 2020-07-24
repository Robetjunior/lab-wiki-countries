import React from 'react';
import './App.css';

import CountriesList from './CountriesList';

import { BrowserRouter, Route } from 'react-router-dom';

import CountryDetail from './CountryDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route
          path="/country/:id"
          exact
          render={() => <CountryDetail></CountryDetail>}
        ></Route>
      </BrowserRouter>
      <div>
        <CountriesList />
      </div>
    </div>
  );
}

export default App;
