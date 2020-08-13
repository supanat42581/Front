import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import LocalStorageService from './services/LocalStorageService';
import Course from './components/pages/Course';
import Booking from './components/pages/Booking'
import StatusPending from './components/pages/StatusPending';
import Register from './components/pages/Register';
function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
