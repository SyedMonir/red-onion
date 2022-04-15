import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import MealDetails from './Pages/MealDetails/MealDetails';
import Footer from './Pages/SharedComponent/Footer';
import Header from './Pages/SharedComponent/Header';
import Login from './Pages/SharedComponent/Login';
import NoRoute from './Pages/SharedComponent/NoRoute';
import Signup from './Pages/SharedComponent/Signup';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-details/:mealId" element={<MealDetails />} />
          <Route path="/add-to-cart" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
