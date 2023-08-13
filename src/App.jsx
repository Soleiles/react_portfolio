import { Outlet } from 'react-router-dom';

import './App.css';
import NavTabs from './components/Nav';

function App() {
  return (
    <>
      <NavTabs />
      <Outlet />
    </>
  );
}

export default App;
