import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '16px', maxWidth: '400px', margin: 'auto' }}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddTask}
        style={{ marginTop: '8px' }}
      >
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
