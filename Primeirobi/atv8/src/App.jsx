import { useState } from 'react';
import './App.css';
import Header from './assets/components/Header';
import TaskItem from './assets/components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tarefa 1' }
  ]);

  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <Header />
      
      <main>
        <form onSubmit={addTask} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Adicione uma tarefa..."
            style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0066cc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Adicionar
          </button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onRemove={removeTask} />
          ))}
        </ul>
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.8rem', color: '#777' }}>
        <p>&copy; 2026 - Rafael Thober</p>
      </footer>
    </div>
  );
}

export default App;