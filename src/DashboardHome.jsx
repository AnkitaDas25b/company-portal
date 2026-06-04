
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Flame } from 'lucide-react';

export default function DashboardHome({ setActiveTab }) {
  const [clockedIn, setClockedIn] = useState(false);
   //This is called Destructuring Props. It means this component is receiving that tab-switching function from its parent (App.js),
   //  allowing a button click here to change the page there.
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto',padding:40 }}>
       <h2 className="heading-title" style={{ color: '#f8fafc' }}>Welcome back </h2> 
      <p >Here is a quick glance at company's ecosystem today.</p>

      <div className="card attendance-widget">
        <div >
           <div >
            <Clock size={22} />
          </div> 
          <div>
            <h3 >Shift Attendance Tracker</h3>
            <p >Status: {clockedIn ? " Active on Shift" : " Out of Office"}</p>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setClockedIn(!clockedIn)}
          className={`primary-btn ${clockedIn ? 'clocked-out' : ''}`}
        >
          {clockedIn ? 'Clock Out' : 'Clock In Now'}
        </motion.button>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h4 style={{ color: '#818cf8', marginTop: 0, display: 'flex', gap: '8px' }}><Users size={18}/> Operations</h4>
          <p >Jump right into your  workspace </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <button onClick={() => setActiveTab('calendar')} className="primary-btn" style={{ background: '#334155', fontSize: '12px' }}>View Meetings</button>
            <button onClick={() => setActiveTab('todo')} className="primary-btn" style={{ background: '#4f46e5', fontSize: '12px' }}>Manage Tasks</button>
          </div>
        </div>

        <div className="card">
          <h4 style={{ color: '#f59e0b', marginTop: 0,  gap: '8px' }}><Flame size={18}/>  Notice</h4>
          <p style={{ color: '#cbd5e1', fontStyle: 'italic', fontSize: '14px', margin: '8px 0' }}>
           Please note that our office will be closed on Friday, June 19, 2026, in observance of the upcoming public holiday.
          </p>
          
        </div>
      </div>
    </div>
  );
}