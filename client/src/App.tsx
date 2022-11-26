import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import { AllSelect } from './components/TestingSelect/index';

const App:React.FC = () => {
  
  return (
    <Grid className="App">
     <AllSelect />
    </Grid>
  );
}

export default App;


