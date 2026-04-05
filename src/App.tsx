import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListingDetail from './pages/ListingDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-neutral-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
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
  );
}
