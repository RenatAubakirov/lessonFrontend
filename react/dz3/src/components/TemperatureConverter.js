import React, { useState } from 'react';
import { TextField, Paper, Typography } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertCelsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  const convertFahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  };

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);
    setFahrenheit(convertCelsiusToFahrenheit(value).toFixed(2));
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);
    setCelsius(convertFahrenheitToCelsius(value).toFixed(2));
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px', maxWidth: '400px' }}>
      <Typography variant="h5" gutterBottom>
        Температурный конвертер
      </Typography>
      <TextField
        label="Цельсия (°C)"
        value={celsius}
        onChange={handleCelsiusChange}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Фаренгейта (°F)"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        type="number"
        fullWidth
        margin="normal"
      />
    </Paper>
  );
};

export default TemperatureConverter;