import React, { useState } from 'react';
import { Paper, FormControl, TextField, Button } from '@mui/material';

const AddCategory = () => {
  const [data, setData] = useState({
    turkmenName: '',
    russianName: '',
    englishName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.turkmenName === '' || data.russianName === '' || data.englishName === '') {
      alert('Please fill in all the fields');
    } else {
      // Send the data to the API
    }
  };

  return (
    <Paper>
      <FormControl>
        <TextField
          type="text"
          label="Turkmençe ady"
          required
          value={data.turkmenName}
          onChange={(e) => setData({ ...data, turkmenName: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="text"
          label="Rusça ady"
          required
          value={data.russianName}
          onChange={(e) => setData({ ...data, russianName: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="text"
          label="Inlisce ady"
          required
          value={data.englishName}
          onChange={(e) => setData({ ...data, englishName: e.target.value })}
        />
      </FormControl>
      <Button
      variant='outlined'
        onClick={handleSubmit}
        // This is the event listener
        >Submit</Button>
    </Paper>
  );
};

export default AddCategory;
