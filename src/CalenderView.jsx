 import React, { useState } from 'react';
 import { motion } from 'framer-motion';
 import { Video, Clock, MapPin } from 'lucide-react';

 export default function CalendarView() {
   const [selectedDay, setSelectedDay] = useState(15);

   
   const meetingsData = {
     12: [{ id: 1, title: "Discussion", time: "10:00 AM", type: "Zoom Meeting", icon: <Video size={16} /> }],
     15: [
       { id: 2, title: "UI/UX Review with Design Team", time: "02:00 PM", type: " Room 12", icon: <MapPin size={16} /> },
       { id: 3, title: "1-on-1 with Product Manager", time: "04:30 PM", type: "Google Meet", icon: <Video size={16} /> }
     ],
     18: [{ id: 4, title: "Sprint Retro & Planning", time: "11:00 AM", type: "Conference Block A", icon: <MapPin size={16} /> }]
   };

   
    const daysInMonth = [];
    for (let i = 1; i <= 30; i++) {
        daysInMonth.push(i);
    }

   return (
     <div >
       <div>
         <h2 >Your Schedule</h2>
         <p >Select a date to preview the schedule.</p>
       </div>

       <div style={{ display: 'flex', gap: '12px',flexWrap: 'wrap', marginTop: '20px', paddingBottom: '10px' }}>
         {daysInMonth.map((day) => {
           const isSelected = selectedDay === day;
           const hasMeetings = !!meetingsData[day];

           return (
             <motion.button 
              key={day}
               whileHover={{ y: -2 }}
               whileTap={{ scale: 0.9 }}
               onClick={() => setSelectedDay(day)}
            >
               <span >Jun</span>
               <span >{day}</span> 
             </motion.button>
           );
       })}
       </div>

       
      <div >
         <h3 >
           Agenda for June{selectedDay}

        </h3>

        {meetingsData[selectedDay] ? (
          meetingsData[selectedDay].map((meeting) => (
            <motion.div
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               key={meeting.id}
              
             >
               <div style={{background: '#334155',borderRadius: '8px', padding: '15px', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h4 style={{ color: '#818cf8', marginTop: 0, display: 'flex', gap: '8px' }} >{meeting.title}</h4>
                <div style={{ color: '#94a3b8', fontSize: '14px'  }} >
                   <span ><Clock size={14} /> {meeting.time}</span>
                   <span >{meeting.icon} {meeting.type}</span>
                 </div>
               </div>
               <button style={{borderRadius:'10px'}} >
                Join 
               </button>
             </motion.div>
         ))
       ) : (
         <p >No meetings on the calendar for this date.</p>
        )}
      </div>
    </div>
  );
 }



