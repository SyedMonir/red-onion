import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import MealDetails from './Pages/Home/MealDetails/MealDetails';
import Footer from './Pages/SharedComponent/Footer';
import Header from './Pages/SharedComponent/Header';
import NoRoute from './Pages/SharedComponent/NoRoute';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal-details/:mealId" element={<MealDetails />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
