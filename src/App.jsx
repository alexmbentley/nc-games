import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AllReviews from './components/AllReviews';
import CategoryReviews from './components/CategoryReviews';

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/reviews" element={<AllReviews />} />
        <Route
          path="/reviews/category/:category"
          element={<CategoryReviews />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
