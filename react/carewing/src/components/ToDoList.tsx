
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

interface Task {
  name: string;
  isComplete: boolean;
}

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = { name: inputValue.trim(), isComplete: false };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const handleToggleComplete = (taskName: string) => {
    const newTasks = tasks.map(task => 
      task.name === taskName ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(newTasks);
  };

  const handleRemoveTask = (taskName: string) => {
    setTasks(tasks.filter(task => task.name !== taskName));
  };

  return (
    <div style={{ padding: '50px', maxWidth: '800px', margin: 'auto', alignContent: 'center' }}>
      <div style={{ display: 'flex', marginBottom: '10px', gap: '20px' }}> {/* Flex container for input and button */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          style={{ flexGrow: 1, padding: '10px 20px', marginRight: '10px' }} // flexGrow allows the input to expand
        />
        <button 
          onClick={handleAddTask} 
          style={{ backgroundColor: 'lightgreen', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Add Task
        </button>
      </div>
      <div>
        {tasks.map(task => (
          <ToDoItem 
            key={task.name} 
            task={task.name} 
            isComplete={task.isComplete} 
            onToggleComplete={handleToggleComplete} 
            onRemove={handleRemoveTask} 
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;


