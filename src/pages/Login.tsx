import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { motion } from 'motion/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white border rounded-xl p-8 shadow-sm"
      >
        <h1 className="text-2xl font-bold mb-6">Welcome back</h1>
        
        {error && (
          <div className="bg-rose-50 text-rose-600 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-neutral-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C]"
              required
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase text-neutral-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF385C]/20 focus:border-[#FF385C]"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF385C] text-white py-3 rounded-lg font-bold hover:bg-[#E31C5F] transition disabled:opacity-50 mt-2"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#FF385C] font-bold hover:underline">
            Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
