import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import InvitationPage from './pages/InvitationPage';
import AdminDashboard from './components/AdminDashboard';
import LandingPage from './pages/LandingPage';

const ClientApp = () => {
  const { slug } = useParams();
  return (
    <DataProvider slug={slug}>
      <InvitationPage />
    </DataProvider>
  );
};

const AdminWrapper = () => {
  const { slug } = useParams();
  return (
    <DataProvider slug={slug}>
      <AdminDashboard />
    </DataProvider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:slug" element={<ClientApp />} />
        <Route path="/:slug/admin" element={<AdminWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
