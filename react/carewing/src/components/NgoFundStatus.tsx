import React, { useState, useEffect } from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';
import ProgressBar from './ProgressBar';
import NavNgo from './NgoNav';
import Background from './Background';
import './NgoFundStatus.css'

import ToDoList from './ToDoList';

export default function NgoFundStatus() {
  const [current, setCurrent] = useState(null);
  const [target, setTarget] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#E6E6FA"; // Set the body background to light violet

    const getAmounts = async () => {
      try {
        const response = await fetch('http://localhost:5001/Ngos/FundStatus?id=' + localStorage.getItem('ngoId'));
        const data = await response.json();
        
        setCurrent(data.current);
        setTarget(data.target);
        
      } catch(error) {
        console.log(error);
      }
    };

    getAmounts();

    return () => {
      document.body.style.backgroundColor = ""; // Reset the background when the component unmounts
    };
  }, []);

  const getEmojiCode = (percentage: number) => {
    if (percentage <= 20) return '😐';
    if (percentage <= 40) return '🙂';
    if (percentage <= 60) return '😊';
    if (percentage <= 80) return '🥳';
    return '🎉';
  };

  return (
    <>
      <NavNgo />

      <h1 id="h1-funds">
      Campaign Control Center
      </h1>

      <h2 className="funds-text">Funds & Activity Tracker</h2>
      
      <div className="bar_container">
        <div className="container_bar" style={{ paddingLeft: '100px', paddingBottom: '100px', paddingTop: '50px'}}>
          <ProgressBar totalAmount={Number(target)} currentAmount={Number(current)} />
          {/* Added Typography to display the raised amount */}
          <Box display="flex" flexDirection="column" alignItems="flex-start" mt={2}>
            <Typography variant="body2" style={{ fontSize: '48px' }}>
              {getEmojiCode(Number(current) / Number(target) * 100)}
            </Typography>
            {/* Displaying the current raised amount */}
            {current !== null && (
              <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
                Raised: ${current} of ${target}
              </Typography>
            )}
          </Box>
          <ToDoList />
        </div>
      </div>
    </>
  );
}

