import React, { Component } from 'react';
import Routes from './routes';

import "./styles.css"

import Header from './components/Header'
import Main from './pages/main';
import { Route } from 'react-router-dom';


const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

// - Sem routes
// const App = () => (
//   <div className="App">
//     <Header />
//     <Main />
//   </div>
// );

// function App() {
//   return (
//     <div className="App">
//      <h1>Hello world</h1>
//     </div>
//   );
// }

export default App;
