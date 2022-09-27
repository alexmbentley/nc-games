import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AllReviews from './components/AllReviews';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/reviews" element={<AllReviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
