// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { MotionConfig } from 'framer-motion';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <Header />
          <main className="flex-grow">
            <Toaster />
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </Router>
  );
}

export default App;