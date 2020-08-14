import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import LocalStorageService from './services/LocalStorageService';
import Course from './components/pages/Course';
import Booking from './components/pages/Booking'
import StatusPending from './components/pages/StatusPending';
import Register from './components/pages/Register';
import { SearchContextProvider } from './context/SearchContext';



function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    <SearchContextProvider>
      <PrivateRoutes role={role} setRole={setRole} />
    </SearchContextProvider>
  );
}

export default App;
