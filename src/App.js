//import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import './App.css';
import Musical from './containers/Musical/Musical'
// import Instrument from './Components/Instruments/Instrument/Instrument';
// import Products from './containers/Musical/Products/Products';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Musical />
    </Layout>
    </BrowserRouter>
  );
} 

export default App;
