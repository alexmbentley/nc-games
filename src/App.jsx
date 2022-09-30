import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AllReviews from './components/AllReviews';
import SingleReview from './components/SingleReview';
import { useState } from 'react';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/reviews/category/:category" element={<AllReviews />} />
        <Route path="/reviews/id/:id" element={<SingleReview />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
