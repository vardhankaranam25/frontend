import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface ProgressBarProps {
  totalAmount: number;
  currentAmount: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ totalAmount, currentAmount }) => {
  const normalizedValue = (currentAmount / totalAmount) * 100;

  return (
    <Box position="relative" width="100%" display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={normalizedValue}
          sx={{
            height: '10px',
            width: '1000px',
            borderRadius: '5px',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'green', // Progress bar color
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '-20px', // Adjust top position to place the box above the progress bar
            left: `${normalizedValue}%`,
            transform: 'translateX(-50%)', // Center the box on the progress endpoint
            minWidth: '40px', // Ensure the box is large enough for the text
            textAlign: 'center',
            
            p: '2px 8px',
            
            '&::after': {
              content: '""',
              position: 'absolute',
              left: '50%',
              bottom: '-5px', // Half the height of the triangle to move it under the box
              transform: 'translateX(-50%)',
              borderWidth: '5px 5px 0',
              borderColor: `${'divider'} transparent`,
              display: 'block',
              width: '0',
            }
          }}
        >
          ${currentAmount.toFixed(2)}
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          right: '400px',
          top: '-20px', // Adjust top position to place the box above the progress bar
        }}
      >
        ${totalAmount.toFixed(2)}
      </Typography>
    </Box>
  );
};

export default ProgressBar;
