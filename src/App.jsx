import { Outlet } from 'react-router-dom';

import './App.css';
import NavTabs from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavTabs />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
