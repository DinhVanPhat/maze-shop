import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Login from './components/user/Login';
import DangPhatTrien from './components/user/DangPhatTrien';

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dang-phat-trien" element={<DangPhatTrien />} />
      <Route path="/dang-nhap" element={<Login />} />
    </Routes>
  </Router>
  );
};

export default App;