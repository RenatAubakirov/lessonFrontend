import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Температурный конвектор и Список дел
        </Typography>
        <TemperatureConverter />
        <TodoList />
      </Container>
    </>
  );
}

export default App;