

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, CheckSquare, Home, Award } from 'lucide-react';
import DashboardHome from './DashboardHome';
import CalendarView from './CalenderView';
import TodoList from './TodoList';
import PerksPage from './PerksPage';
import './App.css'; 

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [//arr of objs
    { id: 'home', label: 'Dashboard', icon: <Home size={18} /> },
    { id: 'calendar', label: 'Meetings Calendar', icon: <CalendarIcon size={18} /> },
    { id: 'todo', label: 'Task Manager ', icon: <CheckSquare size={18} /> },
    { id: 'perks', label: 'Employee Perks', icon: <Award size={18} /> },
  ];

  return (
    <div className="app-container">
      
      <button 
      className="mobile-menu-toggle"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      
    >
      {isMobileMenuOpen ? ' Close Menu' : 'Open Menu'}
    </button>
    

      <motion.div 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}
      >
        <div>
          <div className="logo-section">
            
            <h1 className="logo-text">Company xyz</h1>
          </div> 
          
          <nav className="nav-menu">
            {menuItems.map((item) => (
              <button   
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`nav-button ${activeTab === item.id ? 'active' : ''}`   
            }
          
              > 
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </motion.div>

      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'home' && <DashboardHome setActiveTab={setActiveTab}
              />}
            
            {activeTab === 'calendar' && <CalendarView />}
            {activeTab === 'todo' && <TodoList />}
            {activeTab === 'perks' && <PerksPage />}
          </motion.div>
        </AnimatePresence>
      </main>

    </div>
  );
}