import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ChatPage from './components/ChatPage';
import ChatList from './ChatList'
import Matches from './Matches';
import Survey from './Survey';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/survey" element={<Survey />} /> {/*PLEASE ADD A BUTTON TO THIS ON PROFILE SCREEN*/}
        {/* Redirect all other paths to "/login" */}
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
