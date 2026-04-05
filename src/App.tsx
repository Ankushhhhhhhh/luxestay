import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListingDetail from './pages/ListingDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  const [backendStatus, setBackendStatus] = useState<string>('checking...');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data.status))
      .catch(() => setBackendStatus('error'));
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white font-sans text-neutral-800">
          <Navbar />
          {backendStatus !== 'ok' && (
            <div className="bg-amber-50 text-amber-800 text-xs py-1 text-center font-medium">
              Backend status: {backendStatus}. Make sure your Supabase keys are set in the Secrets panel.
            </div>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing/:id" element={<ListingDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          
          {/* Mobile Navigation Placeholder */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden flex justify-around py-3 z-50">
            <div className="flex flex-col items-center gap-1 text-[#FF385C]">
              <div className="w-6 h-6 flex items-center justify-center">🔍</div>
              <span className="text-[10px] font-bold">Explore</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-neutral-500">
              <div className="w-6 h-6 flex items-center justify-center">❤️</div>
              <span className="text-[10px]">Wishlists</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-neutral-500">
              <div className="w-6 h-6 flex items-center justify-center">👤</div>
              <span className="text-[10px]">Log in</span>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}
