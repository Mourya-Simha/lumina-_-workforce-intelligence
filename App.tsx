import React, { useState } from 'react';
import { useApp } from './services/store';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Attendance } from './pages/Attendance';
import { Analytics } from './pages/Analytics';
import { Leaves } from './pages/Leaves';
import { Alerts } from './pages/Alerts';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { Workflow } from './pages/Workflow';
import { ToastContainer } from './components/ToastContainer';

const App = () => {
  const { user } = useApp();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!user) {
    return <Login />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard onNavigate={setCurrentPage} />;
      case 'attendance': return <Attendance />;
      case 'analytics': return <Analytics />;
      case 'leaves': return <Leaves />;
      case 'alerts': return <Alerts />;
      case 'workflow': return <Workflow />;
      case 'settings': return <Settings />;
      default: return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-lumina-base text-lumina-text font-sans selection:bg-lumina-accent selection:text-lumina-base">
      <Sidebar currentPage={currentPage} setPage={setCurrentPage} />
      
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 md:hidden" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-64 h-full bg-lumina-base animate-slide-right" onClick={e => e.stopPropagation()}>
                  <Sidebar currentPage={currentPage} setPage={(p) => { setCurrentPage(p); setMobileMenuOpen(false); }} />
              </div>
          </div>
      )}

      <main className="flex-1 md:ml-64 relative">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute bottom-0 left-64 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] opacity-30"></div>
        </div>

        <TopBar onMenuClick={() => setMobileMenuOpen(true)} />
        
        <div className="p-6 max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>

      <ToastContainer />
    </div>
  );
};

export default App;