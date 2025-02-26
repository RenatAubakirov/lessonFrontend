import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px', maxWidth: '400px' }}>
      <Typography variant="h5" gutterBottom>
        Список дел
      </Typography>
      <TextField
        label="Новая задача"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleAddTask} style={{ marginBottom: '20px' }}>
        Добавить
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;