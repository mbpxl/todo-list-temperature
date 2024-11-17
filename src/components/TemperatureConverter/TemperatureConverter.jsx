import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setFahrenheit(((numericValue * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setCelsius(((numericValue - 32) * 5 / 9).toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>
        <TextField
          label="Celsius"
          variant="outlined"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Fahrenheit"
          variant="outlined"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </Grid>
    </Grid>
  );
};

export default TemperatureConverter;
