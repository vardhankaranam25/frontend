
import React from 'react';

interface ToDoItemProps {
  task: string;
  isComplete: boolean;
  onToggleComplete: (task: string) => void;
  onRemove: (task: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task, isComplete, onToggleComplete, onRemove }) => {
  return (
    <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
      <div style={{ textDecoration: isComplete ? 'line-through' : 'none', flexGrow: 1 }}>
        {task}
      </div>
      <button 
        onClick={() => onToggleComplete(task)}
        style={{ backgroundColor: isComplete ? 'orange' : 'lightblue', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '5px' }}>
        {isComplete ? 'Undo' : 'Complete'}
      </button>
      <button 
        onClick={() => onRemove(task)}
        style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Remove
      </button>
    </div>
  );
};

export default ToDoItem;


