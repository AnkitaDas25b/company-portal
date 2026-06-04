
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Edit2, Check, X } from 'lucide-react';

export default function TodoList() {
  const [tasks, setTasks] = useState(() => {
    // 1. Look for saved tasks in the browser
  const cachedData = localStorage.getItem('');

  // 2. If we found them, convert them from text to js arr of obj
  if (cachedData) {
    return JSON.parse(cachedData);
  } 
  
  else {
    return [
      { id: 1, text: "make a css file ", completed: false },
      { id: 2, text: "check Framer Motion  animations", completed: true }
    ];
  }
});

  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem('', JSON.stringify(tasks));
   
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;//if input is empty or has spaces
    

  const newTask = { 
    id: Date.now(), 
    text: input, 
    completed: false 
  };

  
  setTasks([...tasks, newTask]);

    setInput("");
  };

const toggleComplete = (id) => {

  let updatedTasks = [];

  
  for (let i = 0; i < tasks.length; i++) {
    let currentTask = tasks[i];

    
    if (currentTask.id === id) {
      
      let modifiedTask = { 
        id: currentTask.id,
        text: currentTask.text,
        completed: !currentTask.completed 
      };
      updatedTasks.push(modifiedTask);
    } 
    
    else {
      updatedTasks.push(currentTask);
    }
  }

  setTasks(updatedTasks);
};


  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };


  const saveEdit = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: editText } : t));
    setEditingId(null);
   
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px' }}>
      <h2 className="heading-title">Workspace Tasks</h2>
      <p >Tasks to be performed can be stored here</p>
      
      <form onSubmit={addTask} className="todo-form">
        <input   //new task obj 
          type="text" 
          value={input}
          onChange={(event) => setInput(event.target.value)}
          
          placeholder="Type an task to be done.."
          className="todo-input"
        />
        <button type="submit" className="add-btn" style={{backgroundColor:'#463fc7',borderRadius:'10px'}}><Plus size={18}/></button>
      </form>

      {/* READ / UPDATE / DELETE */}
      <div className="todo-list-wrapper">
        <AnimatePresence initial={false}>
            
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, height: 0 }}//entry of new task
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}//del
                className="todo-row"
              >
                <div className="todo-left">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)
                     
                    }
                    
                  />
                  
                  {editingId === task.id ? (
                    <input
                      type="text"
                      value={editText} 
                      onChange={(event) => setEditText(event.target.value)}
                      className="todo-input"
                      style={{ padding: '4px 8px' }}
                    />
                  ) : (
                    <span className={task.completed ? 'completed-text' : ''}>{task.text}</span>
                  )}
                </div>

                <div className="action-buttons">
                  {editingId === task.id ? (
                    <>
                      <button onClick={() => saveEdit(task.id)} className="icon-btn" style={{ color: '#10b981' }}><Check size={16}/></button>
                      <button onClick={() => setEditingId(null)} className="icon-btn" style={{ color: '#ef4444' }}><X size={16} /></button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(task.id, task.text)} className="icon-btn"><Edit2 size={14}/></button>
                      <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))} className="icon-btn"><Trash2 size={14}/></button>
                    </>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <p style={{ textAlign: 'center', padding: '24px', color: '#64748b', fontStyle: 'italic', margin: 0 }}>All Tasks done! Great job!</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}